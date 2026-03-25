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
    'https://github.com/Spoki87',
    'https://www.linkedin.com/in/patryk-pawlak-81bb00218/',
  ],
  knowsAbout: [
    'Zoho CRM',
    'Zoho Creator',
    'Zoho Desk',
    'Zoho Analytics',
    'Zoho Flow',
    'Zoho One',
    'Zoho Books',
    'Zoho Projects',
    'Zoho Cliq',
    'Zoho Campaigns',
    'Zoho implementation',
    'Zoho wdrożenie',
    'Zoho customization',
    'Zoho konfiguracja',
    'Zoho maintenance',
    'Zoho utrzymanie',
    'Zoho integration',
    'Zoho integracja',
    'Zoho consultant',
    'Zoho developer',
    'Zoho praca',
    'Zoho projekty',
    'Zoho freelancer',
    'Zoho Polska',
    'Zoho Poland',
    'Zoho',
    'Zoho partner',
    'Zoho specialist',
    'Zoho specjalista',
    'Zoho ekspert',
    'Zoho expert',
    'Zoho developer',
    'Zoho programista',
    'Zoho wdrożeniowiec',
    'człowiek od Zoho',
    'specjalista od Zoho',
    'programista Zoho',
    'wdrożeniowiec Zoho',
    'CRM implementation',
    'CRM wdrożenie',
    'business process automation',
    'automatyzacja procesów biznesowych',
    'REST API',
    'API Integration',
    'Backend Development',
    'Deluge scripting',
    'Java',
    'Spring Boot',
    'JavaScript',
    'Python',
    'Deluge',
    'Docker',
    'RabbitMQ',
    'Redis',
    'PostgreSQL',
    'N8N',
    'Zapier',
    'low-code',
    'no-code',
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
    : 'Patryk Pawlak - Backend Integration Developer | Zoho CRM & REST API'

  const fullDescription =
    description ||
    'Backend Integration Developer z Warszawy. Specjalista Zoho CRM, Zoho Creator, Zoho Flow, Zoho Analytics, Zoho Desk — wdrożenia, konfiguracja, utrzymanie i integracje REST API. Certyfikowany Zoho Developer.'

  const canonicalUrl = `${BASE_URL}${path}`

  return (
    <Helmet>
      {/* Basic */}
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta
        name="keywords"
        content="Zoho, Zoho Polska, Zoho Poland, Zoho developer, Zoho programista, Zoho wdrożeniowiec, człowiek od Zoho, specjalista od Zoho, Zoho specjalista, Zoho ekspert, Zoho partner, Zoho CRM, Zoho Creator, Zoho Flow, Zoho Analytics, Zoho Desk, Zoho One, Zoho Books, Zoho integration, Zoho wdrożenie, Zoho konfiguracja, Zoho utrzymanie, Zoho konsultant, Zoho praca, Zoho projekty, Zoho Projects, Zoho freelancer, CRM wdrożenie, CRM implementacja, automatyzacja procesów biznesowych, business process automation, REST API, backend developer, integration developer, Deluge, Deluge scripting, low-code, no-code, N8N, Zapier, Warszawa, Poland, Patryk Pawlak"
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
