import React from 'react';
import { ShieldCheck, CheckCircle, FileText, Settings, Award, Droplet } from 'lucide-react';
import { Language, translations } from '../translations';

interface QualityProps {
  lang: Language;
}

export default function Quality({ lang }: QualityProps) {
  const t = translations[lang];

  // Specific Quality Standards from requirements
  const qualityStandards = lang === 'en' ? [
    {
      title: 'Purified Water Usage',
      desc: 'All ice products are made exclusively with multi-stage Reverse Osmosis purified water, eliminating chemical impurities.',
      icon: Droplet
    },
    {
      title: 'Hygienic Production Practices',
      desc: 'Surgical-grade touch-free mechanical cranes and automated systems guarantee a zero-touch hygienic production loop.',
      icon: ShieldCheck
    },
    {
      title: 'Regular Equipment Maintenance',
      desc: 'Daily compressor diagnostic audits and clean-in-place sanitation cycles for all freezing cells and machinery.',
      icon: Settings
    },
    {
      title: 'Continuous Quality Monitoring',
      desc: 'Microbiological laboratory testing and live TDS tracking verify purity standards before dispatch.',
      icon: Award
    }
  ] : [
    {
      title: 'ಶುದ್ಧೀಕರಿಸಿದ ನೀರಿನ ಬಳಕೆ',
      desc: 'ಐಸ್ ತಯಾರಿಸಲು ಕಟ್ಟುನಿಟ್ಟಾದ ಮಲ್ಟಿ-ಸ್ಟೇಜ್ ರಿವರ್ಸ್ ಆಸ್ಮೋಸಿಸ್ ಮತ್ತು ಶುದ್ಧೀಕರಿಸಿದ ನೀರನ್ನು ಮಾತ್ರ ಬಳಸಲಾಗುತ್ತದೆ.',
      icon: Droplet
    },
    {
      title: 'ನೈರ್ಮಲ್ಯಯುತ ತಯಾರಿಕೆ',
      desc: 'ಮಾನವ ಸ್ಪರ್ಶವಿಲ್ಲದ ಅತ್ಯಾಧುನಿಕ ಸ್ವಯಂಚಾಲಿತ ತಯಾರಿಕಾ ಯಂತ್ರಗಳಿಂದ ಸೂಕ್ಷ್ಮಜೀವಿ ಮುಕ್ತ ನೈರ್ಮಲ್ಯ ಕಾಯ್ದುಕೊಳ್ಳಲಾಗುತ್ತದೆ.',
      icon: ShieldCheck
    },
    {
      title: 'ಯಂತ್ರೋಪಕರಣಗಳ ನಿಯಮಿತ ನಿರ್ವಹಣೆ',
      desc: 'ದಿನನಿತ್ಯದ ಕಂಪ್ರೆಸರ್ ತಪಾಸಣೆ ಮತ್ತು ಶೀತೀಕರಣ ಕೋಣೆಗಳ ಶುದ್ಧೀಕರಣ ಪ್ರಕ್ರಿಯೆಗಳನ್ನು ಕಡ್ಡಾಯವಾಗಿ ನಡೆಸಲಾಗುತ್ತದೆ.',
      icon: Settings
    },
    {
      title: 'ನಿರಂತರ ಗುಣಮಟ್ಟ ಮೇಲ್ವಿಚಾರಣೆ',
      desc: 'ಐಸ್ ಗಟ್ಟಿತನ ಮತ್ತು ಸುರಕ್ಷತೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ನಿರಂತರ ಲ್ಯಾಬ್ ಗುಣಮಟ್ಟ ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಲಾಗುತ್ತದೆ.',
      icon: Award
    }
  ];

  // Specific Licenses/Approvals from guidelines (Do not add others)
  const approvedLicenses = lang === 'en' ? [
    { title: 'ISO Quality Certificate', agency: 'International Standardization Compliance' },
    { title: 'ASSI Operational Approval', agency: 'Food Safety & Standards Authority Standards' },
    { title: 'Pollution Clearance Certificate', agency: 'State Pollution Control Board Approval' },
    { title: 'Gram Panchayat Business License', agency: 'Local Governing Body Certification' },
    { title: 'KEB Industrial Power Clearance', agency: 'Karnataka Electricity Board License' },
    { title: 'Fire Safety Clearance Certificate', agency: 'State Fire & Emergency Services Safety Approval' }
  ] : [
    { title: 'ISO ಗುಣಮಟ್ಟ ಪ್ರಮಾಣಪತ್ರ', agency: 'ಅಂತರರಾಷ್ಟ್ರೀಯ ಪ್ರಮಾಣೀಕರಣ ಅನುಸರಣೆ' },
    { title: 'ASSI ಕಾರ್ಯಾಚರಣಾ ಅನುಮೋದನೆ', agency: 'ಆಹಾರ ಸುರಕ್ಷತೆ ಮತ್ತು ಗುಣಮಟ್ಟದ ಮಾನದಂಡಗಳು' },
    { title: 'ಮಾಲಿನ್ಯ ನಿಯಂತ್ರಣ ಮಂಡಳಿ ಕ್ಲಿಯರೆನ್ಸ್', agency: 'ರಾಜ್ಯ ಮಾಲಿನ್ಯ ನಿಯಂತ್ರಣ ಮಂಡಳಿ ಅನುಮೋದನೆ' },
    { title: 'ಗ್ರಾಮ ಪಂಚಾಯತ್ ವ್ಯಾಪಾರ ಪರವಾನಗಿ', agency: 'ಸ್ಥಳೀಯ ಸಂಸ್ಥೆಯ ಪ್ರಮಾಣೀಕರಣ' },
    { title: 'ಕೆ.ಇ.ಬಿ (KEB) ವಿದ್ಯುತ್ ಅನುಮೋದನೆ', agency: 'ಕರ್ನಾಟಕ ವಿದ್ಯುತ್ ಮಂಡಳಿ ಪರವಾನಗಿ' },
    { title: 'ಅಗ್ನಿಶಾಮಕ ಇಲಾಖೆ ಸುರಕ್ಷತಾ ಪತ್ರ', agency: 'ರಾಜ್ಯ ಅಗ್ನಿಶಾಮಕ ಮತ್ತು ತುರ್ತು ಸೇವೆಗಳ ಅನುಮೋದನೆ' }
  ];

  return (
    <section id="quality" className="py-20 md:py-28 bg-surface-container-low text-on-surface">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Title block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1 w-8 bg-secondary-fixed-dim" />
            <span className="font-mono text-xs font-bold text-secondary uppercase tracking-widest">
              {t.quality.tag}
            </span>
            <span className="h-1 w-8 bg-secondary-fixed-dim" />
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4">
            {t.quality.title}
          </h2>
          <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
            {t.quality.desc}
          </p>
        </div>

        {/* Quality Standards Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {qualityStandards.map((std, idx) => {
            const Icon = std.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-lg border border-outline-variant/50 shadow-2xs hover:shadow-sm transition-all flex gap-5 items-start"
              >
                <div className="w-12 h-12 bg-primary/5 text-primary flex items-center justify-center rounded-lg shrink-0">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-sans text-base font-bold text-primary mb-2">
                    {std.title}
                  </h3>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                    {std.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Licenses & Approvals Matrix (Exactly as provided) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5">
            <div className="border-l-4 border-secondary pl-6 mb-6">
              <span className="font-mono text-2xs font-bold text-secondary uppercase tracking-wider block mb-1">
                {lang === 'en' ? 'Verified Governance' : 'ಅಧಿಕೃತ ಪರವಾನಗಿಗಳು'}
              </span>
              <h3 className="font-sans text-2xl font-bold text-primary tracking-tight">
                {t.quality.licencesHeader}
              </h3>
            </div>
            
            <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
              {t.quality.licencesDesc}
            </p>

            <div className="mt-6 flex items-center gap-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
              <FileText className="h-8 w-8 text-primary shrink-0" />
              <p className="font-sans text-3xs text-on-surface-variant leading-relaxed">
                {lang === 'en' 
                  ? 'All listed compliance indicators are verified by appropriate district offices in Udupi, Karnataka.' 
                  : 'ಪಟ್ಟಿ ಮಾಡಲಾದ ಎಲ್ಲಾ ಪರವಾನಗಿಗಳು ಕರ್ನಾಟಕದ ಉಡುಪಿ ಜಿಲ್ಲಾ ಕಚೇರಿಗಳಿಂದ ಪರಿಶೀಲಿಸಲ್ಪಟ್ಟಿವೆ.'}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {approvedLicenses.map((lic, idx) => (
                <div 
                  key={idx} 
                  className="p-4 bg-white rounded-lg border border-outline-variant/40 hover:border-secondary/30 transition-all flex items-start gap-3 shadow-3xs"
                >
                  <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans text-xs font-bold text-primary leading-tight">
                      {lic.title}
                    </h4>
                    <p className="font-sans text-[10px] text-on-surface-variant mt-1 leading-none">
                      {lic.agency}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
