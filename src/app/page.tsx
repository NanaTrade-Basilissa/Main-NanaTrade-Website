'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  ChevronRight, 
  Award, 
  Users, 
  Target, 
  HeartHandshake,
  ShoppingBag
} from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  isCta?: boolean;
}

interface BrandItem {
  id: string;
  image: string;
  name: string;
  description: string;
  link: string;
  tag?: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface NewsArticle {
  title: string;
  summary: string;
  image: string;
  date: string;
  category: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'ABOUT', href: '#about' },
  { label: 'OUR BRANDS', href: '#brands' },
  { label: 'CAREERS', href: '#careers' },
  { label: 'CONTACT US', href: '#contact' },
  { label: 'BLOG/NEWS', href: '#news' },
  { label: 'ORDER NOW', href: 'https://basilissa.web.app', isCta: true },
];

const BRANDS: BrandItem[] = [
  {
    id: 'basilissa',
    image: '/images/basiliss.png',
    name: 'BASILISSA',
    description: 'Premier restaurant & food hospitality service delivering authentic dining experiences across Ghana.',
    link: '#',
    tag: 'Hospitality & Dining'
  },
  {
    id: 'nomimun',
    image: '/images/nominom.png',
    name: 'Nomimun',
    description: 'Premium consumer products distributed across major retail outlets with unmatched quality.',
    link: '#',
    tag: 'FMCG Distribution'
  },
];

const PHILOSOPHY_ITEMS = [
  {
    title: 'QUALITY',
    description: 'We source and distribute only verified, high-performance consumer products that meet international standards.',
    icon: Award,
  },
  {
    title: 'PASSION FOR OUR TEAM',
    description: 'Fostering an empowering, high-integrity workplace for our workforce through continuous learning.',
    icon: Users,
  },
  {
    title: 'EXCELLENCE',
    description: 'Maintaining high-standard logistics, precision timing, and state-of-the-art inventory control.',
    icon: Target,
  },
  {
    title: 'CUSTOMER CENTRICITY',
    description: 'Delivering maximum value, reliability, and service excellence to every client and end-consumer.',
    icon: HeartHandshake,
  },
];

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Rev Akoto',
    role: 'Head Of Audit',
    image: '/images/rev.jpeg',
  },
  {
    name: 'Derrick Cruise',
    role: 'Chief Finance Officer',
    image: '/images/cruise.jpeg',
  },
  {
    name: 'PS Cho',
    role: 'Head Of Stores',
    image: '/images/cho.jpeg',
  },
  {
    name: 'Frank Aidoo',
    role: 'General Manager',
    image: '/images/frank.jpeg',
  },
];

