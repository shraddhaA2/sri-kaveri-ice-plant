import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Industries from './components/Industries';
import Quality from './components/Quality';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { Language } from './translations';

export default function App() {
  // Localized language state ('en' | 'kn')
  const [lang, setLang] = useState<Language>('en');

  // Light / dark theme state
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Preselected product state to pass from Products section trigger to Contact form
  const [selectedProductType, setSelectedProductType] = useState<string>('');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    const initialTheme =
      savedTheme === 'dark' || savedTheme === 'light'
        ? savedTheme
        : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Scroll handler helper to trigger smooth scrolls
  const handleScrollToSection = (sectionId: string) => {
    const targetElement = document.querySelector(sectionId);
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

  // Inquiry button handler from products section
  const handleProductInquiry = (productId: string) => {
    setSelectedProductType(productId);
    
    // Smooth scroll straight down to the Specifications Form
    handleScrollToSection('#contact');
  };

  // Top action trigger handler
  const handleTopEnquiryClick = () => {
    handleScrollToSection('#contact');
  };

  const handleTopContact = () => {
    handleScrollToSection('#contact');
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-sans selection:bg-secondary-container selection:text-primary">
      
      {/* 1. Header Navigation */}
      <Header lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} onEnquiryClick={handleTopEnquiryClick} />
  
      <main>
        {/* 2. Home Hero Zone with Corporate Trust Pillars */}
        <Hero 
          lang={lang}
          onEnquiryClick={handleTopEnquiryClick} 
          onContactClick={handleTopContact} 
        />

        {/* 3. Legacy of Purity introductory text & Corporate narrative */}
        <About lang={lang} />

        {/* 4. Products range showcase bento grid & technical specs matrix */}
        <Products lang={lang} onInquiry={handleProductInquiry} />

        {/* 5. Industries served sector highlights */}
        <Industries lang={lang} />

        {/* 6. Quality standards, lab protocols, and Reverse Osmosis details */}
        <Quality lang={lang} />

        {/* 7. B2B Specification inquiry form and logistic maps coverage */}
        <Contact lang={lang} preselectedProductType={selectedProductType} />
      </main>

      {/* 10. Footer info, compliance licensing, and links */}
      <Footer lang={lang} />

      {/* Floating Action Elements */}
      <FloatingWhatsApp lang={lang} />

    </div>
  );
}

