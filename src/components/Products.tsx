import React from 'react';
import { ArrowRight, CheckCircle2, Waves, Info, ShoppingCart } from 'lucide-react';
import { Language, translations } from '../translations';

interface ProductsProps {
  lang: Language;
  onInquiry: (productId: string) => void;
}

export default function Products({ lang, onInquiry }: ProductsProps) {
  const t = translations[lang];

  // Dynamic translated products data matching the exact company catalogue requirements
  const productsList = [
    {
      id: 'block-ice',
      name: lang === 'en' ? 'Ice Blocks' : 'ಐಸ್ ಬ್ಲಾಕ್ಸ್',
      tag: t.products.block.tag,
      description: t.products.block.desc,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeIlsnmp4b8xlSCqcLbdItBMqoLMuPOwEXCOmCGiBsNCw1mKzankBcd7VFA0aACxH-hJIsmgmmrwMynfXeMJANmvgA6tbquc4S3AYWWYwWO_fsYiRS6K7m3YbPAOeuuZ6IJ890vRihXaLwmy0B---KfYOcn-nnJwMQmohMXyyhkymqAkP1f8FaCh2nMCcJ_LOMVqqse7Mst6lvadSomYRWcSqLoJ2Ctsnx-VzBLWjBdDpSEfTdDojN',
      price: lang === 'en' ? '₹150 per block' : '₹150 ಪ್ರತಿ ಬ್ಲಾಕ್',
      weight: '100 KG',
      moq: lang === 'en' ? '10 Blocks' : '10 ಬ್ಲಾಕ್‌ಗಳು',
      size: '4 ft × 3 ft',
      appTitle: lang === 'en' ? 'Applications' : 'ಉಪಯೋಗಗಳು',
      applications: lang === 'en' ? [
        'Fish Storage',
        'Seafood',
        'Import & Export'
      ] : [
        'ಮೀನು ಶೇಖರಣೆ',
        'ಸಮುದ್ರ ಆಹಾರ',
        'ಆಮದು ಮತ್ತು ರಫ್ತು'
      ],
      buttonText: lang === 'en' ? 'Order Ice Blocks' : 'ಐಸ್ ಬ್ಲಾಕ್ಸ್ ಆರ್ಡರ್ ಮಾಡಿ'
    },
    {
      id: 'crushed-ice',
      name: lang === 'en' ? 'Crushed Ice' : 'ಪುಡಿ ಮಾಡಿದ ಐಸ್ (Crushed)',
      tag: t.products.crushed.tag,
      description: t.products.crushed.desc,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFt0TmdhgJlKsK5o0xQw8JN5qc_pH1tLvR6TQViWr2tIhpmA_yNn5rSmaTFF_1Mk79OOItuBuyTbNLnpDtqqbyRs1bdDIIR4-rS_X2_0E4HketSQlQKm23ZuinKFlukGWF0gj29rmO1c-iBsGw5lVgPm_Pn50avixqMvd38dEA4T9uRLHkzUGyzf-kgUu4udLHinbYkBXGM9wCOf0noNt-67sIhMJLWNAJIbzNxa7dCQZzBCC6ULia',
      price: null,
      weight: null,
      moq: null,
      size: null,
      appTitle: lang === 'en' ? 'Applications' : 'ಉಪಯೋಗಗಳು',
      applications: lang === 'en' ? [
        'Seafood',
        'Fish Markets',
        'Commercial Cooling',
        'Events'
      ] : [
        'ಸಮುದ್ರ ಆಹಾರ',
        'ಮೀನು ಮಾರುಕಟ್ಟೆಗಳು',
        'ವಾಣಿಜ್ಯ ಕೂಲಿಂಗ್',
        'ಕಾರ್ಯಕ್ರಮಗಳು'
      ],
      buttonText: lang === 'en' ? 'Order Crushed Ice' : 'ಪುಡಿ ಐಸ್ ಆರ್ಡರ್ ಮಾಡಿ'
    },
    {
      id: 'ice-cubes',
      name: lang === 'en' ? 'Ice Cubes' : 'ಐಸ್ ಕ್ಯೂಬ್ಸ್ (Cubes)',
      tag: t.products.cubes.tag,
      description: t.products.cubes.desc,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeEREGCdcfkvUXOxH4r1OQqw5IIDJ8VfXgpEKWwMLbphJ8D_ASpsP_cn0JUj7GsfyHz8pHkFg6Xo2kafjdUXGf3EdGutWNzZ3vtwEAc0rbSL_9FPoME6Me9GhhxrnjpgLUdbX57-XZ3jZFtM6UZSAGX8vcK_UgCE-yqSSU9rY5Hrl4oApmRj-RyTk_beapWU0qf0ytvUMZhuT6LyHi9itJGVGPYkDGfiB5RzdL40oEQFrgb25fyqWj',
      price: null,
      weight: null,
      moq: null,
      size: null,
      appTitle: lang === 'en' ? 'Applications' : 'ಉಪಯೋಗಗಳು',
      applications: lang === 'en' ? [
        'Hotels',
        'Restaurants',
        'Juice Shops',
        'Catering',
        'Events'
      ] : [
        'ಹೋಟೆಲ್‌ಗಳು',
        'ರೆಸ್ಟೋರೆಂಟ್‌ಗಳು',
        'ಜ್ಯೂಸ್ ಶಾಪ್‌ಗಳು',
        'ಕ್ಯಾಟರಿಂಗ್',
        'ಕಾರ್ಯಕ್ರಮಗಳು'
      ],
      buttonText: lang === 'en' ? 'Order Ice Cubes' : 'ಐಸ್ ಕ್ಯೂಬ್ಸ್ ಆರ್ಡರ್ ಮಾಡಿ'
    }
  ];

  return (
    <section id="products" className="py-20 md:py-28 bg-white text-on-surface">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1 w-8 bg-secondary-fixed-dim" />
            <span className="font-mono text-xs font-bold text-secondary uppercase tracking-widest">
              {t.products.tag}
            </span>
            <span className="h-1 w-8 bg-secondary-fixed-dim" />
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4">
            {t.products.title}
          </h2>
          <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
            {t.products.desc}
          </p>
        </div>

        {/* Products Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {productsList.map(product => (
            <div 
              key={product.id} 
              className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/60 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Product Image & Tag */}
                <div className="h-64 relative overflow-hidden group">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-3xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded shadow-sm">
                    {product.tag}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-sans text-2xl font-extrabold text-primary mb-2">
                    {product.name}
                  </h3>
                  
                  {/* Dynamic Pricing and Specifications Badges */}
                  {product.price && (
                    <div className="grid grid-cols-3 gap-2 my-4 p-3 bg-surface-container-low rounded-lg border border-outline-variant/30 text-center">
                      <div>
                        <span className="font-mono text-4xs uppercase text-on-surface-variant block">{t.products.price}</span>
                        <p className="font-sans text-[11px] font-bold text-primary mt-0.5">{product.price}</p>
                      </div>
                      <div className="border-x border-outline-variant/30">
                        <span className="font-mono text-4xs uppercase text-on-surface-variant block">{t.products.weight}</span>
                        <p className="font-sans text-[11px] font-bold text-primary mt-0.5">{product.weight}</p>
                      </div>
                      <div>
                        <span className="font-mono text-4xs uppercase text-on-surface-variant block">{t.products.minOrder}</span>
                        <p className="font-sans text-[11px] font-bold text-secondary mt-0.5">{product.moq}</p>
                      </div>
                    </div>
                  )}

                  <p className="font-sans text-2xs text-on-surface-variant leading-relaxed mb-6">
                    {product.description}
                  </p>
                  
                  {/* Applications List */}
                  <div className="space-y-2 border-t border-outline-variant/30 pt-4">
                    <p className="font-mono text-3xs uppercase font-bold text-primary tracking-wider mb-2 flex items-center gap-1">
                      <Info className="h-3 w-3 text-secondary" /> {product.appTitle}
                    </p>
                    {product.applications.map((app, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-on-surface-variant">
                        <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                        <span className="font-sans leading-snug">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Action Button */}
              <div className="p-6 pt-0">
                <button 
                  onClick={() => onInquiry(product.id)}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-white font-mono text-xs font-bold py-3.5 px-4 rounded-lg transition-all active:scale-98 shadow-sm cursor-pointer"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>{product.buttonText}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specifications Table Section */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <Waves className="h-5 w-5 text-secondary" />
            <h3 className="font-sans text-lg font-bold text-primary tracking-tight">
              {t.products.table.title}
            </h3>
          </div>
          
          <div className="overflow-x-auto bg-surface-container-low rounded-lg border border-outline-variant/60">
            <table className="w-full text-left font-sans text-xs border-collapse">
              <thead className="bg-primary text-white font-semibold">
                <tr>
                  <th className="px-6 py-4 rounded-tl-lg">{t.products.table.colProduct}</th>
                  <th className="px-6 py-4">{t.products.table.colForm}</th>
                  <th className="px-6 py-4">{t.products.table.colFilter}</th>
                  <th className="px-6 py-4 rounded-tr-lg">{t.products.table.colPurpose}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/50 text-on-surface-variant font-sans">
                {productsList.map((prod, idx) => (
                  <tr key={idx} className="hover:bg-white transition-colors">
                    <td className="px-6 py-4 font-bold text-primary">{prod.name}</td>
                    <td className="px-6 py-4">{prod.size}</td>
                    <td className="px-6 py-4">{prod.tag}</td>
                    <td className="px-6 py-4 text-xs">
                      {prod.applications[0] || ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-3 flex items-start gap-2 text-3xs font-mono text-on-surface-variant uppercase tracking-wider">
            <span>*</span>
            <p>{t.products.table.note}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
