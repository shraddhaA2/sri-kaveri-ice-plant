import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Mail, Phone, MapPin, Globe } from 'lucide-react';
import Logo from './Logo';
import { Language, translations } from '../translations';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onEnquiryClick: () => void;
}

export default function Header({ lang, setLang, onEnquiryClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[lang];

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.products, href: '#products' },
    { label: t.nav.industries, href: '#industries' },
    { label: t.nav.quality, href: '#quality' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
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
    <>
      {/* Top Banner with minimal corporate details */}
      <div className="bg-primary text-white/90 text-2xs py-1.5 px-margin-mobile md:px-margin-desktop border-b border-primary-container/40 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-mono">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3 text-secondary-container" /> {t.topBanner.hub}
            </span>
            <span className="opacity-40">|</span>
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3 text-secondary-container" /> {t.topBanner.support}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span>{t.topBanner.tagline}</span>
          </div>
        </div>
      </div>

      <header 
        className={`sticky top-0 w-full z-40 transition-all duration-300 h-20 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-outline-variant/30' 
            : 'bg-white border-b border-outline-variant/20'
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop h-full">
          
          {/* Logo Brand Zone */}
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center group py-1">
            <Logo variant="header" className="h-14 w-auto transition-transform group-hover:scale-101" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-mono text-xs font-semibold text-on-surface-variant hover:text-primary relative py-2 transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Header Action Button & Mobile Hamburguer & Language Selector */}
          <div className="flex items-center gap-2.5">
            
            {/* Language Switcher Button Group */}
            <div className="flex items-center gap-1 bg-surface-container-high p-1 rounded-md border border-outline-variant/60">
              <Globe className="h-3 w-3 text-on-surface-variant mx-1.5 hidden md:block" />
              <button
                onClick={() => setLang('en')}
                className={`text-[10px] font-mono px-2 py-1 rounded transition-all font-bold ${
                  lang === 'en' 
                    ? 'bg-primary text-white shadow-xs' 
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('kn')}
                className={`text-[10px] font-sans px-2 py-1 rounded transition-all font-bold ${
                  lang === 'kn' 
                    ? 'bg-primary text-white shadow-xs' 
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                ಕನ್ನಡ
              </button>
            </div>

            <button 
              onClick={onEnquiryClick}
              className="hidden lg:flex items-center gap-1.5 bg-primary hover:bg-primary-container text-white font-mono text-xs font-semibold px-4 py-2 rounded transition-all active:scale-98 shadow-sm cursor-pointer"
            >
              <span>{t.nav.enquiry}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-primary hover:bg-surface-container-low rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-primary/40 backdrop-blur-sm" 
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 right-0 w-80 bg-white shadow-2xl flex flex-col p-6 z-50">
            <div className="flex items-center justify-between pb-6 border-b border-outline-variant">
              <div className="flex items-center gap-2">
                <Logo variant="header" className="h-9 w-auto" />
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 py-6 flex-1 overflow-y-auto">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-mono text-sm font-semibold text-on-surface-variant hover:text-primary hover:bg-surface-container-low px-4 py-2.5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="border-t border-outline-variant pt-6 space-y-4 font-mono text-xs text-on-surface-variant">
              
              {/* Language Switcher inside mobile drawer */}
              <div className="flex justify-between items-center bg-surface-container-high p-2 rounded-lg border border-outline-variant/60">
                <span className="font-sans text-xs flex items-center gap-1">
                  <Globe className="h-3.5 w-3.5" /> Language / ಭಾಷೆ
                </span>
                <div className="flex gap-1">
                  <button
                    onClick={() => setLang('en')}
                    className={`px-2.5 py-1 rounded text-2xs font-bold font-mono transition-all ${
                      lang === 'en' ? 'bg-primary text-white shadow-xs' : 'bg-transparent text-on-surface-variant'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLang('kn')}
                    className={`px-2.5 py-1 rounded text-2xs font-bold font-sans transition-all ${
                      lang === 'kn' ? 'bg-primary text-white shadow-xs' : 'bg-transparent text-on-surface-variant'
                    }`}
                  >
                    ಕನ್ನಡ
                  </button>
                </div>
              </div>

              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" /> +91 91645 32669
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" /> srikaveriiceplant@gmail.com
              </p>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onEnquiryClick();
                }}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-white py-3 rounded-lg font-bold transition-all cursor-pointer"
              >
                {t.nav.enquiry}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
