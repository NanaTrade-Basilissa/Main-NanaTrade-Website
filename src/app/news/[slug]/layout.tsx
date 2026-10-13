import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { NEWS_ARTICLES } from '@/lib/news';
import { SITE_URL, getNewsArticleSchema } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = NEWS_ARTICLES.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found | NanaTrade News',
      description: 'The requested article could not be found.',
    };
  }

  const primaryImage = article.images[0]
    ? article.images[0].startsWith('http')
      ? article.images[0]
      : `${SITE_URL}${article.images[0]}`
    : `${SITE_URL}/images/nanatrade/hero/hero.png`;

  return {
    title: `${article.title} | NanaTrade News`,
    description: article.summary,
    alternates: {
      canonical: `${SITE_URL}/news/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `${SITE_URL}/news/${article.slug}`,
      siteName: 'NanaTrade',
      type: 'article',
      publishedTime: new Date(article.date).toISOString().split('T')[0] || article.date,
      images: [
        {
          url: primaryImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.summary,
      images: [primaryImage],
    },
  };
}

export default async function NewsArticleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = NEWS_ARTICLES.find((item) => item.slug === slug);
  const schema = article ? getNewsArticleSchema(article) : null;

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      {children}
    </>
  );
}
