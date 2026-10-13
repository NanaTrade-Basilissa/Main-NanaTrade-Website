export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://nanatradeltd.com';

export const BASE_KEYWORDS = [
  'NanaTrade',
  'NanaTrade Limited',
  'Basilissa',
  'Basilissa Restaurant',
  'Basilissa Ghana',
  'Ghana Conglomerate',
  'Hospitality Ghana',
  'Food and Beverage West Africa',
  'Fast Food Ghana',
  'Accra Restaurants',
  'Accra Mall Food',
  'Achimota Mall Restaurant',
  'West Hills Mall Basilissa',
  'Tema Community 6 Food',
  'Dawhenya Restaurant',
  'Afienya Food',
  'Nominom Desserts',
  'Food Delivery Accra',
  'Ghana Careers',
  'NanaTrade Jobs',
];

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: 'NanaTrade Limited',
    alternateName: 'NanaTrade',
    url: SITE_URL,
    logo: `${SITE_URL}/images/nanatrade/logo/logo.png`,
    description:
      'NanaTrade Limited is a leading Ghanaian conglomerate and brand management enterprise operating across hospitality, food services, retail, and corporate operations.',
    foundingLocation: {
      '@type': 'Place',
      name: 'Accra, Ghana',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Accra',
      addressRegion: 'Greater Accra',
      addressCountry: 'GH',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+233-30-824-9690',
        contactType: 'customer service',
        areaServed: 'GH',
        availableLanguage: ['en'],
      },
    ],
    sameAs: [
      'https://www.linkedin.com/in/derrick-mensah-otu-4b930395/',
      'https://www.instagram.com/derrickcruise_',
    ],
    subOrganization: [
      {
        '@type': 'FastFoodRestaurant',
        name: 'Basilissa',
        url: `${SITE_URL}/basilissa`,
        servesCuisine: ['Fast Food', 'Burgers', 'Pizza', 'Shawarma', 'Fried Chicken', 'Desserts'],
      },
    ],
  };
}

export function getBasilissaSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FastFoodRestaurant',
    name: 'Basilissa',
    alternateName: 'Basilissa Restaurant',
    image: `${SITE_URL}/images/basilissa/brand/basiliss.png`,
    url: `${SITE_URL}/basilissa`,
    servesCuisine: [
      'Fast Food',
      'Burgers',
      'Pizza',
      'Shawarma',
      'Fried Chicken',
      'Desserts',
      'Ghanaian',
    ],
    priceRange: '$$',
    menu: 'https://basilissa.web.app',
    acceptsReservations: 'True',
    parentOrganization: {
      '@type': 'Corporation',
      name: 'NanaTrade Limited',
      url: SITE_URL,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '10:00',
        closes: '21:00',
      },
    ],
    department: [
      {
        '@type': 'FastFoodRestaurant',
        name: 'Basilissa - Accra Mall',
        telephone: '+233-54-457-7777',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Accra Mall, Tetteh Quarshie Interchange',
          addressLocality: 'Accra',
          addressRegion: 'Greater Accra',
          addressCountry: 'GH',
        },
        hasMap: 'https://www.google.com/maps/search/?api=1&query=Basilissa+Accra+Mall',
      },
      {
        '@type': 'FastFoodRestaurant',
        name: 'Basilissa - Achimota Mall',
        telephone: '+233-54-377-1778',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Achimota Retail Centre',
          addressLocality: 'Achimota, Accra',
          addressRegion: 'Greater Accra',
          addressCountry: 'GH',
        },
        hasMap: 'https://www.google.com/maps/search/?api=1&query=Basilissa+Achimota+Mall',
      },
      {
        '@type': 'FastFoodRestaurant',
        name: 'Basilissa - West Hills Mall',
        telephone: '+233-54-412-5506',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'West Hills Mall',
          addressLocality: 'Weija, Accra',
          addressRegion: 'Greater Accra',
          addressCountry: 'GH',
        },
        hasMap: 'https://www.google.com/maps/search/?api=1&query=Basilissa+West+Hills+Mall+Weija',
      },
      {
        '@type': 'FastFoodRestaurant',
        name: 'Basilissa - Tema',
        telephone: '+233-54-377-1777',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Community 6',
          addressLocality: 'Tema',
          addressRegion: 'Greater Accra',
          addressCountry: 'GH',
        },
        hasMap: 'https://www.google.com/maps/search/?api=1&query=Basilissa+Community+6+Tema',
      },
      {
        '@type': 'FastFoodRestaurant',
        name: 'Basilissa - Dawhenya',
        telephone: '+233-54-012-5497',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Community 25',
          addressLocality: 'Dawhenya',
          addressRegion: 'Greater Accra',
          addressCountry: 'GH',
        },
        hasMap: 'https://www.google.com/maps/search/?api=1&query=Basilissa+Dawhenya',
      },
      {
        '@type': 'FastFoodRestaurant',
        name: 'Basilissa - Afienya',
        telephone: '+233-54-010-2485',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Afienya Main Road',
          addressLocality: 'Afienya',
          addressRegion: 'Greater Accra',
          addressCountry: 'GH',
        },
        hasMap: 'https://www.google.com/maps/search/?api=1&query=Basilissa+Afienya',
      },
    ],
  };
}

export function getNewsArticleSchema(article: {
  title: string;
  summary: string;
  slug: string;
  date: string;
  images: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.summary,
    url: `${SITE_URL}/news/${article.slug}`,
    image: article.images.map((img) =>
      img.startsWith('http') ? img : `${SITE_URL}${img}`
    ),
    datePublished: new Date(article.date).toISOString().split('T')[0] || article.date,
    author: {
      '@type': 'Organization',
      name: 'NanaTrade Limited',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'NanaTrade Limited',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/nanatrade/logo/logo.png`,
      },
    },
  };
}