const NEWS_ARTICLES: NewsArticle[] = [
  {
    title: 'Surge in Restaurant Franchisee Bankruptcies Driven by Rising Costs',
    summary: 'High operational costs and labor expenses trigger restructuring among major multi-unit franchise operators as foot traffic shifts.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    date: 'September 18, 2026',
    category: 'Industry Trends'
  },
  {
    title: 'Acceleration of AI & Automation Across Restaurant Operations',
    summary: 'Restaurants aggressively integrate AI voice-assisted drive-thrus, automated kitchen tools, and dynamic inventory analytics to boost efficiency.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    date: 'September 10, 2026',
    category: 'Technology & Food'
  },
];
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1e293b] font-sans overflow-x-hidden selection:bg-[#007c89] selection:text-white">
      {/* Custom Styles Injection for Animations & Textures */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Graduate&family=Montserrat:wght@400;500;600;700;800;900&display=swap');
        
        :root {
          --primary-teal: #007c89;
          --accent-teal: #38a8a4;
          --dark-teal: #004d55;
          --accent-yellow: #f1b700;
          --light-bg: #f5f8f8;
        }

        body {
          font-family: 'Montserrat', sans-serif;
        }

        .textured-title {
          font-family: 'Graduate', 'Montserrat', sans-serif;
          background: repeating-linear-gradient(
            45deg,
            #ffffff,
            #ffffff 6px,
            rgba(255, 255, 255, 0.45) 6px,
            rgba(255, 255, 255, 0.45) 12px
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.4));
        }

        .organic-blob {
          border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
          transition: border-radius 0.6s ease, transform 0.6s ease;
        }

        .organic-blob:hover {
          border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
        }

        /* Continuous Dynamic Shimmer Effect for CTA Button */
        @keyframes shimmerGlow {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        /* Pulsing Radial Beacon Background */
        @keyframes auraPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(241, 183, 0, 0.75), 0 0 15px 2px rgba(241, 183, 0, 0.4);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(241, 183, 0, 0), 0 0 25px 6px rgba(241, 183, 0, 0.6);
            transform: scale(1.02);
          }
        }

        .cta-animated-btn {
          background: linear-gradient(
            110deg,
            #f1b700 0%,
            #ffe27a 30%,
            #f1b700 60%,
            #ffc81a 100%
          );
          background-size: 200% 100%;
          animation: shimmerGlow 3.5s infinite linear, auraPulse 2.5s infinite ease-in-out;
        }

        .cta-animated-btn:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Hero Section */}
      <section id="home" className="relative w-full min-h-screen flex flex-col justify-between items-center bg-gradient-to-b from-[#1e3c41]/85 to-[#143237]/90 bg-[url('/images/hero.png')] bg-center bg-cover bg-no-repeat text-white">
        
        {/* Navigation Navbar */}
        <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#004d55]/95 backdrop-blur-md py-3 shadow-lg border-b border-white/10' : 'bg-transparent py-5 border-b border-white/30'}`}>
          <div className="max-w-7xl mx-auto px-6 flex justify-between md:justify-center items-center relative">
            
            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 focus:outline-none z-50"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Logo View */}
            <div className="md:hidden flex-1 text-center">
              <a href="#home" className="inline-block">
                <span className="font-extrabold text-2xl tracking-tighter text-[#38a8a4] italic">NanaTrade</span>
              </a>
            </div>

            {/* Desktop Navigation Bar */}
            <nav className="hidden md:flex items-center justify-center gap-8 w-full">
              {NAV_ITEMS.slice(0, 3).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white text-xs font-black uppercase tracking-wider hover:text-[#38a8a4] transition-colors relative group py-1"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#38a8a4] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}

              {/* Centered Brand Logo */}
              <a href="#home" className="px-4 flex flex-col items-center transition-transform hover:scale-105 duration-300">
                <div className="w-full h-1 bg-[#38a8a4] mb-1.5 rounded-full" />
                <img
                  src="/images/logo.png" 
                  alt="NanaTrade Logo"
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </a>

              {NAV_ITEMS.slice(3).map((item) => (
                item.isCta ? (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="cta-animated-btn text-[#0d1b1e] px-7 py-3 rounded-full font-black text-xs tracking-widest uppercase shadow-xl hover:shadow-2xl transition-all duration-300 relative inline-flex items-center justify-center gap-2 group overflow-hidden border border-amber-300/60"
                  >
                    <motion.span
                      animate={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    >
                      <ShoppingBag className="w-4 h-4 text-[#0d1b1e] group-hover:scale-110 transition-transform" />
                    </motion.span>
                    <span>{item.label}</span>
                    
                    <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </motion.a>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-white text-xs font-black uppercase tracking-wider hover:text-[#38a8a4] transition-colors relative group py-1"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#38a8a4] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )
              ))}
            </nav>
          </div>

          {/* Mobile Drawer Navigation with Animated CTA */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-[#004d55] border-t border-white/10 overflow-hidden"
              >
                <div className="flex flex-col items-center py-6 gap-5">
                  {NAV_ITEMS.map((item) => (
                    item.isCta ? (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="cta-animated-btn text-[#0d1b1e] px-9 py-3.5 rounded-full font-black text-xs uppercase tracking-widest shadow-xl flex items-center gap-2 mt-2 border border-amber-300/60"
                      >
                        <ShoppingBag className="w-4 h-4 text-[#0d1b1e]" />
                        <span>{item.label}</span>
                      </motion.a>
                    ) : (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-white text-sm font-black uppercase tracking-wider hover:text-[#38a8a4] transition-colors"
                      >
                        {item.label}
                      </a>
                    )
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Title & Action */}
        <div className="z-10 text-center flex flex-col items-center justify-center px-4 pt-32 pb-20 my-auto max-w-4xl">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="textured-title font-black text-5xl sm:text-7xl md:text-8xl leading-none uppercase tracking-wider mb-8"
          >
            <span className="block">WE&apos;RE</span>
            <span className="block">PREMIUM</span>
          </motion.h1>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <a
              href="#brands"
              className="bg-[#38a8a4] text-white px-9 py-4 rounded-full font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:bg-[#2e918d] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2 group"
            >
              EXPLORE OUR BRANDS
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Bottom Organic SVG Wave Divider */}
        <div className="relative w-full overflow-hidden leading-none z-10 mt-auto">
          <svg className="relative block w-full h-[60px] sm:h-[90px] md:h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M 0,40 C 150,110 350,10 550,25 C 750,40 1000,110 1200,60 L 1200,120 L 0,120 Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md h-[360px] sm:h-[400px]">
              <img
                src="/images/brand.png"
                alt="About NanaTrade Team"
                className="w-full h-full object-cover organic-blob shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 text-left"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#007c89]">
              ABOUT US
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-[#007c89] tracking-wider leading-snug">
              NANA TRADE LIMITED
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2">
              NanaTrade Limited is a leading distribution and brand management enterprise committed to delivering top-tier consumer products. We specialize in operational excellence, supply chain integrity, and strategic market penetration across West Africa.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our portfolio, including renowned brands like Basilissa, reflects a steadfast commitment to high standards, cultural integration, and sustainable group growth built around people.
            </p>
            <div className="pt-4">
              <a
                href="#brands"
                className="bg-[#38a8a4] text-white px-8 py-3.5 rounded-full font-extrabold text-xs tracking-wider uppercase shadow-md hover:bg-[#2e918d] hover:-translate-y-0.5 transition-all inline-block"
              >
                LEARN MORE
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Brands Section */}
      <section id="brands" className="py-20 md:py-28 bg-[#f5f8f8]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-[#007c89] tracking-wider mb-2">
              OUR BRANDS
            </h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto mb-12">
              Trusted quality products and hospitality experiences designed for everyday life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {BRANDS.map((brand, idx) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group border border-slate-100 hover:-translate-y-2 text-left"
              >
                <div>
                  {/* Brand Image Container */}
                  <div className="relative h-48 w-full bg-slate-50 flex items-center justify-center p-6 border-b border-slate-100 overflow-hidden">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    {brand.tag && (
                      <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-[#007c89] px-3 py-1 rounded-full shadow-sm border border-slate-100">
                        {brand.tag}
                      </span>
                    )}
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-lg font-extrabold text-[#007c89] mb-3 group-hover:text-[#38a8a4] transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                      {brand.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 text-center">
                  <a
                    href={brand.link}
                    className="text-[#007c89] font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-1 hover:text-[#38a8a4] transition-colors"
                  >
                    DISCOVER <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#007c89]">
              OUR PHILOSOPHY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-[#007c89] tracking-wider mt-1 mb-12">
              SHAPING EVERY BRAND WE BUILD
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {PHILOSOPHY_ITEMS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-6 border-l-4 border-[#38a8a4] bg-[#38a8a4]/5 rounded-r-lg hover:translate-x-1 transition-transform"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <IconComp className="w-5 h-5 text-[#007c89]" />
                    <h4 className="text-sm font-extrabold uppercase text-[#007c89] tracking-wider">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-8">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20 md:py-28 bg-[#f5f8f8]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-[#007c89] tracking-wider">
              CAREERS
            </h2>
            <p className="text-base font-bold text-[#007c89]">
              Build something meaningful with us.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We grow by investing in our people across every company: training, mentorship and real opportunity for those who share our standard for excellence. Join a team dedicated to growth, strategy, and market distinction.
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                className="bg-[#38a8a4] text-white px-8 py-3.5 rounded-full font-extrabold text-xs tracking-wider uppercase shadow-md hover:bg-[#2e918d] hover:-translate-y-0.5 transition-all inline-block"
              >
                SEE OPPORTUNITIES
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md h-[360px] sm:h-[400px]">
              <img
                src="/images/careers.png"
                alt="Careers at NanaTrade"
                className="w-full h-full object-cover organic-blob shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inverted Wave Divider Transition to Leadership Section */}
      <div className="relative w-full overflow-hidden leading-none z-10 bg-[#f5f8f8]">
        <svg className="relative block w-full h-[60px] sm:h-[90px] md:h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,90 600,-40 900,60 C1050,110 1150,40 1200,20 L1200,120 L0,120 Z" fill="#007c89"></path>
        </svg>
      </div>

      {/* Leadership Section */}
      <section id="leadership" className="bg-[#007c89] pb-20 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#004d55] rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 shadow-2xl border border-white/10"
          >
            <div className="md:col-span-5 relative min-h-[300px] md:min-h-full">
              <img
                src="/images/ceo.png"
                alt="Julius Yaw Baiooa Agbenyelia - CEO"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#38a8a4] mb-2">
                LEADERSHIP
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-1">
                Julius Yaw Baiooa Agbenyelia
              </h3>
              <span className="text-xs font-semibold text-slate-300 mb-6 block">
                CEO, NanaTrade Limited
              </span>
              <blockquote className="text-sm sm:text-base text-slate-100 italic leading-relaxed border-l-2 border-[#38a8a4] pl-4">
                &ldquo;Our vision at NanaTrade Limited is centered on strategic growth, long-term partnerships, and delivering unmatched value across all consumer touchpoints.&rdquo;
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-[#007c89] tracking-wider mb-12">
              THE NANATRADE TEAM
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 pb-5 group border border-slate-100 hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-sm font-extrabold text-slate-800 mt-4">
                  {member.name}
                </h4>
                <span className="text-xs text-slate-500 block mt-1">
                  {member.role}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 md:py-28 bg-[#f5f8f8]">
        <div className="max-w-6xl mx-auto px-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-[#007c89] tracking-wider mb-2">
              LATEST NEWS
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Updates and corporate press releases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {NEWS_ARTICLES.map((article, idx) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 hover:-translate-y-1"
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-[#007c89] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs text-slate-400 block mb-2">{article.date}</span>
                  <h4 className="text-base font-extrabold text-slate-800 mb-3 group-hover:text-[#007c89] transition-colors leading-snug">
                    {article.title}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#004d55] text-white pt-16 pb-8 text-xs sm:text-sm">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Col 1 */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider mb-4">
              NANATRADE LIMITED
            </h4>
            <p className="text-slate-300 leading-relaxed">
              Providing premium distribution, brand management solutions, and hospitality excellence across West Africa.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-slate-300">
              <li><a href="#about" className="hover:text-[#38a8a4] transition-colors">About Us</a></li>
              <li><a href="#brands" className="hover:text-[#38a8a4] transition-colors">Our Brands</a></li>
              <li><a href="#careers" className="hover:text-[#38a8a4] transition-colors">Careers</a></li>
              <li><a href="#news" className="hover:text-[#38a8a4] transition-colors">News</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider mb-4">
              CONTACT US
            </h4>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#38a8a4]" />
                <span>Accra, Ghana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#38a8a4]" />
                <span>+233 30 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#38a8a4]" />
                <span>info@nanatrade.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-6 border-t border-white/10 text-center text-slate-400 text-xs">
          © {new Date().getFullYear()} NanaTrade Limited. All rights reserved.
        </div>
      </footer>
    </div>
  );
}