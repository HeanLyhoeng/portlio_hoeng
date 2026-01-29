import React from 'react';
import { motion } from 'framer-motion';
import { NeonButton } from './ui/NeonButton';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';

// Social Icon SVG Component
const SocialIcon = ({ path, color }: { path: string; color?: string }) => (
    <svg viewBox="0 0 24 24" className={`w-6 h-6 fill-current ${color || ''}`} xmlns="http://www.w3.org/2000/svg">
        <path d={path} />
    </svg>
);

const facebookPath = "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z";
const telegramPath = "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z";
const youtubePath = "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .5 6.186C0 8.07 0 12 0 12s0 3.93.5 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.5-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z";

export const CallToAction: React.FC = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-5xl mx-auto bg-dark-card/50 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl">
                
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    
                    {/* Left Side: Heading */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                                Let's Create Something <br />
                                <span className="text-gold-gradient gold-glow">Extraordinary.</span>
                            </h2>
                            <p className="text-base sm:text-lg text-slate-400 mb-6 md:mb-8 leading-relaxed">
                                I'm currently available for new projects and collaborations. 
                                Whether you need a UX audit, a full redesign, or just want to say hello—I'm here.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <NeonButton variant="primary" className="w-full sm:w-auto" href="mailto:Lyhoenghean24@gmail.com">
                                    Send Email
                                </NeonButton>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Contact Details */}
                    <div className="space-y-6 md:space-y-8 md:pl-8 md:border-l border-white/10 mt-8 md:mt-0">
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-4 md:space-y-6"
                        >
                            <h3 className="text-lg sm:text-xl font-mono text-white mb-4 md:mb-6 uppercase tracking-wider">Contact Information</h3>
                            
                            <div className="flex items-start gap-3 md:gap-4">
                                <div className="p-2 md:p-3 rounded-lg bg-white/5 text-gold-gradient flex-shrink-0">
                                    <Phone size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs sm:text-sm text-slate-400 mb-1">Phone Number</p>
                                    <a href="tel:+85566910817" className="text-base sm:text-lg text-white font-mono hover:text-gold-gradient transition-colors break-all">+855 66 910 817</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 md:gap-4">
                                <div className="p-2 md:p-3 rounded-lg bg-white/5 text-neon-secondary flex-shrink-0">
                                    <Mail size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs sm:text-sm text-slate-400 mb-1">Email Address</p>
                                    <a href="mailto:Lyhoenghean24@gmail.com" className="text-base sm:text-lg text-white font-mono hover:text-gold-gradient transition-colors break-all">Lyhoenghean24@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 md:gap-4">
                                <div className="p-2 md:p-3 rounded-lg bg-white/5 text-neon-accent flex-shrink-0">
                                    <Globe size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs sm:text-sm text-slate-400 mb-1">Website</p>
                                    <p className="text-base sm:text-lg text-white font-mono break-all">www.lyhoeng.online/p</p>
                                </div>
                            </div>

                            <div className="pt-4 md:pt-6 border-t border-white/10">
                                <p className="text-xs sm:text-sm text-slate-400 mb-3 md:mb-4">Connect on Social Media</p>
                                <div className="flex gap-3 md:gap-4 flex-wrap">
                                    <a href="https://web.facebook.com/lyhoeng.hean" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full text-slate-300 hover:text-[#1877F2] hover:bg-white/10 transition-all">
                                        <SocialIcon path={facebookPath} />
                                    </a>
                                    <a href="https://t.me/Hean_Lyhoeng" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full text-slate-300 hover:text-[#0088cc] hover:bg-white/10 transition-all">
                                        <SocialIcon path={telegramPath} />
                                    </a>
                                    <a href="https://www.youtube.com/@T3MovieUniverse" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full text-slate-300 hover:text-[#FF0000] hover:bg-white/10 transition-all">
                                        <SocialIcon path={youtubePath} />
                                    </a>
                                    <a href="https://github.com/HeanLyhoeng?tab=repositories" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all">
                                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};