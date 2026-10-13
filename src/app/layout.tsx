import type { Metadata } from 'next';
import { SmoothScroll } from '@/components/motion/SmoothScroll';
import { SITE_URL, BASE_KEYWORDS, getOrganizationSchema } from '@/lib/seo';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'NanaTrade | A Ghanaian Group of Companies & Parent of Basilissa',
    template: '%s | NanaTrade',
  },
  description:
    'NanaTrade Limited is a premier Ghanaian conglomerate operating across hospitality, food services, retail, and corporate operations, proudly powering iconic brands like Basilissa.',
  keywords: BASE_KEYWORDS,
  authors: [{ name: 'NanaTrade Limited', url: SITE_URL }],
  creator: 'NanaTrade Limited',
  publisher: 'NanaTrade Limited',
  applicationName: 'NanaTrade',
  category: 'Business & Food Services',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GH',
    url: SITE_URL,
    siteName: 'NanaTrade',
    title: 'NanaTrade | A Ghanaian Group of Companies',
    description:
      'NanaTrade is a Ghanaian group of companies, including Basilissa, built around people, quality, culture and growth.',
    images: [
      {
        url: `${SITE_URL}/images/nanatrade/hero/hero.png`,
        width: 1200,
        height: 630,
        alt: 'NanaTrade - A Ghanaian Group of Companies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NanaTrade | A Ghanaian Group of Companies',
    description:
      'NanaTrade is a Ghanaian group of companies, including Basilissa, built around people, quality, culture and growth.',
    images: [`${SITE_URL}/images/nanatrade/hero/hero.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  const orgSchema = getOrganizationSchema();

  return (
    <html lang="en" className="antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-screen bg-paper text-ink">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
