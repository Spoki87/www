import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Download, Briefcase, GraduationCap, Award, Calendar } from 'lucide-react'
import { experience, education, certifications } from '../data/career'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

export default function Career() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('pl') ? 'pl' : 'en'

  return (
    <motion.div variants={pageVariants} initial="initial" animate="enter" exit="exit">
      <div className="min-h-screen pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">

          {/* Header */}
          <div className="flex items-start justify-between flex-wrap gap-4 mb-16">
            <div>
              <h1 className="text-4xl font-bold text-snow mb-3">{t('career.title')}</h1>
              <div className="w-12 h-1 bg-accent rounded-full" />
            </div>
            <a
              href="/CV_Patryk_Pawlak.pdf"
              download
              className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              <Download size={16} />
              {t('career.download_cv')}
            </a>
          </div>

          {/* ── Experience ── */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-10">
              <Briefcase size={20} className="text-accent" />
              <h2 className="text-xl font-semibold text-snow">{t('career.experience')}</h2>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-3 bottom-3 w-px bg-gradient-to-b from-accent/80 via-rim to-rim" />

              <div className="space-y-6">
                {experience.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="pl-14 relative"
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-0 top-4 w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                        item.period.end === null
                          ? 'bg-accent/20 border-accent'
                          : 'bg-elevated border-rim'
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          item.period.end === null ? 'bg-accent' : 'bg-fog'
                        }`}
                      />
                    </div>

                    <div className="bg-surface border border-rim rounded-xl p-6 hover:border-accent/30 transition-colors">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-accent font-semibold text-lg leading-tight">
                          {item.role[lang]}
                        </h3>
                        {item.period.end === null && (
                          <span className="text-xs bg-accent/10 text-accent border border-accent/20 px-2.5 py-0.5 rounded-full shrink-0">
                            {t('career.present')}
                          </span>
                        )}
                      </div>
                      <p className="text-snow font-medium mb-1">{item.company}</p>
                      <div className="flex items-center gap-1.5 text-fog text-sm mb-5">
                        <Calendar size={13} />
                        {item.period.start} — {item.period.end ?? t('career.present')}
                      </div>
                      <ul className="space-y-2">
                        {item.description[lang].map((point, i) => (
                          <li key={i} className="flex gap-2.5 text-slate text-sm leading-relaxed">
                            <span className="text-accent mt-1.5 shrink-0 text-xs">▸</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Education ── */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-10">
              <GraduationCap size={20} className="text-accent" />
              <h2 className="text-xl font-semibold text-snow">{t('career.education')}</h2>
            </div>

            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface border border-rim rounded-xl p-6"
              >
                <h3 className="text-accent font-semibold text-lg mb-1">{item.degree[lang]}</h3>
                <p className="text-snow font-medium mb-1">{item.school}</p>
                <p className="text-slate text-sm mb-2">{item.specialization[lang]}</p>
                <div className="flex items-center gap-1.5 text-fog text-sm mb-4">
                  <Calendar size={13} />
                  {item.period.start} — {item.period.end}
                </div>
                <p className="text-slate text-sm italic border-l-2 border-accent/30 pl-3">
                  {item.thesis[lang]}
                </p>
              </motion.div>
            ))}
          </section>

          {/* ── Certifications ── */}
          <section>
            <div className="flex items-center gap-3 mb-10">
              <Award size={20} className="text-accent" />
              <h2 className="text-xl font-semibold text-snow">{t('career.certifications')}</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-surface border border-rim rounded-xl p-5 flex items-center gap-4 hover:border-accent/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <Award size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-snow font-medium text-sm">{cert.name}</p>
                    <p className="text-fog text-xs mt-0.5">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </motion.div>
  )
}
