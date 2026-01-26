import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Quote, Star, ChevronDown, ChevronUp, Loader2 } from 'lucide-react';
import { NeonButton } from './ui/NeonButton';
import { Footer } from './Footer';
import { fetchPricingPlans, PricingPlan } from '../Nuel-folio ux_ui-portfolio/src/services/pricingService';

export const Services: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>([]);
  const [loadingPricing, setLoadingPricing] = useState(true);

  const testimonials = [
    {
      name: "Sarah Liu",
      role: "Co-Founder, ParallelML",
      quote: "Their design-thinking mindset combined with AI knowledge helped us go from prototype to production fast.",
      rating: 0,
      stat: "3× Faster MVP Launch"
    },
    {
      name: "Daniel Shore",
      role: "VP of Product, Synthara",
      quote: "They worked like an internal team — fast, flexible, and always clear.",
      rating: 0,
      stat: "70% Fewer Drop-Offs"
    },
    {
      name: "Jonas Berg",
      role: "Founder, FrameOps",
      quote: "We went from zero to launch in 6 weeks with rock-solid infra and refined UX.",
      rating: 0,
      stat: "99.8% / <500ms Product Launch at Scale"
    },
    {
      name: "Helena Brooks",
      role: "Head of Growth, Lineflow",
      quote: "Simple, thoughtful onboarding changes doubled activation — and it only took weeks.",
      rating: 0,
      stat: "+125% Activation Rate"
    },
    {
      name: "Maya El-Khoury",
      role: "CEO, Hexabase",
      quote: "A complete redesign that made our product investor-ready — sharp, intuitive, and conversion-focused.",
      rating: 0,
      stat: "4× Higher Investor Engagement"
    }
  ];

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Services Data - Edit category titles and sub-services here
  const services = [
    {
      title: "UI/UX Design",
      items: ["User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing", "Interaction Design"],
    },
    {
      title: "Graphic Design Strategy",
      items: ["Visual Trend Analysis", "Competitor Visual Audit", "Visual Hierarchy Prioritization", "Iconography & Illustration", "Brand Launch Kit Development"],
    },
    {
      title: "Video Strategy & Production",
      items: ["Intro/Outro Animation", "Video Style Guide", "Color Grading & VFX", "Content Format Strategy", "Thumbnail Templates"],
    },
    {
      title: "Software Licensing & Digital Solutions (T3 Software)",
      items: ["Authentic License Procurement (Adobe Creative Cloud, Microsoft 365)", "Generative AI Tools Access (Firefly)", "Cloud Storage Configuration", "24/7 Technical Support with Warranty"],
    },
  ];

  const industries = [
    {
      name: "AI & Machine Learning",
      description: "Designing Infographics and Explainer Videos to clearly simplify complex AI concepts, making advanced technology accessible."
    },
    
    {
      name: "Healthcare",
      description: "Healthcare products that prioritize user safety, accessibility, and ease of use while maintaining regulatory compliance."
    },
    {
      name: "E-Commerce",
      description: "Producing Compelling Product Videos, Digital Ads, and Promotional Graphics that drive sales conversion"
    },
    {
      name: "SaaS",
      description: "Designing Branded Templates for social media and producing Product Demo Videos to showcase software features"
    }
  ];

  const processSteps = [
    { 
      phase: "Strategy", 
      steps: ["Discovery", "Market Analysis", "Strategic Planning", "Roadmap Development", "Goal Setting"] 
    },
    { 
      phase: "UX Design", 
      steps: ["User Research", "Information Architecture", "Wireframes", "Interactive Prototyping", "Usability Testing"] 
    },
    { 
      phase: "UI & Visual Design", 
      steps: ["Visual Branding", "Graphic Asset Creation", "Design System", "Responsive Design", "Motion & Animation"] 
    },
    { 
      phase: "Development & Delivery", 
      steps: ["Dev Handoff", "Quality Assurance (QA)", "Deployment & Launch", "Performance Optimization", "Post-Launch Support"] 
    }
  ];

  // Fetch pricing plans from Supabase
  useEffect(() => {
    const loadPricingPlans = async () => {
      try {
        setLoadingPricing(true);
        const plans = await fetchPricingPlans();
        setPricingPlans(plans);
      } catch (error) {
        console.error('Error loading pricing plans:', error);
        setPricingPlans([]);
      } finally {
        setLoadingPricing(false);
      }
    };

    loadPricingPlans();
  }, []);

  

  const enterpriseFeatures = [
    "99.9% Uptime",
    "Enterprise-grade audio infrastructure",
    "Launch Support – Hands-on help from a dedicated deployment team",
    "AI Guardrails – Built-in safeguards reduce hallucinations",
    "Compliance – Fully SOC 2, HIPAA & PCI-ready"
  ];

  const caseStudies = [
    { 
      image: "./img/phanit.jpg", 
      title: "Designing Complex AI Interfaces That Users Actually Understand", 
      category: "Design",
      date: "July 24, 2025",
      description: "How we create clean, intuitive interfaces for complex AI products without losing functionality."
    },
    { 
      image: "../../img/Lead UX Designer.jpg", 
      title: "Micro-Interactions That Make Interfaces Feel Alive", 
      category: "Design",
      date: "July 21, 2025",
      description: "Explore how subtle motion effects enhance usability and engagement across modern interfaces."
    },
    { 
      image: "../../img/Brand Identity.jpg", 
      title: "65% Conversion Boost: FramerFlow's Modular UI Win", 
      category: "Web design & Dev",
      date: "July 16, 2025",
      description: "By implementing a modular web system and intuitive landing page, FramerFlow improved sales instantly."
    }
    
  ];

  const faqs = [
    {
      question: "What is your design process?",
      answer: "My process is structured into four clear phases: Strategy (discovery, research, and goal-setting), UX Design (user flows, wireframes, and prototyping), UI Design (visual direction, branding, and high-fidelity mockups), and Delivery (handoff, launch, and post-launch support). This approach ensures every project is purposeful, user-centered, and visually refined from start to finish."
    },
    {
      question: "How long does a typical project take?",
      answer: "Timelines are tailored to your needs and project scope. For most high-end websites, you can expect a 4–8 week turnaround. More complex platforms or AI-driven products may require additional time to ensure every detail meets the highest standards."
    },
    {
      question: "Do you work with startups?",
      answer: "Absolutely. I love partnering with startups and fast-growing teams. My process is flexible—whether you need a lean MVP or a scalable design system, I adapt to your pace and help you grow with confidence."
    },
    {
      question: "Can you design for AI-powered products?",
      answer: "Yes. I specialize in crafting intuitive interfaces for AI-driven tools—dashboards, chatbots, and data visualizations included. My focus is on making advanced technology accessible and engaging for real users, blending clarity with innovation."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes. After launch, I offer seamless handoff, documentation, and optional maintenance packages. Whether you need quick tweaks, new features, or design audits, I'm here to ensure your product continues to perform beautifully."
    },
    {
      question: "Who owns the design copyrights once the project is finished?",
      answer: "You do. Upon project completion and final payment, you receive 100% ownership of all final design assets—no strings attached."
    }
    
  ];

  // Remove icon placeholder logic entirely
  return (
    <div className="min-h-screen bg-dark-bg text-slate-200">
      <style>{`
        /* Services animated header: minimal per-char scroll-triggered animation */
        .services-section { position: relative; }
        .services-animated-header { display:flex; align-items:center; justify-content:center; }
        .services-title { text-transform:uppercase; display:inline-flex; gap:4px; }
        .services-title .char { display:inline-block; font-family: Montserrat, sans-serif; font-weight:700; color:#fff; font-size: clamp(24px, 4vw, 32px); transform-origin:center; transition: transform 600ms cubic-bezier(0.19,1,0.22,1), opacity 400ms ease, letter-spacing 600ms ease; opacity:0.7; }
        .services-title .char.space { width:0.5rem; }
        /* active state triggered by IntersectionObserver when section scrolls into view */
        .services-section.active .services-title .char { opacity:0.95; transform: translateY(-4px) scale(1.02); letter-spacing: 1px; }
        /* staggered delay for nicer effect */
        .services-title .char:nth-child(1) { transition-delay: 0ms; }
        .services-title .char:nth-child(2) { transition-delay: 30ms; }
        .services-title .char:nth-child(3) { transition-delay: 60ms; }
        .services-title .char:nth-child(4) { transition-delay: 90ms; }
        .services-title .char:nth-child(5) { transition-delay: 120ms; }
        .services-title .char:nth-child(6) { transition-delay: 150ms; }
        .services-title .char:nth-child(7) { transition-delay: 180ms; }
        .services-title .char:nth-child(8) { transition-delay: 210ms; }
        .services-title .char:nth-child(9) { transition-delay: 240ms; }
        .services-title .char:nth-child(10) { transition-delay: 270ms; }
        .services-title .char:nth-child(11) { transition-delay: 300ms; }
        .services-title .char:nth-child(12) { transition-delay: 330ms; }
        .services-title .char:nth-child(13) { transition-delay: 360ms; }
        .services-title .char:nth-child(14) { transition-delay: 390ms; }
        @media (max-width:640px) {
          .services-title .char { font-size: clamp(20px, 8vw, 28px); }
        }
      `}</style>
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg/95 to-dark-bg pointer-events-none z-0" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-gold-gradient transition-colors mb-8 group"
          >
            <ArrowLeft size={18} className="sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-xs sm:text-sm">Back to Home</span>
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Apple Typography: tracking-tighter for h1 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-6 tracking-tighter">
              A design-driven AI & product partner
            </h1>
            {/* Apple Typography: text-white/70 for paragraphs, leading-relaxed */}
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
              We help startups and tech companies build exceptional digital products through design, development, and AI integration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Offerings - Premium Minimalist Design */}
      <section className="py-12 sm:py-16 md:py-20 bg-dark-surface/50 services-section" id="our-services">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="services-animated-header mb-8 sm:mb-12">
            <div className="services-title" aria-hidden="false">
              {/* Minimal "OUR SERVICES" title */}
              {Array.from('OUR SERVICES').map((ch, i) => (
                <span key={i} className={ch === ' ' ? 'char space' : 'char'}>{ch}</span>
              ))}
            </div>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="flex flex-col"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 40,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.4, 0, 0.2, 1],
                    },
                  },
                }}
              >
                {/* Category Heading - Apple Typography: tracking-tighter */}
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 tracking-tight">
                  {service.title}
                </h3>
                
                {/* Sub-services List - Apple Typography: text-white/70, leading-relaxed */}
                <div className="space-y-4">
                  {service.items.map((item, j) => (
                    <p key={j} className="text-sm sm:text-base text-white/70 leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

        {/* IntersectionObserver to trigger header animation when Services section scrolls into view */}
        {/* placed after the markup so DOM nodes exist */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            try {
              var section = document.getElementById('our-services');
              if(!section) return;
              var obs = new IntersectionObserver(function(entries){
                entries.forEach(function(e){
                  if(e.isIntersecting) section.classList.add('active'); else section.classList.remove('active');
                });
              }, { threshold: 0.45 });
              obs.observe(section);
            } catch(err) { console.error(err); }
          })();
        `}} />

      {/* Industries - Updated UI */}
      <section className="py-12 sm:py-16 md:py-20 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Apple Typography: tracking-tighter for h2 */}
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-12 text-center tracking-tighter">
            Industries We Serve
          </h2>
          <div className="max-w-4xl mx-auto divide-y divide-white/10">
            {industries.map((industry, i) => (
              <div key={i} className="flex items-start py-8">
                {/* Remove icon placeholder */}
                <div className="hidden" />
                <div>
                  {/* Apple Typography: tracking-tight for h3 */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 tracking-tight">{industry.name}</h3>
                  {/* Apple Typography: text-white/70 for paragraphs */}
                  <p className="text-white/70 leading-relaxed">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Apple Typography: tracking-tighter for h2 */}
          <h2 className="text-3xl sm:text-4xl font-semibold text-white text-center mb-8 sm:mb-12 tracking-tighter">
            We simplify product Design process
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {processSteps.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="process-card-item bg-dark-card border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-gold-gradient mb-4">{phase.phase}</h3>
                <ul className="space-y-2">
                  {phase.steps.map((step, j) => (
                    <li key={j} className="text-slate-400 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-gradient" />
                      {step}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 bg-dark-surface/50">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Apple Typography: tracking-tighter for h2 */}
          <h2 className="text-3xl sm:text-4xl font-semibold text-white text-center mb-4 tracking-tighter">
            Trusted by forward-thinking teams
          </h2>
          {/* Apple Typography: text-white/70 for paragraphs */}
          <p className="text-lg sm:text-xl text-white/70 text-center mb-8 sm:mb-12 leading-relaxed">
            Empowering fast-growing companies with design-driven, AI-powered solutions built for scale.
          </p>
          {/* Frame removed per request — only heading + paragraph are shown here */}
        </div>
      </section>

      {/* Pricing Plan */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Apple Typography: tracking-tighter for h2 */}
          <h2 className="text-3xl sm:text-4xl font-semibold text-white text-center mb-4 tracking-tighter">
            Pricing Plans
          </h2>
          {/* Apple Typography: text-white/70 for paragraphs */}
          <p className="text-lg sm:text-xl text-white/70 text-center mb-8 sm:mb-12 leading-relaxed">
            From lean MVPs to enterprise-ready builds, choose a plan that fits your roadmap.
          </p>

          {loadingPricing ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 text-white/70 animate-spin" />
              <span className="ml-3 text-white/70">Loading pricing plans...</span>
            </div>
          ) : pricingPlans.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/70">No pricing plans available at the moment.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12">
              {pricingPlans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  delay: i * 0.1 
                }}
                className={`pricing-card-item auto-animate bg-dark-card border rounded-2xl p-6 sm:p-8 relative cursor-pointer group ${
                  plan.is_popular ? 'bg-white text-black border-white' : 'border-white/10 hover:border-white/30 text-white'
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {plan.is_popular && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 120, delay: i * 0.1 + 0.3 }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-xs font-medium"
                  >
                    Most Popular
                  </motion.div>
                )}
                {/* Apple Typography: tracking-tighter for h3 */}
                <h3 className={`text-xl sm:text-2xl font-semibold mb-1 tracking-tight ${plan.is_popular ? 'text-black' : 'text-white'}`}>
                  {plan.plan_name}
                </h3>
                {plan.subtitle && (
                  <p className={`text-sm mb-4 ${plan.is_popular ? 'text-black/70' : 'text-white/70'}`}>{plan.subtitle}</p>
                )}
                <div className="mb-4">
                  <span className={`text-3xl sm:text-4xl font-semibold ${plan.is_popular ? 'text-black' : 'text-white'}`}>{plan.price}</span>
                  {plan.unit && <span className={`text-sm ml-2 ${plan.is_popular ? 'text-black/60' : 'text-white/70'}`}>{plan.unit}</span>}
                </div>
                {plan.description && (
                  <p className={`text-sm mb-6 leading-relaxed ${plan.is_popular ? 'text-black/80' : 'text-white/70'}`}>{plan.description}</p>
                )}
                <ul className="space-y-3 mb-8">
                  {plan.features && Array.isArray(plan.features) && plan.features.map((feature, j) => (
                    <motion.li 
                      key={j} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + j * 0.05 }}
                      className={`flex items-start gap-2 text-sm leading-relaxed ${plan.is_popular ? 'text-black/80' : 'text-white/70'}`}
                    >
                      <span className={`text-sm mt-0.5 ${plan.is_popular ? 'text-black' : 'text-white'}`}>•</span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <NeonButton 
                  variant={plan.is_popular ? "primary" : "outline"} 
                  href="#/contact" 
                  className="w-full mb-2"
                >
                  {plan.button_text || 'Get Started'} →
                </NeonButton>
                {plan.note && (
                  <p className={`text-xs text-center mt-2 leading-relaxed ${plan.is_popular ? 'text-black/60' : 'text-white/60'}`}>{plan.note}</p>
                )}
              </motion.div>
              ))}
            </div>
          )}

          {/* Design-Only Plans removed per request */}

          {/* Enterprise-Grade Features */}
          {!loadingPricing && pricingPlans.length > 0 && (
            <div className="mt-16 sm:mt-20 max-w-4xl mx-auto">
              {/* Apple Typography: tracking-tighter for h3 */}
              <h3 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-8 tracking-tighter">
                Enterprise-Grade Features Included
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {enterpriseFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-white/70">
                    <span className="text-white text-sm mt-0.5">•</span>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
              {/* Apple Typography: text-white/70 for paragraphs */}
              <p className="text-center text-white/70 text-sm leading-relaxed">
                Trusted by +160,000 companies and clients
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ - Updated UI */}
      <section className="py-12 sm:py-16 md:py-20 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Apple Typography: tracking-tighter for h2 */}
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-12 text-center tracking-tighter">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto divide-y divide-white/10">
            {faqs.map((faq, i) => (
              <div key={i} className="flex items-start py-8">
                {/* Remove icon placeholder */}
                <div className="hidden" />
                <div>
                  {/* Apple Typography: tracking-tight for h3 */}
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 tracking-tight">{faq.question}</h3>
                  {/* Apple Typography: text-white/70 for paragraphs */}
                  <p className="text-white/70 leading-relaxed">{faq.answer || <span className="italic text-white/50">Contact us for more details.</span>}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Apple Typography: tracking-tighter for h2 */}
          <h2 className="text-3xl sm:text-4xl font-semibold text-white text-center mb-4 tracking-tighter">
            Your success, supported
          </h2>
          {/* Apple Typography: text-white/70 for paragraphs */}
          <p className="text-lg sm:text-xl text-white/70 text-center mb-12 leading-relaxed">
            Quick responses, thoughtful revisions, and flexible post-launch care built for modern teams.
          </p>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* 24/7 Priority Response */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-dark-card border border-white/10 rounded-2xl p-6 sm:p-8"
            >
              {/* Apple Typography: tracking-tight for h3 */}
              <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                24/7 Priority Response
              </h3>
              {/* Apple Typography: text-white/70 for paragraphs */}
              <p className="text-white/70 mb-6 leading-relaxed">
                Urgent updates handled fast (priority requests completed within 24h)
              </p>
            </motion.div>

            {/* Brand Kit Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-dark-card border border-white/10 rounded-2xl p-6 sm:p-8"
            >
              {/* Apple Typography: tracking-tight for h3 */}
              <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">Download Your Brand Kit</h3>
              {/* Apple Typography: text-white/70 for paragraphs */}
              <p className="text-white/70 mb-6 leading-relaxed">
                Access all design assets in one click (fonts, color codes, social templates & more)
              </p>
              <NeonButton variant="primary" className="w-full sm:w-auto">
                Download Toolkit →
              </NeonButton>
            </motion.div>

            {/* Post-Launch Care */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-dark-card border border-white/10 rounded-2xl p-6 sm:p-8"
            >
              {/* Apple Typography: tracking-tight for h3 */}
              <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                Post-Launch Tweaks (valid 90 days)
              </h3>
              {/* Apple Typography: text-white/70 for paragraphs */}
              <p className="text-white/70 mb-6 leading-relaxed">
                Up to 5 minor revisions free:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-white/70 text-sm leading-relaxed">
                  <span className="text-white text-sm">•</span>
                  <span>Adjust font sizes for mobile</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm leading-relaxed">
                  <span className="text-white text-sm">•</span>
                  <span>Swap hero visuals or video</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm leading-relaxed">
                  <span className="text-white text-sm">•</span>
                  <span>Align content spacing & margins</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm leading-relaxed">
                  <span className="text-white text-sm">•</span>
                  <span>Replace or update images</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm leading-relaxed">
                  <span className="text-white text-sm">•</span>
                  <span>Optimize for SEO basics</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm leading-relaxed">
                  <span className="text-white text-sm">•</span>
                  <span>Tweak layout responsiveness</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm leading-relaxed">
                  <span className="text-white text-sm">•</span>
                  <span>Refine brand color usage</span>
                </div>
              </div>
              {/* Apple Typography: text-white/70 for paragraphs */}
              <p className="text-sm text-white/70 leading-relaxed">
                We've got you covered with subtle updates & ongoing site maintenance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-dark-surface/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center bg-dark-card border border-white/10 rounded-2xl p-8 sm:p-12">
            {/* Apple Typography: tracking-tighter for h2 */}
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4 tracking-tighter">
              Get started with us. Have a vision? Let's build it.
            </h2>
            {/* Apple Typography: text-white/70 for paragraphs */}
            <p className="text-lg sm:text-xl text-white/70 mb-8 leading-relaxed">
              Ready to transform your product? Let's work together.
            </p>
            <NeonButton variant="primary" href="#contact" className="w-full sm:w-auto">
              Get Started
            </NeonButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

