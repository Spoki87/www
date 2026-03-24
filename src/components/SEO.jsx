import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://ppawlak.com'

const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Patryk Pawlak',
  url: BASE_URL,
  email: 'patrykpawlak6789@gmail.com',
  jobTitle: 'Backend Integration Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Z PARTNERS Sp. z o.o. sp. k.',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Warszawa',
    addressCountry: 'PL',
  },
  sameAs: [
    'https://github.com/Sposki87',
    'https://www.linkedin.com/in/patryk-pawlak-81bb00218/',
  ],
  knowsAbout: [
    'Zoho CRM',
    'Zoho Creator',
    'Zoho Desk',
    'Zoho Analytics',
    'REST API',
    'API Integration',
    'Backend Development',
    'Java',
    'Spring Boot',
    'JavaScript',
    'Python',
    'Deluge',
    'Docker',
    'RabbitMQ',
    'Redis',
    'PostgreSQL',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Zoho Creator Certification',
      credentialCategory: 'Professional Certification',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Zoho CRM Certification',
      credentialCategory: 'Professional Certification',
    },
  ],
}

export default function SEO({ title, description, path = '', lang = 'pl' }) {
  const fullTitle = title
    ? `${title} | Patryk Pawlak`
    : 'Patryk Pawlak — Backend Integration Developer | Zoho CRM & REST API'

  const fullDescription =
    description ||
    'Backend Integration Developer z Warszawy. Specjalista Zoho CRM, Zoho Creator, REST API i automatyzacji procesów biznesowych. Certyfikowany Zoho Developer.'

  const canonicalUrl = `${BASE_URL}${path}`

  return (
    <Helmet>
      {/* Basic */}
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta
        name="keywords"
        content="Zoho developer, Zoho CRM, Zoho Creator, Zoho integration, REST API, backend developer, integration developer, Warszawa, Poland, Deluge, automatyzacja"
      />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:locale" content={lang === 'pl' ? 'pl_PL' : 'en_US'} />
      <meta property="og:site_name" content="Patryk Pawlak" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />

      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify(PERSON_SCHEMA)}
      </script>
    </Helmet>
  )
}
