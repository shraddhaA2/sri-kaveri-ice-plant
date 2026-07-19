import React from 'react';
import { Mail, Phone, MapPin, Award, ShieldAlert, Navigation } from 'lucide-react';
import { Language, translations } from '../translations';
import { GOOGLE_MAPS_URL } from '../data';
import Logo from './Logo';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-primary border-t-4 border-secondary text-white/90 animate-fade-in">
      
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand identity */}
        <div className="space-y-4">
          <Logo variant="footer" className="h-14 w-auto" />
          <p className="font-sans text-2xs text-white/70 leading-relaxed">
            {t.footer.desc}
          </p>
          
          <div className="flex items-center gap-2 pt-2 text-white/80">
            <Award className="h-5 w-5 text-secondary-fixed-dim" />
            <span className="font-mono text-4xs uppercase tracking-wider font-semibold">
              {lang === 'en' ? 'Verified Government Supplier' : 'ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಪೂರೈಕೆದಾರರು'}
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-mono text-2xs font-bold uppercase tracking-wider text-secondary-fixed-dim mb-4">
            {t.footer.links}
          </h4>
          <ul className="space-y-2.5 font-sans text-xs">
            <li>
              <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="text-white/70 hover:text-white transition-colors">
                {t.nav.home}
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleScrollTo(e, '#about')} className="text-white/70 hover:text-white transition-colors">
                {t.nav.about}
              </a>
            </li>
            <li>
              <a href="#products" onClick={(e) => handleScrollTo(e, '#products')} className="text-white/70 hover:text-white transition-colors">
                {t.nav.products}
              </a>
            </li>
            <li>
              <a href="#quality" onClick={(e) => handleScrollTo(e, '#quality')} className="text-white/70 hover:text-white transition-colors">
                {t.nav.quality}
              </a>
            </li>
          </ul>
        </div>

        {/* Contact details - EXACTLY as requested by user */}
        <div>
          <h4 className="font-mono text-2xs font-bold uppercase tracking-wider text-secondary-fixed-dim mb-4">
            {lang === 'en' ? 'Factory Location' : 'ಕಾರ್ಖಾನೆಯ ವಿಳಾಸ'}
          </h4>
          <ul className="space-y-3.5 font-sans text-xs text-white/70">
            <li className="flex items-start gap-3">
              <MapPin className="h-4.5 w-4.5 text-secondary-fixed-dim shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                <strong>{t.contactInfo.addressTitle}</strong><br />
                {t.contactInfo.address}
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-flex items-center gap-1.5 text-secondary-fixed-dim hover:text-white font-mono text-4xs font-bold uppercase tracking-wider transition-colors"
                >
                  <Navigation className="h-3 w-3" />
                  {lang === 'en' ? 'Get Directions' : 'ದಾರಿ ಪಡೆಯಿರಿ'}
                </a>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4.5 w-4.5 text-secondary-fixed-dim shrink-0" />
              <div>
                <span className="block font-semibold text-3xs text-white/50">{lang === 'en' ? 'Owner: Ashoka' : 'ಮಾಲೀಕರು: ಅಶೋಕ'}</span>
                <a href="tel:+919164532669" className="hover:text-white transition-colors font-bold">
                  +91 91645 32669
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4.5 w-4.5 text-secondary-fixed-dim shrink-0" />
              <a href="mailto:srikaveriiceplant@gmail.com" className="hover:text-white transition-colors break-all">
                srikaveriiceplant@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Compliance / Disclosures */}
        <div>
          <h4 className="font-mono text-2xs font-bold uppercase tracking-wider text-secondary-fixed-dim mb-4">
            {lang === 'en' ? 'Operating Schedule' : 'ಕಾರ್ಯನಿರ್ವಹಣೆಯ ಅವಧಿ'}
          </h4>
          <p className="font-sans text-2xs text-white/70 leading-relaxed mb-4">
            {lang === 'en'
              ? 'Our manufacturing plant operates 24 Hours, 7 Days a week, 365 Days a year to secure regional marine food supply continuity.'
              : 'ಮೀನುಗಾರಿಕಾ ಉದ್ಯಮದ ನಿರಂತರ ಬೆಂಬಲಕ್ಕಾಗಿ ನಮ್ಮ ಕಾರ್ಖಾನೆಯು ದಿನದ ೨೪ ಗಂಟೆಯೂ, ವಾರದ ೭ ದಿನವೂ, ವರ್ಷದ ೩೬೫ ದಿನವೂ ತೆರೆದಿರುತ್ತದೆ.'}
          </p>
          <div className="flex items-start gap-2 bg-white/5 border border-white/10 p-3 rounded">
            <ShieldAlert className="h-4.5 w-4.5 text-secondary-fixed-dim shrink-0 mt-0.5" />
            <p className="text-4xs font-mono text-white/60 leading-snug uppercase">
              {lang === 'en'
                ? 'NOTICE: All bulk orders are coordinated under direct standard logistics safety protocols.'
                : 'ಸೂಚನೆ: ಎಲ್ಲಾ ಬೃಹತ್ ಆರ್ಡರ್‌ಗಳನ್ನು ನೇರ ಸಾರಿಗೆ ಸುರಕ್ಷತಾ ನಿಯಮಗಳ ಅಡಿಯಲ್ಲಿ ಕಳುಹಿಸಲಾಗುತ್ತದೆ.'}
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-white/10 py-6 text-center text-white/40 font-mono text-3xs uppercase tracking-widest">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>{t.footer.rights}</p>
          <div className="flex gap-6">
            <span className="text-white/30">{lang === 'en' ? 'Established 2015-16' : 'ಸ್ಥಾಪನೆ: ೨೦೧೫-೧೬'}</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
