import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ExternalLink, Code2 } from 'lucide-react'
import { GitHubIcon } from '../components/BrandIcons'
import { projects } from '../data/projects'
import SEO from '../components/SEO'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

export default function Portfolio() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('pl') ? 'pl' : 'en'

  return (
    <motion.div variants={pageVariants} initial="initial" animate="enter" exit="exit">
      <SEO
        path="/portfolio"
        lang={lang}
        title={lang === 'pl' ? 'Portfolio' : 'Portfolio'}
        description={
          lang === 'pl'
            ? 'Portfolio Patryka Pawlaka — projekty backendowe w Java, Spring Boot, REST API. Subscription Manager: mikroserwis z JWT, Redis, RabbitMQ, Docker.'
            : 'Portfolio of Patryk Pawlak — backend projects in Java, Spring Boot, REST API. Subscription Manager: microservice with JWT, Redis, RabbitMQ, Docker.'
        }
      />
      <div className="min-h-screen pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-6">

          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-snow mb-3">{t('portfolio.title')}</h1>
            <div className="w-12 h-1 bg-accent rounded-full mb-4" />
          </div>

          {/* Project cards */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-surface border border-rim rounded-2xl p-8 hover:border-accent/30 transition-all duration-300"
              >
                {/* Card header */}
                <div className="flex items-start justify-between flex-wrap gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center shrink-0">
                      <Code2 size={22} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-snow text-xl font-bold leading-tight">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="text-xs text-accent font-mono">
                          ★ featured project
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {project.links.backend && (
                      <a
                        href={project.links.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-slate hover:text-accent text-xs font-medium transition-colors border border-rim hover:border-accent/30 px-3 py-1.5 rounded-lg"
                      >
                        <GitHubIcon size={14} />
                        {t('portfolio.backend')}
                      </a>
                    )}
                    {project.links.frontend && (
                      <a
                        href={project.links.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-slate hover:text-accent text-xs font-medium transition-colors border border-rim hover:border-accent/30 px-3 py-1.5 rounded-lg"
                      >
                        <GitHubIcon size={14} />
                        {t('portfolio.frontend')}
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 bg-accent hover:bg-accent-hover text-white text-xs font-medium transition-colors px-3 py-1.5 rounded-lg"
                      >
                        <ExternalLink size={14} />
                        {t('portfolio.view_live')}
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate leading-relaxed mb-6 text-sm">
                  {project.description[lang]}
                </p>

                {/* Tech stack */}
                <div className="space-y-3">
                  {project.backendTech && (
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-fog text-xs font-semibold uppercase tracking-widest w-20 shrink-0">
                        {t('portfolio.tech_backend')}
                      </span>
                      {project.backendTech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono bg-accent/10 border border-accent/25 text-accent px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.frontendTech && (
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-fog text-xs font-semibold uppercase tracking-widest w-20 shrink-0">
                        {t('portfolio.tech_frontend')}
                      </span>
                      {project.frontendTech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono bg-elevated border border-rim text-slate px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  )
}
