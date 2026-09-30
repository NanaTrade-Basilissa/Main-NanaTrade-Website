export interface NewsArticle {
  slug: string;
  title: string;
  summary: string;
  details: string;
  images: string[];
  date: string;
  category: string;
}

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    slug: 'new-games-this-season',
    title: 'New Games Set to Excite Players This Season',
    summary: 'Discover the latest games, exciting new features, competitive challenges, and updates bringing fresh experiences to players.',
    details: 'This season’s game releases are bringing players fresh ways to play, from new features and challenges to updates that refresh familiar favorites. Competitive modes give players more opportunities to test their skills, while new content helps keep each session engaging. Whether you enjoy exploring new worlds or competing with others, there is something new to discover.',
    images: ['/images/pic1.jpeg', '/images/group1.jpeg', '/images/group2.jpeg', '/images/group3.jpeg', '/images/group4.jpeg', '/images/group6.jpeg', '/images/group7.jpeg'],
    date: 'September 18, 2026',
    category: 'Gaming',
  },
  {
    slug: 'nanatrade-expands-restaurant-operations',
    title: 'NanaTrade Group Expands Across Restaurant Operations',
    summary: 'Restaurants aggressively integrate automated drive-thrus, automated kitchen tools, and dynamic inventory analytics to boost efficiency.',
    details: 'Restaurant teams are bringing automation into more parts of daily operations. Automated ordering tools can help manage drive-through queues, while automated kitchen equipment supports preparation during busy periods. Inventory analytics can help teams track stock and plan replenishment around changing demand. Together, these tools are intended to make service more consistent and help staff focus on the work that benefits most from a human touch.',
    images: ['/images/new2.png', '/images/new2.png', '/images/new4.png'],
    date: 'September 10, 2026',
    category: 'Technology & Food',
  },
];
