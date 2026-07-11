import{a as e,i as t,n,o as r,r as i,s as a,t as o}from"./index-Qp8VkrpX.js";var s=a(r(),1),c=e(),l=`#0C0C0D`,u=`#C89A18`;function d(e,t=0,n=1){return Math.max(t,Math.min(n,e))}function f(e){let t=String(e||``).replace(`#`,``).trim(),n=t.length===3?t.split(``).map(e=>e+e).join(``):t.padEnd(6,`0`).slice(0,6),r=Number.parseInt(n.slice(0,2),16),i=Number.parseInt(n.slice(2,4),16),a=Number.parseInt(n.slice(4,6),16);return[Number.isFinite(r)?r/255:0,Number.isFinite(i)?i/255:0,Number.isFinite(a)?a/255:0]}function p(e){let t=navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4,n=navigator.deviceMemory&&navigator.deviceMemory<=4,r=!!(t||n||navigator.connection?.saveData);return e<=640?{fps:r?20:26,dprCap:1,maxPixels:105e4,mouse:!1,iterations:r?18:22}:e<=1080?{fps:r?24:32,dprCap:r?1:1.15,maxPixels:r?14e5:19e5,mouse:!r,iterations:r?22:26}:{fps:r?28:40,dprCap:r?1:1.35,maxPixels:r?2e6:3e6,mouse:!0,iterations:28}}function m(e,t,n,r){let i=n??window.devicePixelRatio??1,a=Math.min(i,r.dprCap),o=Math.sqrt(r.maxPixels/Math.max(1,e*t));return Math.max(.75,Math.min(a,o))}var h=`
attribute vec2 position;
attribute vec2 uv;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,g=`
precision highp float;

#define TAU 6.283185307179586

uniform vec3 iResolution;
uniform vec2 iMouse;
uniform float iTime;

uniform vec3 uGoldColor;
uniform vec3 uBackgroundColor;
uniform float uSpeed;
uniform int uStreakCount;
uniform float uStreakWidth;
uniform float uStreakLength;
uniform float uGlow;
uniform float uDensity;
uniform float uTwinkle;
uniform float uZoom;
uniform float uBackgroundGlow;
uniform float uOpacity;
uniform float uMouseEnabled;
uniform float uMouseStrength;
uniform float uMouseRadius;
uniform int uIterations;

varying vec2 vUv;

float tanhScalar(float value) {
  float exponential = exp(-2.0 * value);
  return (1.0 - exponential) / (1.0 + exponential);
}

vec2 sceneCoordinate(vec2 fragmentCoordinate, vec2 resolution) {
  vec2 point = (
    fragmentCoordinate + fragmentCoordinate - resolution
  ) / resolution.x;
  float travel = 0.0;
  float distanceToSurface = 1e3;
  vec4 orbit = vec4(0.0);

  for (int iteration = 0; iteration < 28; iteration++) {
    if (iteration >= uIterations || distanceToSurface <= 1e-4) break;

    orbit = travel * normalize(vec4(point, uZoom, 0.0))
      - vec4(0.0, 4.0, 1.0, 0.0) / 4.5;
    distanceToSurface = 1.0 - sqrt(length(orbit * orbit));
    travel += distanceToSurface;
  }

  return vec2(orbit.x, atan(orbit.z, orbit.y));
}

