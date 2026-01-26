import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NeonButton } from './ui/NeonButton';
import { ArrowRight, Download, Layers, Zap, Star, Loader2 } from 'lucide-react';
import { fetchHeroContent, HeroContent } from '../Nuel-folio ux_ui-portfolio/src/services/heroService';

type ActiveMenu = 'home' | 'services' | 'about' | 'work' | 'resources';

interface HeroProps {
  activeMenu?: ActiveMenu;
}

export const Hero: React.FC<HeroProps> = ({ activeMenu = 'home' }) => {
  const [heroContent, setHeroContent] = useState<HeroContent | null>(null);
  const [loading, setLoading] = useState(true);

  // Fallback content if Supabase is not configured or fails
  const fallbackContent: HeroContent = {
    id: 'fallback',
    hero_title: 'Product Designer focused on Simplicity & Functionality',
    hero_description: 'I craft user-centered digital products that blend aesthetics with functionality. Specializing in SaaS interfaces, mobile apps, and design systems.',
    hero_button_text: 'View My Portfolio',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  useEffect(() => {
    const loadHeroContent = async () => {
      try {
        setLoading(true);
        const content = await fetchHeroContent();
        setHeroContent(content || fallbackContent);
      } catch (error) {
        console.error('Error loading hero content:', error);
        setHeroContent(fallbackContent);
      } finally {
        setLoading(false);
      }
    };

    loadHeroContent();
  }, []);

  const displayContent = heroContent || fallbackContent;
  const stats = [
    { label: 'Experience', value: '1+ Years', icon: <Layers className="w-5 h-5 text-neon-primary" /> },
    { label: 'Projects', value: '20+ Launched', icon: <Zap className="w-5 h-5 text-neon-secondary" /> },
    { label: 'Client Rating', value: '3.9/5.0', icon: <Star className="w-5 h-5 text-neon-accent" /> },
  ];

  // Google Drive Link for Resume Download
  const resumeDownloadLink = "https://drive.google.com/file/d/1PmFjCSizkvZBQF2TblYMAId59vtElmBd/view?usp=sharing";

  // Define different background styles for each menu
  const getBackgroundStyle = () => {
    switch (activeMenu) {
      case 'home':
        // Original homepage background
        return (
          <>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-secondary/20 rounded-full blur-[128px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-primary/20 rounded-full blur-[128px] -z-10" />
          </>
        );
      case 'services':
        // Services background - different color scheme
        return (
          <>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/25 rounded-full blur-[128px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-400/25 rounded-full blur-[128px] -z-10" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[150px] -z-10" />
          </>
        );
      case 'about':
        // About Us background
        return (
          <>
            <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-green-400/20 rounded-full blur-[128px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-[128px] -z-10" />
            <div className="absolute top-1/3 right-0 w-80 h-80 bg-teal-400/15 rounded-full blur-[100px] -z-10" />
          </>
        );
      case 'work':
        // Selected Work background
        return (
          <>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[128px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-[128px] -z-10" />
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-yellow-400/15 rounded-full blur-[120px] -z-10" />
          </>
        );
      case 'resources':
        // Resources background
        return (
          <>
            <div className="absolute top-0 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-[128px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-1/2 w-96 h-96 bg-rose-400/20 rounded-full blur-[128px] -z-10" />
            <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-fuchsia-500/15 rounded-full blur-[140px] -z-10" />
          </>
        );
      default:
        // Default to home background
        return (
          <>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-secondary/20 rounded-full blur-[128px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-primary/20 rounded-full blur-[128px] -z-10" />
          </>
        );
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glows - Dynamic based on active menu */}
      {getBackgroundStyle()}

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-3 py-1 border border-neon-primary/30 rounded-full bg-neon-primary/5 backdrop-blur-md mb-6">
            <span className="text-neon-primary text-xs font-mono uppercase tracking-widest">Available for Freelance</span>
          </div>
          
          {/* Apple Typography: tracking-tighter for h1, responsive scale */}
          {loading ? (
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <Loader2 className="w-6 h-6 text-white/70 animate-spin" />
              <span className="text-white/70">Loading...</span>
            </div>
          ) : (
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-4 md:mb-6 text-white tracking-tighter">
              {displayContent.hero_title}
            </h1>
          )}
          
          {/* Apple Typography: text-white/70 for paragraphs, leading-relaxed */}
          {loading ? (
            <div className="h-20 mb-6 md:mb-8"></div>
          ) : (
            <p className="text-white/70 text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-lg leading-relaxed">
              {displayContent.hero_description}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 md:mb-12">
            <NeonButton 
              variant="primary" 
              className="w-full sm:w-auto"
              onClick={() => {
                const element = document.querySelector('#work');
                if (element) {
                  const headerOffset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              {displayContent.hero_button_text || 'View My Portfolio'} <ArrowRight size={18} />
            </NeonButton>
            {/* ប៊ូតុងដែលបានកែតម្រូវដើម្បីបើក Tab ថ្មីសម្រាប់ Download CV */}
            <NeonButton 
              variant="outline" 
              href={resumeDownloadLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              Download Resume <Download size={18} />
            </NeonButton>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 border-t border-white/10 pt-6 md:pt-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1 text-slate-300">
                  {stat.icon}
                  <span className="text-xs uppercase tracking-wider font-mono">{stat.label}</span>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Visual / 3D Element Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            {/* Abstract CSS Composition representing the 3D head */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-primary/20 to-neon-secondary/20 rounded-full blur-3xl animate-pulse" />
            <img
              src="../../img/Heanlyhoeng.jpg"
              alt="Abstract 3D Shape"
              className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl border border-white/10 mix-blend-lighten opacity-90 hover:scale-105 transition-transform duration-700 slide-fwd-right"
            />
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 p-4 bg-dark-card border border-white/10 rounded-xl shadow-neon-box backdrop-blur-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-ping" />
                <span className="font-mono text-sm text-white">System Status: Online</span>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-5 -left-5 p-4 bg-dark-card border border-white/10 rounded-xl shadow-xl backdrop-blur-xl z-20 max-w-[200px]"
            >
              <div className="text-xs text-slate-400 mb-1">Latest Achievement</div>
              <div className="text-sm font-bold text-white">Awwwards Site of the Day</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};