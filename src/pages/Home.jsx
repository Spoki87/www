import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Mail, ArrowRight, Download } from 'lucide-react'
import { SHOW_CV_DOWNLOAD } from '../config'
import { GitHubIcon, LinkedInIcon } from '../components/BrandIcons'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const skills = {
  programming: ['Deluge', 'JavaScript', 'Java', 'Python'],
  zoho: ['Zoho CRM', 'Zoho Creator', 'Zoho Desk', 'Zoho Analytics', 'Zoho Flow'],
  tools: ['REST API', 'Docker', 'RabbitMQ', 'Redis', 'N8N', 'Zapier', 'Postman', 'JIRA'],
}

export default function Home() {
  const { t } = useTranslation()

  return (
    <motion.div variants={pageVariants} initial="initial" animate="enter" exit="exit">
      <SEO path="/" lang={i18n.language.startsWith('pl') ? 'pl' : 'en'} />
      {/* ── Hero ── */}
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-2xl mx-auto px-6 py-20 w-full flex flex-col items-center text-center">

          {/* Photo — centered, leading visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
            className="relative mb-8"
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl scale-150" />
            {/* Decorative dashed ring */}
            <div className="absolute -inset-3 rounded-full border border-dashed border-accent/20 animate-spin" style={{ animationDuration: '20s' }} />
            {/* Photo circle */}
            <div className="relative w-40 h-40 rounded-full border-2 border-accent/50 overflow-hidden bg-elevated flex items-center justify-center">
              <img
                src="/photo.jpg"
                alt="Patryk Pawlak"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  if (e.currentTarget.nextSibling) {
                    e.currentTarget.nextSibling.style.display = 'flex'
                  }
                }}
              />
              <div
                style={{ display: 'none' }}
                className="w-full h-full items-center justify-center flex-col gap-1"
              >
                <span className="text-4xl font-bold text-accent select-none">PP</span>
                <span className="text-fog text-xs">photo.jpg</span>
              </div>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-accent text-xs font-mono tracking-widest uppercase mb-2"
          >
            {t('hero.greeting')}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl sm:text-6xl font-bold text-snow leading-tight mb-2"
          >
            Patryk Pawlak
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-accent text-lg font-medium mb-5"
          >
            {t('hero.title')}
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-slate text-base leading-relaxed mb-8 max-w-md"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-5 mb-8"
          >
            <a
              href="https://github.com/Sposki87"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate hover:text-accent transition-colors text-sm"
            >
              <GitHubIcon size={17} />
              GitHub
            </a>
            <span className="w-px h-4 bg-rim" />
            <a
              href="https://www.linkedin.com/in/patryk-pawlak-81bb00218/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate hover:text-accent transition-colors text-sm"
            >
              <LinkedInIcon size={17} />
              LinkedIn
            </a>
            <span className="w-px h-4 bg-rim" />
            <a
              href="mailto:patrykpawlak6789@gmail.com"
              className="flex items-center gap-2 text-slate hover:text-accent transition-colors text-sm"
            >
              <Mail size={17} />
              Email
            </a>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <Link
              to="/career"
              className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              {t('hero.cta_career')}
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/portfolio"
              className="flex items-center gap-2 border border-rim text-slate hover:text-snow hover:border-accent/50 text-sm font-medium px-6 py-3 rounded-lg transition-colors"
            >
              {t('hero.cta_portfolio')}
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ── About ── */}
      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-snow mb-3">{t('about.title')}</h2>
            <div className="w-12 h-1 bg-accent rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-slate text-lg leading-relaxed mb-8">
                {t('about.bio')}
              </p>
              {SHOW_CV_DOWNLOAD && (
                <a
                  href="/CV_Patryk_Pawlak.pdf"
                  download
                  className="inline-flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-white transition-all font-medium px-5 py-2.5 rounded-lg text-sm"
                >
                  <Download size={16} />
                  {t('about.download_cv')}
                </a>
              )}
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <p className="text-fog text-xs font-semibold uppercase tracking-widest mb-3">
                  Programming
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((s) => (
                    <span
                      key={s}
                      className="bg-accent/10 text-accent border border-accent/25 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-fog text-xs font-semibold uppercase tracking-widest mb-3">
                  Zoho
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.zoho.map((s) => (
                    <span
                      key={s}
                      className="bg-elevated text-slate border border-rim text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-fog text-xs font-semibold uppercase tracking-widest mb-3">
                  Tools & DevOps
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((s) => (
                    <span
                      key={s}
                      className="bg-elevated text-slate border border-rim text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
