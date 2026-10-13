import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { SITE_URL, getBasilissaSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: "Basilissa | Ghana's Beloved Fast Food & Family Restaurant",
  description:
    "Experience Basilissa — Ghana's iconic fast food & family restaurant known for delicious burgers, stone-baked pizza, fresh shawarma, fried chicken, and Nominom desserts across Accra Mall, Achimota, West Hills, Tema, Dawhenya, and Afienya.",
  keywords: [
    'Basilissa',
    'Basilissa Restaurant',
    'Basilissa Ghana',
    'Basilissa menu',
    'food delivery Accra',
    'Accra Mall food court',
    'Achimota Retail Centre restaurant',
    'West Hills Mall food',
    'Tema Community 6 restaurant',
    'Dawhenya restaurant',
    'Afienya food',
    'order food online Ghana',
    'shawarma Accra',
    'pizza Accra',
    'burger Ghana',
    'Nominom juices',
    'Ghana fast food',
  ],
  alternates: {
    canonical: `${SITE_URL}/basilissa`,
  },
  openGraph: {
    title: "Basilissa | Ghana's Beloved Fast Food & Family Restaurant",
    description:
      "Order fresh burgers, stone-baked pizza, authentic shawarma, crispy chicken, and Nominom desserts. Branches across Accra Mall, Achimota, West Hills, Tema, Dawhenya, and Afienya.",
    url: `${SITE_URL}/basilissa`,
    siteName: 'Basilissa',
    images: [
      {
        url: `${SITE_URL}/images/basilissa/hero/hero_1.jpg`,
        width: 880,
        height: 720,
        alt: 'Basilissa Restaurant Food & Experience',
      },
    ],
    locale: 'en_GH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Basilissa | Ghana's Beloved Fast Food & Family Restaurant",
    description:
      "Order fresh burgers, stone-baked pizza, authentic shawarma, crispy chicken, and Nominom desserts. Six branches across Greater Accra.",
    images: [`${SITE_URL}/images/basilissa/hero/hero_1.jpg`],
  },
};

export default function BasilissaLayout({ children }: { children: ReactNode }) {
  const schema = getBasilissaSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}
