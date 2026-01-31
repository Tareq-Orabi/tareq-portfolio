
import { projects, skills, experience } from './data.js';

document.addEventListener('DOMContentLoaded', () => {

    // ---------------------------------------------------------
    // 1. DATA LOADING (STATIC)
    // ---------------------------------------------------------

    // --- PROJECTS ---
    async function loadProjects() {
        const grid = document.getElementById('projects-grid');
        if (!grid) return;

        try {
            // Using imported static data instead of fetch
            const projectsData = projects;

            grid.innerHTML = ''; // Clear loading message

            if (projectsData.length > 0) {
                projectsData.forEach((proj, index) => {
                    const delayClass = `stagger-${(index % 3) + 1}`;
                    const article = document.createElement('article');
                    article.className = `tech-matrix-card reveal ${delayClass}`;

                    // Simple boolean check for JSON data (1 or true)
                    const isFeatured = (proj.is_featured === 1 || proj.is_featured === true);
                    const featuredBadge = isFeatured ? '<div style="position:absolute; top:10px; right:10px; color:#fb923c; font-size:12px; font-weight:bold;"><i class="fas fa-star"></i> FEATURED</div>' : '';

                    const repoUrl = proj.repo_url || '#';
                    const liveUrl = proj.live_url || '#';

                    // Tag generation (Chips)
                    let chipsHtml = '';
                    if (proj.technologies) {
                        const tags = Array.isArray(proj.technologies) ? proj.technologies : proj.technologies.split(',');
                        chipsHtml = '<div class="tech-grid" style="margin-top:20px;">' +
                            tags.map(t => `
                                <div class="skill-chip">
                                    <span class="skill-name">${t.trim()}</span>
                                </div>`).join('') +
                            '</div>';
                    }

                    article.innerHTML = `
                        ${featuredBadge}
                        <div class="card-header">
                             <i class="fas fa-folder matrix-icon"></i>
                             <h3>${proj.title}</h3>
                             <div class="project-links" style="margin-left:auto; display:flex; gap:10px;">
                                <a href="${repoUrl}" target="_blank" aria-label="GitHub Repo"><i class="fab fa-github"></i></a>
                                <a href="${liveUrl}" target="_blank" aria-label="Live Demo"><i class="fas fa-external-link-alt"></i></a>
                             </div>
                        </div>
                        
                        <div class="problem-solution">
                            <span style="color:var(--text-muted); line-height:1.6;">${proj.description.replace(/\n/g, '<br>')}</span>
                        </div>

                        ${chipsHtml}
                    `;
                    grid.appendChild(article);
                    if (window.revealObserver) window.revealObserver.observe(article);
                    else article.classList.add('active'); // fallback
                });
            }
        } catch (err) {
            console.error("Projects Load Error", err);
            grid.innerHTML = '<p>Error loading projects.</p>';
        }
    }

    // --- SKILLS ---
    async function loadSkills() {
        const grid = document.getElementById('skills-grid');
        if (!grid) return;

        try {
            const skillsData = skills; // Static data

            grid.innerHTML = '';

            const categories = {
                'languages': { icon: 'fa-code', title: 'Languages', stagger: 1 },
                'backend': { icon: 'fa-server', title: 'Backend & Frameworks', stagger: 2 },
                'database': { icon: 'fa-database', title: 'Data Strategy', stagger: 3 },
                'tools': { icon: 'fa-tools', title: 'Tools & Competencies', stagger: 4 }
            };

            const grouped = {};
            // Group skills
            skillsData.forEach(s => {
                const cat = s.category || 'tools'; // fallback
                if (!grouped[cat]) grouped[cat] = [];
                grouped[cat].push(s);
            });

            Object.keys(categories).forEach(key => {
                const config = categories[key];
                const catSkills = grouped[key] || [];

                const article = document.createElement('article');
                article.className = `tech-matrix-card reveal stagger-${config.stagger}`;

                const chipsHtml = catSkills.map(s => `
                    <div class="skill-chip">
                        <span class="skill-name">${s.name}</span>
                        <div class="micro-bar-container">
                            <div class="micro-bar" style="width: ${s.level || 85}%"></div>
                        </div>
                    </div>
                `).join('');

                article.innerHTML = `
                   <div class="card-header">
                        <i class="fas ${config.icon} matrix-icon"></i>
                        <h3>${config.title}</h3>
                   </div>
                   <div class="tech-grid">
                        ${chipsHtml}
                   </div>
                `;
                grid.appendChild(article);
                if (window.revealObserver) window.revealObserver.observe(article);
                else article.classList.add('active');
            });

        } catch (e) { console.error("Skills Load Error", e); }
    }

    // --- EXPERIENCE ---
    async function loadExperience() {
        const timeline = document.getElementById('experience-timeline');
        if (!timeline) return;

        try {
            const entries = experience; // Static data

            timeline.innerHTML = '';

            entries.forEach((exp, index) => {
                const delayClass = `stagger-${(index % 2) + 1}`;
                const article = document.createElement('article');
                article.className = `timeline-item reveal ${delayClass}`;

                // Description handling (newlines to paragraphs or br)
                const desc = exp.description ? exp.description.replace(/\n/g, '<br>') : '';

                article.innerHTML = `
                    <div class="timeline-marker"></div>
                    <div class="tech-matrix-card" style="padding:25px;">
                        <span class="timeline-date">${exp.year_range}</span>
                        <div class="card-header" style="border-bottom:none; margin-bottom:10px; padding-bottom:0;">
                             <h3 class="role" style="margin:0;">${exp.role}</h3>
                        </div>
                        <h4 class="company" style="margin-bottom:15px; color:var(--orange-400);">${exp.company}</h4>
                        <p class="text-muted-sm" style="line-height:1.6;">
                            ${desc}
                        </p>
                    </div>
                 `;
                timeline.appendChild(article);
                if (window.revealObserver) window.revealObserver.observe(article);
                else article.classList.add('active');
            });

        } catch (e) { console.error("Experience Load Error", e); }
    }


    /* -----------------------------------------------------------
       INITIALIZATION
    ----------------------------------------------------------- */

    // Core Reveal Observer (used by data loaders)
    window.revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => window.revealObserver.observe(el));

    // Load Data
    loadProjects();
    loadSkills();
    loadExperience();

    // Initialize Animations (merged from dist)
    initAnimations();

    // ---------------------------------------------------------
    // 3. CONTACT FORM (Netlify)
    // ---------------------------------------------------------
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const submitBtn = document.getElementById('submitBtn');
            const statusDiv = document.getElementById('formStatus');
            const originalBtnText = submitBtn.innerText;

            submitBtn.innerText = "Sending...";
            submitBtn.disabled = true;
            statusDiv.style.display = 'none';

            try {
                // Netlify Form Submission
                const formData = new FormData(contactForm);
                const body = new URLSearchParams(formData).toString();

                const response = await fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: body
                });

                if (response.ok) {
                    statusDiv.style.display = 'block';
                    statusDiv.style.color = '#10b981';
                    statusDiv.innerText = "Message sent successfully! I'll be in touch.";
                    contactForm.reset();
                } else {
                    throw new Error('Network response was not ok.');
                }
            } catch (error) {
                statusDiv.style.display = 'block';
                statusDiv.style.color = '#ef4444';
                statusDiv.innerText = "Error sending message. Please try again later.";
                console.error('Form Error:', error);
            } finally {
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }

});

