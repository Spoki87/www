import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Mail, ArrowRight, Download, Footprints } from 'lucide-react'
import { experience, education } from '../data/career'
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
  const { t, i18n } = useTranslation()

  return (
    <motion.div variants={pageVariants} initial="initial" animate="enter" exit="exit">
      <SEO path="/" lang={i18n.language.startsWith('pl') ? 'pl' : 'en'} />
      {/* ── Hero ── */}
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-6xl mx-auto px-6 py-20 w-full">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

            {/* Left — text */}
            <div className="flex-1 flex flex-col items-start text-left">

              {/* Name + title + subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.45 }}
                className="flex flex-col items-start mb-8"
              >
                <p className="text-accent text-sm font-mono tracking-widest uppercase mb-3">
                  {t('hero.greeting')}
                </p>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-snow leading-tight mb-3">
                  Patryk Pawlak
                </h1>
                <p className="text-accent text-xl font-medium mb-6">
                  {t('hero.title')}
                </p>
                <p className="text-slate text-lg leading-relaxed max-w-lg">
                  {t('hero.subtitle')}
                </p>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="flex items-center gap-5 mb-8"
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
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="flex items-center gap-4 flex-wrap"
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

            {/* Right — photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
              className="relative shrink-0"
            >
              <div className="absolute inset-0 rounded-full bg-accent/15 blur-xl scale-150" />
              <div className="absolute -inset-4 rounded-full border border-dashed border-accent/20" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-accent/50 overflow-hidden bg-[#fafafa] flex items-center justify-center">
                <img
                  src="/photo.jpg"
                  alt="Patryk Pawlak"
                  className="w-full h-full object-contain"
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

          </div>
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

      {/* ── Roadmap ── */}
      <section className="py-24 bg-dark overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-snow mb-3">{t('roadmap.title')}</h2>
            <div className="w-12 h-1 bg-accent rounded-full" />
          </motion.div>

          {/* Desktop — SVG arc snake */}
          <div className="hidden md:block relative" style={{ height: 320 }}>
            {(() => {
              const lang = i18n.language.startsWith('pl') ? 'pl' : 'en'
              const reversed = [...experience].reverse()
              const edu = education[0]
              // 4 milestones: UKSW(dół) → Junior(góra) → Zoho Dev(dół) → Backend Mid(góra)
              const milestones = [
                { id: 'edu', x: 100,  y: 240, labelBelow: true,  isEducation: true,  role: { pl: 'Edukacja UKSW', en: 'UKSW Education' }, period: edu.period },
                { id: 1,     x: 370,  y: 100, labelBelow: false, isEducation: false, role: reversed[0].role,  period: reversed[0].period },
                { id: 2,     x: 630,  y: 240, labelBelow: true,  isEducation: false, role: reversed[1].role,  period: reversed[1].period },
                { id: 3,     x: 900,  y: 100, labelBelow: false, isEducation: false, role: reversed[2].role,  period: reversed[2].period },
              ]
              // Footprints along the 3-segment bezier (mirrored vertically)
              const footprints = [
                { cx: 18.9, cy: 65.6, flip: false },
                { cx: 25.2, cy: 46.6, flip: true  },
                { cx: 46.6, cy: 40.6, flip: false },
                { cx: 50.8, cy: 53.1, flip: true  },
                { cx: 54.8, cy: 65.6, flip: false },
                { cx: 68.4, cy: 72.3, flip: true  },
                { cx: 72.7, cy: 65.6, flip: false },
                { cx: 78.9, cy: 46.6, flip: true  },
              ]
              return (
                <>
                  <svg
                    viewBox="0 0 1000 320"
                    preserveAspectRatio="none"
                    className="absolute inset-0 w-full h-full"
                    aria-hidden="true"
                  >
                    {/* Static start dot */}
                    <circle cx={100} cy={240} r="7" fill="#f97316" />
                    {/* 3-arc S-curve — animated draw */}
                    <motion.path
                      d="M 100,240 C 230,240 230,100 370,100 C 510,100 510,240 630,240 C 770,240 770,100 900,100"
                      fill="none"
                      stroke="#f97316"
                      strokeOpacity="0.35"
                      strokeWidth="2"
                      strokeDasharray="8 6"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2.0, ease: 'easeInOut', delay: 0.2 }}
                    />
                    {/* Milestone dots */}
                    {milestones.map((m, i) => (
                      <motion.circle
                        key={m.id}
                        cx={m.x}
                        cy={m.y}
                        r="7"
                        fill="#f97316"
                        stroke="#f97316"
                        strokeWidth="0"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.45, duration: 0.35, ease: 'backOut' }}
                        style={{ transformOrigin: `${m.x}px ${m.y}px` }}
                      />
                    ))}
                    {/* Pulsing rings on current role (P3 — bottom right) */}
                    {[1, 2].map((ring) => (
                      <motion.circle
                        key={ring}
                        cx={900}
                        cy={100}
                        r="7"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth="1.5"
                        initial={{ scale: 1, opacity: 0.6 }}
                        animate={{ scale: 1 + ring * 1.2, opacity: 0 }}
                        transition={{ duration: 1.8, repeat: Infinity, delay: ring * 0.6, ease: 'easeOut' }}
                        style={{ transformOrigin: '900px 100px' }}
                      />
                    ))}
                  </svg>

                  {/* Footprints along the curve */}
                  {footprints.map((fp, i) => (
                    <div
                      key={i}
                      className="absolute pointer-events-none"
                      style={{
                        left: `${fp.cx}%`,
                        top: `${fp.cy}%`,
                        transform: `translate(-50%, -50%) ${fp.flip ? 'scaleX(-1)' : ''}`,
                      }}
                    >
                      <Footprints size={12} className="text-accent/35" />
                    </div>
                  ))}

                  {/* Milestone labels */}
                  {milestones.map((m, index) => (
                    <motion.div
                      key={m.id}
                      initial={{ opacity: 0, y: m.labelBelow ? 20 : -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15, duration: 0.5 }}
                      className="absolute flex flex-col items-center"
                      style={{
                        left: `${(m.x / 1000) * 100}%`,
                        ...(m.labelBelow
                          ? { top: `${(m.y / 320) * 100}%` }
                          : { bottom: `${((320 - m.y) / 320) * 100}%` }),
                        transform: 'translateX(-50%)',
                      }}
                    >
                      <div className={`text-center w-40 ${m.labelBelow ? 'mt-3' : 'mb-3'}`}>
                        <p className="font-semibold text-sm leading-tight text-snow">
                          {m.role[lang]}
                        </p>
                        <p className="text-fog text-xs mt-1">
                          {m.period.start} — {m.period.end ?? t('career.present')}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </>
              )
            })()}
          </div>

          {/* Mobile — vertical */}
          <div className="md:hidden relative pl-8">
            <div className="absolute left-3 top-2 bottom-2 w-px border-l-2 border-dashed border-accent/25" />
            {[
              { id: 'edu', role: { pl: 'Edukacja UKSW', en: 'UKSW Education' }, period: education[0].period, isEducation: true },
              ...[...experience].reverse().map((item) => ({ id: item.id, role: item.role, period: item.period, isEducation: false })),
            ].map((item, index) => {
              const lang = i18n.language.startsWith('pl') ? 'pl' : 'en'
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="relative flex items-center gap-4 mb-10 last:mb-0"
                >
                  <div className={`absolute -left-8 w-6 h-6 rounded-full border-2 border-accent flex items-center justify-center shrink-0 ${item.isEducation ? 'bg-transparent' : 'bg-accent/10'}`}>
                    <Footprints size={12} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-snow">{item.role[lang]}</p>
                    <p className="text-fog text-xs mt-0.5">
                      {item.period.start} — {item.period.end ?? t('career.present')}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
