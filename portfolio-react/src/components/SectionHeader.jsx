import { motion } from 'framer-motion'

const variantClassMap = {
  blue: '',
  lavender: 'overline-lavender',
  sand: 'overline-sand',
  mint: 'section-header-overline-mint',
}

export default function SectionHeader({
  overline,
  title,
  subtitle,
  align = 'left',
  variant = 'blue',
}) {
  const isCenter = align === 'center'
  const overlineClass = variantClassMap[variant] || ''

  return (
    <motion.div
      className={`section-header-block ${isCenter ? 'center' : ''}`}
      initial={{
        opacity: 0,
        y: 18,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 0.58,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {overline && (
        <span className={`overline ${overlineClass}`.trim()}>
          {overline}
        </span>
      )}

      <div className="section-header-title-wrap">
        <h2 className="heading-xl">
          {title}
        </h2>

        <span className={`section-header-line ${variant}`} aria-hidden="true" />
      </div>

      {subtitle && (
        <p className="body-lg">
          {subtitle}
        </p>
      )}

      <style>{`
        .section-header-block {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
          max-width: 850px;
          margin-bottom: 4rem;
          text-align: left;
        }

        .section-header-block.center {
          align-items: center;
          margin-inline: auto;
          text-align: center;
        }

        .section-header-title-wrap {
          display: grid;
          gap: 1rem;
          width: 100%;
        }

        .section-header-block h2 {
          max-width: 13.5ch;
          color: var(--text-primary);
          line-height: 1.02;
        }

        .section-header-block.center h2 {
          margin-inline: auto;
        }

        .section-header-block p {
          max-width: 64ch;
          color: var(--text-muted);
          line-height: 1.78;
        }

        .section-header-block.center p {
          margin-inline: auto;
        }

        .section-header-line {
          display: block;
          width: 5.2rem;
          height: 2px;
          border-radius: var(--radius-pill);
          background:
            linear-gradient(
              90deg,
              var(--blue),
              rgba(110, 214, 255, 0)
            );
          box-shadow: 0 0 20px rgba(110, 214, 255, 0.22);
        }

        .section-header-block.center .section-header-line {
          margin-inline: auto;
        }

        .section-header-line.lavender {
          background:
            linear-gradient(
              90deg,
              var(--lavender),
              rgba(184, 167, 255, 0)
            );
          box-shadow: 0 0 20px rgba(184, 167, 255, 0.22);
        }

        .section-header-line.sand {
          background:
            linear-gradient(
              90deg,
              var(--sand),
              rgba(232, 201, 143, 0)
            );
          box-shadow: 0 0 20px rgba(232, 201, 143, 0.22);
        }

        .section-header-line.mint {
          background:
            linear-gradient(
              90deg,
              var(--mint),
              rgba(125, 220, 195, 0)
            );
          box-shadow: 0 0 20px rgba(125, 220, 195, 0.2);
        }

        .section-header-overline-mint {
          color: var(--mint-strong);
          background: var(--mint-soft);
          border-color: rgba(125, 220, 195, 0.34);
        }

        .section-header-overline-mint::before {
          box-shadow: 0 0 0 5px rgba(125, 220, 195, 0.15);
        }

        @media (max-width: 768px) {
          .section-header-block {
            margin-bottom: 2.75rem;
          }

          .section-header-block h2 {
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .section-header-block {
            gap: 0.85rem;
            margin-bottom: 2.25rem;
          }

          .section-header-title-wrap {
            gap: 0.85rem;
          }

          .section-header-line {
            width: 4rem;
          }
        }
      `}</style>
    </motion.div>
  )
}