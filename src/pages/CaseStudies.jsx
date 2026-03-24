import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { AlertCircle, Lightbulb, TrendingUp } from 'lucide-react'
import { caseStudies } from '../data/caseStudies'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const sections = [
  {
    key: 'problem',
    icon: AlertCircle,
    colorClass: 'text-red-400',
    bgClass: 'bg-red-400/10 border-red-400/20',
  },
  {
    key: 'solution',
    icon: Lightbulb,
    colorClass: 'text-accent',
    bgClass: 'bg-accent/10 border-accent/20',
  },
  {
    key: 'outcome',
    icon: TrendingUp,
    colorClass: 'text-emerald-400',
    bgClass: 'bg-emerald-400/10 border-emerald-400/20',
  },
]

export default function CaseStudies() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('pl') ? 'pl' : 'en'

  return (
    <motion.div variants={pageVariants} initial="initial" animate="enter" exit="exit">
      <div className="min-h-screen pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">

          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-snow mb-3">{t('case_studies.title')}</h1>
            <div className="w-12 h-1 bg-accent rounded-full mb-4" />
            <p className="text-slate">{t('case_studies.subtitle')}</p>
          </div>

          {/* Cards */}
          <div className="space-y-10">
            {caseStudies.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-surface border border-rim rounded-2xl overflow-hidden"
              >
                {/* Card header */}
                <div className="px-8 py-6 border-b border-rim flex items-center gap-3">
                  <span className="text-fog text-sm font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-snow text-xl font-bold flex-1">
                    {item.title[lang] || (
                      <span className="text-fog italic font-normal text-base">
                        {t('case_studies.placeholder_title')}
                      </span>
                    )}
                  </h2>
                  {item.tags.length > 0 && (
                    <div className="flex gap-2 flex-wrap justify-end">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono bg-elevated border border-rim text-slate px-2.5 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Problem / Solution / Outcome */}
                <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-rim">
                  {sections.map(({ key, icon: Icon, colorClass, bgClass }) => (
                    <div key={key} className="px-6 py-6">
                      <div className={`inline-flex items-center gap-2 border rounded-full px-3 py-1 mb-4 ${bgClass}`}>
                        <Icon size={13} className={colorClass} />
                        <span className={`text-xs font-semibold uppercase tracking-wider ${colorClass}`}>
                          {t(`case_studies.${key}`)}
                        </span>
                      </div>
                      {item[key][lang] ? (
                        <p className="text-slate text-sm leading-relaxed">{item[key][lang]}</p>
                      ) : (
                        <p className="text-fog text-sm italic">
                          {t('case_studies.placeholder_content')}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  )
}