void mainImage(out vec4 outputColor, vec2 fragmentCoordinate) {
  vec2 resolution = iResolution.xy;
  vec2 normalizedPoint = (
    fragmentCoordinate + fragmentCoordinate - resolution
  ) / resolution.x;
  float time = 0.1 * iTime * uSpeed + 9.0;
  float angularRings = max(
    1.0,
    floor(TAU * max(uDensity, 0.05) + 0.5)
  );
  vec2 cellSize = vec2(5e-3, TAU / angularRings);

  vec2 coordinate = sceneCoordinate(fragmentCoordinate, resolution);
  vec2 coordinateX = sceneCoordinate(
    fragmentCoordinate + vec2(1.0, 0.0),
    resolution
  );
  vec2 coordinateY = sceneCoordinate(
    fragmentCoordinate + vec2(0.0, 1.0),
    resolution
  );
  vec2 derivativeX = coordinateX - coordinate;
  vec2 derivativeY = coordinateY - coordinate;
  derivativeX.y -= TAU * floor(derivativeX.y / TAU + 0.5);
  derivativeY.y -= TAU * floor(derivativeY.y / TAU + 0.5);
  vec2 filterWidth = abs(derivativeX) + abs(derivativeY);

  float mouseGlow = 0.0;
  if (uMouseEnabled > 0.5) {
    vec2 normalizedMouse = (iMouse + iMouse - resolution) / resolution.x;
    float mouseDistance = length(normalizedPoint - normalizedMouse);
    mouseGlow = exp(
      -mouseDistance * mouseDistance /
      max(uMouseRadius * uMouseRadius, 1e-4)
    ) * uMouseStrength;
  }

  float streakRadius = 5e-4 * uStreakWidth;
  vec2 antialiasWidth = vec2(max(length(filterWidth), 1e-5));
  float tail = 19.0 / max(uStreakLength, 0.05);
  float lightEnergy = 0.0;

  for (int streak = 0; streak < 16; streak++) {
    if (streak >= uStreakCount) break;

    float streakIndex = float(streak) + 1.0;
    float identity = fract(
      sin(
        dot(
          vec2(streakIndex, floor(coordinate.x / cellSize.x + 0.5)),
          vec2(7.0, 11.0)
        ) * 73.0
      )
    );
    vec2 local = coordinate
      - (time + time * identity) * vec2(0.0, 1.0);
    local -= floor(local / cellSize + 0.5) * cellSize;

    float phase = fract(8663.0 * identity);
    float weight = mix(
      1.5,
      1.0 + sin(time + 7.0 * phase + 4.0),
      uTwinkle
    );
    weight *= 1.0 + mouseGlow * 2.0;

    vec2 inner = vec2(
      length(max(local, vec2(-1.0, 0.0))),
      length(local) - streakRadius
    ) - streakRadius;
    vec2 shape = vec2(1.0) - smoothstep(
      -antialiasWidth,
      antialiasWidth,
      inner
    );

    lightEnergy += dot(shape, vec2(exp(tail * local.y), 3.0)) * weight;
    coordinate.x += cellSize.x / 8.0;
  }

  float mappedLight = sqrt(
    max(tanhScalar(max(lightEnergy * uGlow - 0.035, 0.0)), 0.0)
  );
  float backgroundHalo = uBackgroundGlow
    / (360.0 * dot(normalizedPoint, normalizedPoint) + 6.0);

  // Exact hue unification: every luminous pixel is derived from uGoldColor.
  vec3 color = uBackgroundColor;
  color += uGoldColor * backgroundHalo;
  color += uGoldColor * mappedLight;
  color += uGoldColor * mouseGlow * 0.075;

  outputColor = vec4(color, uOpacity);
}

