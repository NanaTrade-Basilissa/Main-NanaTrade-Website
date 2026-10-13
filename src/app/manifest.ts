import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NanaTrade & Basilissa',
    short_name: 'NanaTrade',
    description:
      'NanaTrade Limited — A leading Ghanaian conglomerate and parent company of Basilissa Restaurant.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0291b3',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
