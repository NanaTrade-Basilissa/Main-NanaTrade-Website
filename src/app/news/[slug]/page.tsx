'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { NEWS_ARTICLES } from '@/lib/news';

export default function NewsArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = NEWS_ARTICLES.find((item) => item.slug === slug);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setImageIndex(0);
  }, [slug]);

  useEffect(() => {
    if (!article || article.images.length < 2) return;

    const timer = setInterval(() => {
      setImageIndex((current) => (current + 1) % article.images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [article]);

  if (!article) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6 text-center">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-800">Article not found</h1>
          <Link href="/#news" className="mt-4 inline-flex items-center gap-2 font-bold text-[#007c89] hover:text-[#38a8a4]">
            <ArrowLeft className="h-4 w-4" /> Back to news
          </Link>
        </div>
      </main>
    );
  }

  const showPreviousImage = () => {
    setImageIndex((current) => (current - 1 + article.images.length) % article.images.length);
  };

  const showNextImage = () => {
    setImageIndex((current) => (current + 1) % article.images.length);
  };

  return (
    <main className="min-h-screen bg-[#f5f8f8] px-4 py-10 sm:px-6 sm:py-16">
      <article className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl">
        <div className="relative h-64 bg-slate-100 sm:h-[28rem]">
          <AnimatePresence mode="wait">
            <motion.img
              key={article.images[imageIndex]}
              src={article.images[imageIndex]}
              alt={`${article.title} image ${imageIndex + 1}`}
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            />
          </AnimatePresence>
          {article.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPreviousImage}
                aria-label="Show previous article image"
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/95 p-3 text-slate-700 shadow-lg transition hover:bg-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={showNextImage}
                aria-label="Show next article image"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/95 p-3 text-slate-700 shadow-lg transition hover:bg-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <span className="absolute bottom-4 right-4 rounded-full bg-slate-950/75 px-3 py-1.5 text-xs font-semibold text-white">
                {imageIndex + 1} / {article.images.length}
              </span>
            </>
          )}
        </div>

        <div className="p-6 sm:p-10">
          <Link href="/#news" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-[#007c89] transition hover:text-[#38a8a4]">
            <ArrowLeft className="h-4 w-4" /> Back to news
          </Link>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#007c89] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              {article.category}
            </span>
            <span className="text-sm text-slate-400">{article.date}</span>
          </div>
          <h1 className="mb-5 text-2xl font-extrabold leading-tight text-slate-800 sm:text-4xl">
            {article.title}
          </h1>
          <p className="mb-5 text-base font-semibold leading-relaxed text-slate-600">
            {article.summary}
          </p>
          <p className="border-t border-slate-100 pt-5 text-sm leading-8 text-slate-600 sm:text-base">
            {article.details}
          </p>
        </div>
      </article>
    </main>
  );
}
