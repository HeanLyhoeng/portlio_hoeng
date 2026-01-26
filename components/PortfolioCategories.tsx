import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Monitor, Smartphone, Layout, Type, Box, Video } from 'lucide-react';

const categories = [
  
];

function SearchIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    )
}

export const PortfolioCategories: React.FC = () => {
  const handleViewClick = (categoryTitle: string) => {
    // Navigate to detail page using hash routing
    const slug = categoryTitle.toLowerCase().replace(/\s+/g, '-');
    window.location.hash = `#/design/${slug}`;
  };

  return (
    <section id="design-views" className="py-24 container mx-auto px-6">
      <SectionHeading title="Please Contact Me" subtitle="" titleColor="white" />
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[240px]">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group rounded-2xl overflow-hidden cursor-pointer glow-on-hover-blue"
            onClick={() => handleViewClick(cat.title)}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
            <img 
              src={cat.image} 
              alt={cat.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 slide-fwd-right" 
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20 bg-gradient-to-t from-black/90 to-transparent">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className={`p-1.5 md:p-2 rounded-lg bg-gradient-to-br ${cat.color} text-white`}>
                    {React.cloneElement(cat.icon as React.ReactElement, { size: 18 })}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white">{cat.title}</h3>
                    <p className="text-[10px] md:text-xs text-slate-300 font-mono">{cat.count}</p>
                  </div>
                </div>
                
                <button 
                  className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-neon-primary group-hover:text-black transition-all"
                  aria-label={`View ${cat.title} details`}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};