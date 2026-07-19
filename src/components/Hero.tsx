import React from 'react';
import { ArrowRight, Phone, Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { Language, translations } from '../translations';
import Logo from './Logo';

interface HeroProps {
  lang: Language;
  onEnquiryClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ lang, onEnquiryClick, onContactClick }: HeroProps) {
  const t = translations[lang];

  return (
    <section id="home" className="relative bg-primary overflow-hidden min-h-[90vh] flex flex-col justify-between animate-fade-in">
      
      {/* Background Cover Image with exact corporate navy gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/50 z-10" />
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdSLOuEHZFj3beul-bWcwQtfLTiDEfT7VpZJvpzNLz2xL39hYWg6spSMaAKq_2LSkwi51oSJnJ8ahRqhn_8cTyT4jjNI7Vuj0UfPyt2Fn4AaTs-KG9eapG-N7LIAbL6Z86Kn3ABFpciAFqdSrf3PEg4ahdUuV21iil4MRcibS51lyyHBW_SB2-1u9ExFzW99mlSx8ci87xcXz7HxmSFVCqR6QcPjK0HGxBGx4D7-01otcYTPH5pBWI" 
          alt="Sri Kaveri Ice Production Floor" 
          className="w-full h-full object-cover object-center scale-102 filter brightness-[0.5] contrast-110 saturate-[0.85]"
        />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop w-full py-12 md:py-20 flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 text-white space-y-6">
            
            {/* Logo integrated prominently */}
            <div className="flex items-center gap-2 mb-2 animate-fade-in">
              <Logo variant="footer" className="h-16 w-auto" />
            </div>

            {/* Subheader Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary-container/10 border border-secondary-container/20 px-3.5 py-1.5 rounded font-mono text-xs font-semibold text-secondary-container tracking-wider uppercase">
              <Award className="h-4 w-4 shrink-0" />
              <span>{lang === 'en' ? 'Certified Ice Manufacturer' : 'ಪ್ರಮಾಣೀಕೃತ ಐಸ್ ತಯಾರಕರು'}</span>
            </div>

            {/* Heading */}
            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {lang === 'en' ? 'Premium Ice Blocks, Crushed Ice & Ice Cubes' : 'ಪ್ರೀಮಿಯಂ ಐಸ್ ಬ್ಲಾಕ್ಸ್, ಕ್ರಶ್ಡ್ ಐಸ್ ಮತ್ತು ಐಸ್ ಕ್ಯೂಬ್ಸ್'}
            </h1>

            {/* Description */}
            <p className="font-sans text-base sm:text-lg text-slate-200 leading-relaxed font-light max-w-2xl">
              {lang === 'en' 
                ? 'Trusted commercial ice supplier serving Karnataka, Goa, Maharashtra and Kerala with hygienic production, reliable delivery, and premium quality ice for fisheries, hotels, restaurants, seafood businesses, catering, and industrial applications.'
                : 'ಕರ್ನಾಟಕ, ಗೋವಾ, ಮಹಾರಾಷ್ಟ್ರ ಮತ್ತು ಕೇರಳದಾದ್ಯಂತ ಮೀನುಗಾರಿಕೆ, ಹೋಟೆಲ್‌ಗಳು, ರೆಸ್ಟೋರೆಂಟ್‌ಗಳು, ಸಮುದ್ರ ಆಹಾರ ಉದ್ಯಮಗಳು, ಕ್ಯಾಟರಿಂಗ್ ಮತ್ತು ಕೈಗಾರಿಕಾ ಅನ್ವಯಿಕೆಗಳಿಗೆ ಆರೋಗ್ಯಕರ ಉತ್ಪಾದನೆ, ವಿಶ್ವಾಸಾರ್ಹ ವಿತರಣೆ ಮತ್ತು ಪ್ರೀಮಿಯಂ ಗುಣಮಟ್ಟದ ಐಸ್ ಪೂರೈಸುವ ನಂಬಿಕಸ್ಥ ವಾಣಿಜ್ಯ ಐಸ್ ಪೂರೈಕೆದಾರರು.'}
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm font-sans font-medium text-slate-100">
              <span className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> {lang === 'en' ? 'Hygienic Production' : 'ಆರೋಗ್ಯಕರ ಉತ್ಪಾದನೆ'}
              </span>
              <span className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> {lang === 'en' ? 'Purified Water' : 'ಶುದ್ಧೀಕರಿಸಿದ ನೀರು'}
              </span>
              <span className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> {lang === 'en' ? 'Reliable Supply' : 'ವಿಶ್ವಾಸಾರ್ಹ ಪೂರೈಕೆ'}
              </span>
              <span className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> {lang === 'en' ? 'Fast Delivery' : 'ವೇಗದ ವಿತರಣೆ'}
              </span>
            </div>

            {/* Call to Actions - Standard button row as backup / mobile options */}
            <div className="flex flex-wrap gap-4 pt-4 lg:hidden">
              <button
                onClick={onContactClick}
                className="flex items-center justify-center gap-2 bg-secondary text-white hover:bg-secondary-fixed font-mono text-sm font-bold px-6 py-3.5 rounded transition-all active:scale-98 shadow-md cursor-pointer"
              >
                <span>{t.hero.orderBtn}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="https://wa.me/919164532669?text=Hello%20Sri%20Kaveri%20Ice%20Plant%2C%0A%0AI%20would%20like%20to%20place%20an%20order.%0A%0AProduct%3A%20%0AQuantity%3A%20%0ADelivery%20Location%3A%20%0A%0APlease%20contact%20me%20regarding%20availability."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-white/20 text-white hover:bg-white/10 font-mono text-sm font-bold px-6 py-3.5 rounded transition-all active:scale-98 cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>{t.hero.whatsappBtn}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Prominent Sales Info Card */}
          <div className="lg:col-span-5 flex justify-center items-center w-full relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle,_var(--color-secondary)_0%,_transparent_70%)] opacity-20 blur-3xl rounded-full w-96 h-96 -translate-y-6 -z-10" />
            <div className="bg-slate-950/85 backdrop-blur-md border border-white/15 p-6 md:p-8 rounded-2xl shadow-xl space-y-6 text-white w-full max-w-md mx-auto">
              <div className="space-y-2">
                <span className="font-mono text-3xs uppercase text-secondary-fixed tracking-widest font-bold block text-sky-400">
                  {lang === 'en' ? 'OUR PRODUCTS' : 'ನಮ್ಮ ಉತ್ಪನ್ನಗಳು'}
                </span>
                <div className="flex flex-wrap gap-2 text-[11px] font-bold">
                  <span className="bg-white/10 px-2.5 py-1.5 rounded-md border border-white/5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Premium Ice Blocks
                  </span>
                  <span className="bg-white/10 px-2.5 py-1.5 rounded-md border border-white/5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Crushed Ice
                  </span>
                  <span className="bg-white/10 px-2.5 py-1.5 rounded-md border border-white/5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Ice Cubes
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-3xs uppercase text-secondary-fixed tracking-widest font-bold block text-sky-400">
                  {lang === 'en' ? 'DELIVERED ACROSS' : 'ಸರಬರಾಜು ಜಾಲ'}
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-200">
                  <div className="flex items-center gap-1.5">
                    <span className="text-secondary">📍</span> Karnataka
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-secondary">📍</span> Goa
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-secondary">📍</span> Maharashtra
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-secondary">📍</span> Kerala
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-950/50 to-slate-950/50 border border-cyan-500/20 p-4 rounded-xl flex items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-4xs uppercase text-cyan-400 tracking-wider font-bold block">
                    {lang === 'en' ? 'PROMINENT RATE' : 'ವಿಶೇಷ ದರ'}
                  </span>
                  <span className="font-sans text-2xl font-black text-white">₹150 <span className="text-xs font-normal text-slate-300">/ Block</span></span>
                </div>
                <div className="text-right border-l border-white/10 pl-4">
                  <span className="font-mono text-4xs uppercase text-slate-400 tracking-wider font-bold block">
                    {lang === 'en' ? 'MINIMUM ORDER' : 'ಕನಿಷ್ಠ ಆರ್ಡರ್'}
                  </span>
                  <span className="font-sans text-base font-bold text-secondary-fixed">10 Blocks</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={onContactClick}
                  className="bg-secondary hover:bg-secondary-fixed text-white font-mono text-xs font-bold py-3 px-4 rounded transition-all active:scale-98 text-center cursor-pointer shadow-md"
                >
                  Order Now
                </button>
                <a
                  href="tel:+919164532669"
                  className="border border-white/20 hover:bg-white/10 text-white font-mono text-xs font-bold py-3 px-4 rounded transition-all active:scale-98 text-center"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/919164532669?text=Hello%20Sri%20Kaveri%20Ice%20Plant%2C%0A%0AI%20would%20like%20to%20place%20an%20order.%0A%0AProduct%3A%20%0AQuantity%3A%20%0ADelivery%20Location%3A%20%0A%0APlease%20contact%20me%20regarding%20availability."
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white font-mono text-xs font-bold py-3 px-4 rounded transition-all active:scale-98 text-center flex items-center justify-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  WhatsApp
                </a>
                <button
                  onClick={onEnquiryClick}
                  className="bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold py-3 px-4 rounded transition-all active:scale-98 text-center cursor-pointer"
                >
                  Request Quote
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
