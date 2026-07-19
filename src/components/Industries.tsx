import React from 'react';
import { Ship, Hotel, Flame, Truck, Building, ShieldAlert, CheckCircle } from 'lucide-react';
import { Language, translations } from '../translations';

interface IndustriesProps {
  lang: Language;
}

export default function Industries({ lang }: IndustriesProps) {
  const t = translations[lang];

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'sailing': return <Ship className="h-6 w-6 text-primary" />;
      case 'local_hotel': return <Hotel className="h-6 w-6 text-primary" />;
      case 'restaurant_menu': return <Flame className="h-6 w-6 text-primary" />;
      case 'local_shipping': return <Truck className="h-6 w-6 text-primary" />;
      case 'architecture': return <Building className="h-6 w-6 text-primary" />;
      default: return <ShieldAlert className="h-6 w-6 text-primary" />;
    }
  };

  // Localized industries data matching the requirements
  const industriesList = lang === 'en' ? [
    {
      id: 'fisheries',
      name: 'Fisheries & Seafood',
      description: 'Providing heavy-volume block and crushed ice directly to commercial maritime fleets, trawlers, and seafood markets to ensure catch freshness from ocean to shore.',
      iconName: 'sailing'
    },
    {
      id: 'hospitality',
      name: 'Hotels & Restaurants',
      description: 'Supplying immaculate, crystal-clear RO ice cubes and flakes to five-star hotels, dining establishments, juice shops, and events.',
      iconName: 'local_hotel'
    },
    {
      id: 'food-processing',
      name: 'Caterers & Food Outlets',
      description: 'Controlled temperature solutions for event caterers, juice bars, and processing plants where absolute food safety is mandatory.',
      iconName: 'restaurant_menu'
    },
    {
      id: 'cold-chain',
      name: 'Cold Chain Logistics',
      description: 'Securing cargo, seafood transit, and perishable items across states with high-density blocks that buffer against temperature spikes.',
      iconName: 'local_shipping'
    },
    {
      id: 'construction',
      name: 'Commercial Cooling',
      description: 'Heavy duty ice supply for massive hydration temperature control in construction, concrete setups, and event chilling.',
      iconName: 'architecture'
    }
  ] : [
    {
      id: 'fisheries',
      name: 'ಮೀನುಗಾರಿಕೆ ಮತ್ತು ಸಮುದ್ರ ಆಹಾರ',
      description: 'ಸಮುದ್ರದಿಂದ ದಡದವರೆಗೆ ಮೀನಿನ ತಾಜಾತನವನ್ನು ಕಾಪಾಡಲು ಬೃಹತ್ ಪ್ರಮಾಣದ ಬ್ಲಾಕ್ ಮತ್ತು ಪುಡಿ ಐಸ್ ಅನ್ನು ಬೋಟ್‌ಗಳು, ಬಂದರುಗಳು ಮತ್ತು ಮಾರುಕಟ್ಟೆಗಳಿಗೆ ಪೂರೈಸಲಾಗುತ್ತದೆ.',
      iconName: 'sailing'
    },
    {
      id: 'hospitality',
      name: 'ಹೋಟೆಲ್‌ಗಳು ಮತ್ತು ರೆಸ್ಟೋರೆಂಟ್‌ಗಳು',
      description: 'ಪ್ರಮುಖ ಹೋಟೆಲ್‌ಗಳು, ರೆಸ್ಟೋರೆಂಟ್‌ಗಳು, ಜ್ಯೂಸ್ ಅಂಗಡಿಗಳು ಮತ್ತು ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ನಿಖರ ಆರ್.ಓ ನಿಂದ ತಯಾರಿಸಿದ ಐಸ್ ಕ್ಯೂಬ್ಸ್ ಸರಬರಾಜು ಮಾಡಲಾಗುತ್ತದೆ.',
      iconName: 'local_hotel'
    },
    {
      id: 'food-processing',
      name: 'ಕ್ಯಾಟರರ್ಸ್ ಮತ್ತು ಆಹಾರ ಮಳಿಗೆಗಳು',
      description: 'ಮದುವೆ, ಸಮಾರಂಭಗಳು, ಜ್ಯೂಸ್ ಪಾರ್ಲರ್‌ಗಳು ಮತ್ತು ಆಹಾರ ತಯಾರಿಕಾ ಸಂಸ್ಥೆಗಳಿಗೆ ಅಗತ್ಯಕ್ಕೆ ತಕ್ಕಂತೆ ನೈರ್ಮಲ್ಯಯುತ ಐಸ್ ಸರಬರಾಜು.',
      iconName: 'restaurant_menu'
    },
    {
      id: 'cold-chain',
      name: 'ಕೋಲ್ಡ್ ಚೈನ್ ಸಾಗಾಟ',
      description: 'ವಿವಿಧ ರಾಜ್ಯಗಳಿಗೆ ಸಮುದ್ರ ಆಹಾರ ಮತ್ತು ಇತರ ಹಾಳಾಗುವ ವಸ್ತುಗಳನ್ನು ಕಳುಹಿಸುವಾಗ ತಾಪಮಾನ ಕಾಯ್ದುಕೊಳ್ಳಲು ಭಾರಿ ತೂಕದ ಐಸ್ ಬ್ಲಾಕ್‌ಗಳ ಪೂರೈಕೆ.',
      iconName: 'local_shipping'
    },
    {
      id: 'construction',
      name: 'ವಾಣಿಜ್ಯ ಮತ್ತು ಕೈಗಾರಿಕಾ ಕೂಲಿಂಗ್',
      description: 'ಕಾಂಕ್ರೀಟ್ ತಯಾರಿಕೆ, ಕೈಗಾರಿಕಾ ಘಟಕಗಳು ಮತ್ತು ದೊಡ್ಡ ಕಾರ್ಯಕ್ರಮಗಳ ತಂಪಾಗಿಸುವ ಅಗತ್ಯಗಳಿಗಾಗಿ ಬೃಹತ್ ಪ್ರಮಾಣದ ಐಸ್ ಪೂರೈಕೆ.',
      iconName: 'architecture'
    }
  ];

  // Specific customer segments listed in corporate guidelines
  const customersServed = lang === 'en' ? [
    'Hotels', 'Restaurants', 'Fish Markets', 'Caterers', 'Event Organizers', 'Juice Shops'
  ] : [
    'ಹೋಟೆಲ್‌ಗಳು', 'ರೆಸ್ಟೋರೆಂಟ್‌ಗಳು', 'ಮೀನು ಮಾರುಕಟ್ಟೆಗಳು', 'ಕ್ಯಾಟರರ್ಸ್', 'ಕಾರ್ಯಕ್ರಮ ಸಂಘಟಕರು', 'ಜ್ಯೂಸ್ ಶಾಪ್‌ಗಳು'
  ];

  return (
    <section id="industries" className="py-20 bg-surface-container text-on-surface">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Title block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="border-l-4 border-secondary pl-6">
            <span className="font-mono text-xs font-bold text-secondary uppercase tracking-wider block mb-2">
              {lang === 'en' ? 'Sectors Supported' : 'ಸೇವೆ ಸಲ್ಲಿಸುವ ಕ್ಷೇತ್ರಗಳು'}
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
              {lang === 'en' ? 'Powering Vital Industries' : 'ಪ್ರಮುಖ ಕ್ಷೇತ್ರಗಳಿಗೆ ಬೆಂಬಲ'}
            </h2>
          </div>
          <p className="font-sans text-sm text-on-surface-variant max-w-lg leading-relaxed">
            {lang === 'en' 
              ? 'From fueling marine seafood processing harbors to supporting local dining outlets, we provide critical cooling capacity where temperature stability is paramount.'
              : 'ಸಮುದ್ರ ಆಹಾರ ಸಂರಕ್ಷಣೆ ಮತ್ತು ಮೀನುಗಾರಿಕಾ ಬಂದರುಗಳಿಂದ ಹಿಡಿದು ಸ್ಥಳೀಯ ಹೋಟೆಲ್, ಕ್ಯಾಟರಿಂಗ್ ಅಗತ್ಯಗಳವರೆಗೆ ನಾವು ಅತ್ಯುತ್ತಮ ತಂಪಾಗಿಸುವ ಪರಿಹಾರಗಳನ್ನು ಒದಗಿಸುತ್ತೇವೆ.'}
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {industriesList.map((ind) => (
            <div 
              key={ind.id} 
              className="bg-white rounded-lg p-6 border border-outline-variant/40 shadow-2xs hover:shadow-sm hover:border-primary/20 transition-all group"
            >
              <div className="inline-flex p-3 rounded bg-surface-container-low text-primary mb-4 group-hover:bg-primary-container/10 group-hover:text-primary transition-colors">
                {getIndustryIcon(ind.iconName)}
              </div>
              
              <h3 className="font-sans text-base font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                {ind.name}
              </h3>
              
              <p className="font-sans text-2xs text-on-surface-variant leading-relaxed">
                {ind.description}
              </p>
            </div>
          ))}
        </div>

        {/* CUSTOMERS SERVED SECTION - HIGHLY HIGHLIGHTED AS REQUIRED */}
        <div className="bg-primary text-white rounded-xl p-8 md:p-10 shadow-lg relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -mr-20 -mt-20 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs font-bold text-secondary-fixed block mb-2 uppercase tracking-widest">
                {lang === 'en' ? 'B2B Client Base' : 'ಗ್ರಾಹಕರು'}
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight">
                {lang === 'en' ? 'Customers We Serve' : 'ನಾವು ಸೇವೆ ಸಲ್ಲಿಸುವ ಗ್ರಾಹಕರು'}
              </h3>
              <p className="font-sans text-xs text-white/80 mt-2 leading-relaxed">
                {lang === 'en' 
                  ? 'Sri Kaveri Ice Plant is proud to supply top-tier companies and localized entrepreneurs with clinical-grade, hygienic cold preservation daily.' 
                  : 'ಶ್ರೀ ಕಾವೇರಿ ಐಸ್ ಪ್ಲಾಂಟ್ ಪ್ರತಿದಿನ ಕರಾವಳಿಯ ನೂರಾರು ಉದ್ಯಮಿಗಳಿಗೆ ನೈರ್ಮಲ್ಯಯುತ ಐಸ್ ಅನ್ನು ಹೆಮ್ಮೆಯಿಂದ ಪೂರೈಸುತ್ತದೆ.'}
              </p>
            </div>
            
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {customersServed.map((customer, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-5 py-4 rounded-lg border border-white/10 hover:bg-white/15 transition-all shadow-sm"
                  >
                    <CheckCircle className="h-5 w-5 text-secondary-fixed shrink-0" />
                    <span className="font-sans text-sm font-bold tracking-tight text-white">
                      {customer}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
