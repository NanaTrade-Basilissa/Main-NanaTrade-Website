import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { NEWS_ARTICLES } from '@/lib/news';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  const newsEntries: MetadataRoute.Sitemap = NEWS_ARTICLES.map((article) => ({
    url: `${SITE_URL}/news/${article.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/basilissa`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...newsEntries,
  ];
}