void main() {
  vec4 color;
  mainImage(color, vUv * iResolution.xy);
  gl_FragColor = color;
}
`;function _({className:e=``,dpr:r,paused:a=!1,goldColor:_=u,backgroundColor:v=l,speed:y=.5,streakCount:b=2,streakWidth:x=1,streakLength:S=1,glow:C=1,density:w=.6,twinkle:T=1,zoom:E=3,backgroundGlow:D=.3,opacity:O=1,mouseInteraction:k=!0,mouseStrength:A=.5,mouseRadius:j=1,mouseDampening:M=.16,mixBlendMode:N}){let P=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let e=P.current;if(!e)return;let s=window.matchMedia(`(prefers-reduced-motion: reduce)`),c=s.matches,l=!1,u=null,N=0,F=p(window.innerWidth),I;try{I=new i({dpr:m(window.innerWidth,window.innerHeight,r,F),alpha:!0,antialias:!0,powerPreference:`high-performance`})}catch(e){console.error(`Lightfall: WebGL is unavailable.`,e);return}let L=I.gl,R=L.canvas,z={width:1,height:1,quality:F,time:0,rafId:null,mouseX:.5,mouseY:.5,targetMouseX:.5,targetMouseY:.5};R.setAttribute(`aria-hidden`,`true`),R.style.width=`100%`,R.style.height=`100%`,R.style.display=`block`,R.style.pointerEvents=`none`,e.appendChild(R);let B={iResolution:{value:[1,1,1]},iMouse:{value:[0,0]},iTime:{value:0},uGoldColor:{value:f(_)},uBackgroundColor:{value:f(v)},uSpeed:{value:Math.max(0,y)},uStreakCount:{value:Math.max(1,Math.min(16,Math.round(b)))},uStreakWidth:{value:Math.max(.05,x)},uStreakLength:{value:Math.max(.05,S)},uGlow:{value:Math.max(0,C)},uDensity:{value:Math.max(.05,w)},uTwinkle:{value:d(T)},uZoom:{value:Math.max(.2,E)},uBackgroundGlow:{value:Math.max(0,D)},uOpacity:{value:d(O)},uMouseEnabled:{value:+!!k},uMouseStrength:{value:Math.max(0,A)},uMouseRadius:{value:Math.max(.01,j)},uIterations:{value:F.iterations}},V=new t(L,{vertex:h,fragment:g,uniforms:B,depthTest:!1,depthWrite:!1,cullFace:null}),H=new o(L),U=new n(L,{geometry:H,program:V,frustumCulled:!1});function W(){B.iMouse.value=[z.mouseX*L.drawingBufferWidth,(1-z.mouseY)*L.drawingBufferHeight]}function G(){let t=e.getBoundingClientRect();z.width=Math.max(1,t.width),z.height=Math.max(1,t.height),z.quality=p(z.width),I.dpr=m(z.width,z.height,r,z.quality),I.setSize(z.width,z.height),B.iResolution.value=[L.drawingBufferWidth,L.drawingBufferHeight,1],B.uIterations.value=z.quality.iterations,W()}function K(){B.iTime.value=z.time,W(),I.render({scene:U})}function q(e){if(document.visibilityState===`hidden`||l){z.rafId=null;return}let t=1e3/z.quality.fps;if(N&&e-N<t){z.rafId=window.requestAnimationFrame(q);return}let n=N?Math.min((e-N)/1e3,.1):1/z.quality.fps;N=e,z.time+=n;let r=M>0?1/M:1e3,i=1-Math.exp(-r*n);z.mouseX+=(z.targetMouseX-z.mouseX)*i,z.mouseY+=(z.targetMouseY-z.mouseY)*i,K(),z.rafId=window.requestAnimationFrame(q)}function J(){a||c||z.rafId||document.visibilityState===`hidden`||(N=0,z.rafId=window.requestAnimationFrame(q))}function Y(){z.rafId&&=(window.cancelAnimationFrame(z.rafId),null)}function X(t){if(!k||!z.quality.mouse)return;let n=e.getBoundingClientRect();z.targetMouseX=d((t.clientX-n.left)/z.width),z.targetMouseY=d((t.clientY-n.top)/z.height)}function ee(){window.clearTimeout(u),u=window.setTimeout(()=>{l||(G(),K())},150)}function Z(){document.visibilityState===`visible`?a||c?K():J():Y()}function Q(e){c=e.matches,c?(Y(),K()):J()}G(),K(),J();let $=new ResizeObserver(ee);return $.observe(e),window.addEventListener(`pointermove`,X,{passive:!0}),document.addEventListener(`visibilitychange`,Z),s.addEventListener(`change`,Q),()=>{l=!0,Y(),window.clearTimeout(u),$.disconnect(),window.removeEventListener(`pointermove`,X),document.removeEventListener(`visibilitychange`,Z),s.removeEventListener(`change`,Q),V.remove?.(),H.remove?.(),R.parentElement===e&&e.removeChild(R)}},[v,D,w,r,C,_,M,k,j,A,O,a,y,b,S,x,T,E]),(0,c.jsx)(`div`,{ref:P,className:`lightfall-container ${e}`.trim(),"aria-hidden":`true`,style:{position:`absolute`,inset:0,width:`100%`,height:`100%`,overflow:`hidden`,pointerEvents:`none`,background:v,...N?{mixBlendMode:N}:{}}})}export{l as COSMIC_BACKGROUND_COLOR,u as COSMIC_GOLD_COLOR,_ as default};