import React from 'react';
import { Target, Shield, Cpu, Award, Check } from 'lucide-react';
import { Language, translations } from '../translations';
import { GOOGLE_MAPS_URL } from '../data';

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const t = translations[lang];

  // Map icons dynamically to the localized features
  const icons = [Shield, Cpu, Target, Award];

  return (
    <section id="about" className="py-20 md:py-28 bg-surface-container-low text-on-surface">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Title Block with Vertical Accent Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="border-l-4 border-secondary pl-6">
            <span className="font-mono text-xs font-bold text-secondary uppercase tracking-wider block mb-2">
              {t.about.tag}
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
              {t.about.title}
            </h2>
          </div>
          <p className="font-sans text-sm text-on-surface-variant max-w-lg leading-relaxed">
            {t.about.intro}
          </p>
        </div>

        {/* Content Split: Narrative & Visual Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-sans text-xl font-bold text-primary mb-3">
                  {t.about.storyHeader}
                </h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  {t.about.storyDesc}
                </p>
              </div>

              <div>
                <h3 className="font-sans text-xl font-bold text-primary mb-3">
                  {t.about.whyHeader}
                </h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  {t.about.whyDesc}
                </p>
              </div>

              <div>
                <h3 className="font-sans text-xl font-bold text-primary mb-3">
                  {t.about.differentHeader}
                </h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  {t.about.differentDesc}
                </p>
              </div>
            </div>

            {/* Commitments list in a professional 2x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {t.about.features.map((item, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <div key={index} className="p-5 bg-white rounded-lg border border-outline-variant/30 shadow-2xs hover:shadow-sm transition-all">
                    <div className="inline-flex p-2 rounded bg-primary/5 text-primary mb-3">
                      <Icon className="h-5 w-5 shrink-0" />
                    </div>
                    <h4 className="font-sans text-sm font-bold text-primary mb-1">{item.title}</h4>
                    <p className="font-sans text-2xs text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Side visual mockup card */}
          <div className="lg:col-span-5 relative">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl overflow-hidden shadow-lg border border-outline-variant/40 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/5] w-full">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW76MYaviJ82QdOjBNs4yDwrL9cz6WU4_Lq08Jt2WCpvpVXIyDAu609elyyqf8gGnm2YsXPCpWswwsWhCE1vn5asuJBlPVnKC3-SAXd6oIkrVY-2p_C6eUP7TnY4RQ3la6mebQ9ZqkaandVMPwtBeQknbM2eAOHPvJvpBMwYQ_PlXE1J2iHbTarGX7GLiX7nd7cU3_AJRWFODlV_FOKDMdhaMvz3VnIjkO8ob4ilX20ACXgkH3mbf8" 
                  alt="Automated production floor inside Sri Kaveri Ice Plant" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
              </div>
            </a>
            
            {/* Overlay spec badge */}
            <div className="absolute -bottom-6 -left-6 hidden sm:block max-w-xs bg-primary p-6 rounded-lg text-white shadow-xl border border-slate-800">
              <span className="font-mono text-3xs font-bold uppercase tracking-widest text-secondary block mb-1">
                {lang === 'en' ? 'CRYSTALLINE ICE BLOCKS' : 'ಗಟ್ಟಿ ಸ್ಫಟಿಕ ಐಸ್ ಬ್ಲಾಕ್ಸ್'}
              </span>
              <p className="font-sans text-sm font-extrabold leading-snug">
                {lang === 'en' ? 'Ashoka\'s Crystalline Ice' : 'ಅಶೋಕರವರ ಕಾವೇರಿ ಐಸ್'}
              </p>
              <div className="flex gap-2.5 mt-2.5 items-center">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuASdqIE-TfW7FGPOb_HIWXFI02okO7AAZkdfX103bD0CF6EK99JXppBA26ZMVwhbFnL8d3z6JqmF19bl-WIN6_QGTnkLAIe6bK6Brq1rz2zWN5l1rVyTamKNyVPxh0CX3dy44IjAZNnza_0gh7edDKJ_1kh78GwTFWlYIC77J5behJWlSutwcd31yIkoJa_apLOVj1OyWC-GGIeAiLudQokv1mOz7oqjGmmBHwt7qkpmNWA50PSEgyw" 
                  alt="Sri Kaveri Crystalline Ice blocks"
                  className="w-12 h-12 rounded object-cover border border-white/20"
                />
                <p className="font-sans text-3xs text-white/80 leading-relaxed flex-1">
                  {lang === 'en' ? 'Our plant features 24/7 continuous operations with 10 dedicated operators.' : 'ನಮ್ಮ ಕಾರ್ಖಾನೆಯು 10 ತಜ್ಞ ಉದ್ಯೋಗಿಗಳೊಂದಿಗೆ ಪ್ರತಿದಿನ 24 ಗಂಟೆಯೂ ನಿರಂತರವಾಗಿ ಚಾಲನೆಯಲ್ಲಿರುತ್ತದೆ.'}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Why Choose Us & Badges Box */}
        <div className="mt-20 p-8 sm:p-10 bg-white rounded-xl border border-outline-variant/40 shadow-xs">
          <h3 className="font-sans text-lg sm:text-xl font-extrabold text-primary text-center mb-8 tracking-tight">
            {translations[lang].whyChoose.title}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {translations[lang].whyChoose.reasons.map((reason, index) => (
              <div key={index} className="flex items-center gap-2.5 p-3.5 rounded bg-surface-container-lowest border border-outline-variant/30 hover:border-secondary/40 transition-colors">
                <div className="h-5 w-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 shadow-3xs">
                  <Check className="h-3 w-3 stroke-[3px]" />
                </div>
                <span className="font-sans text-xs sm:text-sm font-bold text-primary">
                  {reason}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