/* -----------------------------------------------------------
   PERFORMANCE ANIMATIONS & UI LOGIC
----------------------------------------------------------- */
function initAnimations() {
    const state = {
        mouseX: 0,
        mouseY: 0,
        isDesktop: window.matchMedia("(min-width: 900px)").matches,
        scrollY: 0
    };

    const dom = {
        spotlightCards: document.querySelectorAll('.spotlight-card'),
        terminalWrapper: document.getElementById('tilt-terminal'),
        heroSection: document.querySelector('.hero'),
        typewriter: document.getElementById('typewriter'),
        scrambleText: document.querySelector('.scramble-text'),
        navLinks: document.querySelectorAll('nav a'),
        scrollProgress: document.getElementById('scroll-progress')
    };

    // Passive listeners for scrolling performance
    window.addEventListener('mousemove', (e) => {
        state.mouseX = e.clientX;
        state.mouseY = e.clientY;
    }, { passive: true });

    window.addEventListener('scroll', () => {
        state.scrollY = window.scrollY;

        // Scroll Progress
        if (dom.scrollProgress) {
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            const width = (scrollTop / height) * 100;
            dom.scrollProgress.style.width = width + "%";
        }
    }, { passive: true });

    window.addEventListener('resize', () => {
        state.isDesktop = window.matchMedia("(min-width: 900px)").matches;
        // Re-query cards in case new ones loaded
        dom.spotlightCards = document.querySelectorAll('.spotlight-card');
    }, { passive: true });

    // The Render Loop (60fps synchronized)
    function render() {
        if (state.isDesktop) {

            renderTilt();

        }
        requestAnimationFrame(render);
    }



    // 3D Terminal Tilt
    function renderTilt() {
        if (!dom.terminalWrapper || !dom.heroSection) return;

        const rect = dom.heroSection.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;

        const x = state.mouseX - rect.left;
        const y = state.mouseY - rect.top;

        const xPct = (x / rect.width) - 0.5;
        const yPct = (y / rect.height) - 0.5;

        // Subtle tilt for professional feel
        dom.terminalWrapper.style.transform = `rotateX(${yPct * -6}deg) rotateY(${xPct * 6}deg)`;
    }



    requestAnimationFrame(render);

    // Code Injector
    function initTypewriter() {
        if (!dom.typewriter) return; // Guard
        const codeHTML = `
<span class="code-keyword">class</span> TareqOrabi <span class="code-keyword">extends</span> Engineer {
  <span class="code-keyword">constructor</span>() {
    <span class="code-keyword">this</span>.stack = [<span class="code-string">".NET Core"</span>, <span class="code-string">"Java"</span>, <span class="code-string">"PostgreSQL"</span>];
    <span class="code-keyword">this</span>.passion = <span class="code-string">"Clean Architecture"</span>;
  }

  <span class="code-func">buildSecureSystems</span>() {
    <span class="code-keyword">return</span> <span class="code-keyword">new</span> Future();
  }
}`;
        dom.typewriter.innerHTML = codeHTML;
    }

    // Hacker Text Effect
    function initScramble() {
        if (!dom.scrambleText) return;
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";
        const originalText = dom.scrambleText.dataset.value;
        let iteration = 0;

        const interval = setInterval(() => {
            dom.scrambleText.innerText = originalText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) return originalText[index];
                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join("");

            if (iteration >= originalText.length) clearInterval(interval);
            iteration += 1 / 3;
        }, 30);
    }

    // Simple Nav Active State Logic
    function updateNav() {
        const sections = document.querySelectorAll('section');
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        dom.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', updateNav, { passive: true });

    initTypewriter();
    initScramble(); // Call immediately since we are in DOMContentLoaded
}
