import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Send, AlertCircle, Clock, ShieldCheck, CheckCircle2, MessageSquare, Truck, Calendar, ShoppingBag, CreditCard } from 'lucide-react';
import { MAP_IMAGE_URL, GOOGLE_MAPS_URL } from '../data';
import { Language, translations } from '../translations';

interface ContactProps {
  lang: Language;
  preselectedProductType: string;
}

export default function Contact({ lang, preselectedProductType }: ContactProps) {
  const t = translations[lang];

  // Mode toggle: 'order' or 'enquiry'
  const [activeTab, setActiveTab] = useState<'order' | 'enquiry'>('order');

  // Order Form State
  const [customerName, setCustomerName] = useState('');
  const [orderPhone, setOrderPhone] = useState('');
  const [location, setLocation] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('block-ice');
  const [quantity, setQuantity] = useState<number>(10);
  const [deliveryDate, setDeliveryDate] = useState('');
  const [additionalReqs, setAdditionalReqs] = useState('');

  // Enquiry Form State
  const [enquiryName, setEnquiryName] = useState('');
  const [enquiryPhone, setEnquiryPhone] = useState('');
  const [enquiryLocation, setEnquiryLocation] = useState('');
  const [enquirySubject, setEnquirySubject] = useState('');
  const [enquiryMessage, setEnquiryMessage] = useState('');

  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync pre-selected product type from Products section
  useEffect(() => {
    if (preselectedProductType) {
      setActiveTab('order');
      // Normalize values if needed
      const normalized = preselectedProductType === '100kg-blocks' ? 'block-ice' : preselectedProductType;
      setSelectedProduct(normalized);
      
      // Auto-set reasonable minimum quantity based on product type
      if (normalized === 'block-ice') {
        setQuantity(10);
      } else if (normalized === 'crushed-ice') {
        setQuantity(10);
      } else if (normalized === 'ice-cubes') {
        setQuantity(15);
      }
    }
  }, [preselectedProductType]);

  // Product metadata for calculations
  const productMeta: Record<string, { name: string; price: number | null; unit: string; minQty: number | null }> = {
    'block-ice': { 
      name: lang === 'en' ? '100 KG Ice Blocks' : '100 KG ಐಸ್ ಬ್ಲಾಕ್ಸ್', 
      price: 150, 
      unit: lang === 'en' ? 'Blocks' : 'ಬ್ಲಾಕ್‌ಗಳು', 
      minQty: 10 
    },
    'crushed-ice': { 
      name: lang === 'en' ? 'Crushed Ice' : 'ಪುಡಿ ಮಾಡಿದ ಐಸ್ (Crushed)', 
      price: null, 
      unit: lang === 'en' ? 'Bags' : 'ಬ್ಯಾಗ್‌ಗಳು', 
      minQty: null
    },
    'ice-cubes': { 
      name: lang === 'en' ? 'Ice Cubes' : 'ಐಸ್ ಕ್ಯೂಬ್ಸ್ (Cubes)', 
      price: null, 
      unit: lang === 'en' ? 'Bags' : 'ಬ್ಯಾಗ್‌ಗಳು', 
      minQty: null
    },
  };

  // Sync minimum quantities when product selection changes
  useEffect(() => {
    if (productMeta[selectedProduct]) {
      const min = productMeta[selectedProduct].minQty;
      if (min !== null && quantity < min) {
        setQuantity(min);
      }
    }
  }, [selectedProduct]);

  // Handle direct WhatsApp launch for contact action buttons
  const launchGeneralWhatsApp = () => {
    const text = encodeURIComponent(
      lang === 'en' 
        ? 'Hello Sri Kaveri Ice Plant, I would like to make an inquiry about ordering ice products.'
        : 'ನಮಸ್ಕಾರ ಶ್ರೀ ಕಾವೇರಿ ಐಸ್ ಪ್ಲಾಂಟ್, ನಾನು ಐಸ್ ಉತ್ಪನ್ನಗಳ ಆರ್ಡರ್ ಅಥವಾ ವಿತರಣೆಯ ಬಗ್ಗೆ ವಿಚಾರಿಸಲು ಬಯಸುತ್ತೇನೆ.'
    );
    window.open(`https://wa.me/919164532669?text=${text}`, '_blank');
  };

  // Calculate order total
  const selectedProductInfo = productMeta[selectedProduct] || { price: null, unit: 'Units', minQty: null, name: '' };
  const orderTotal = selectedProductInfo.price !== null ? quantity * selectedProductInfo.price : null;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!customerName || !orderPhone || !location || !selectedProduct || !quantity || !deliveryDate) {
      setErrorMsg(t.form.validationAll);
      return;
    }

    const minQty = selectedProductInfo.minQty || 1;
    if (quantity < minQty) {
      setErrorMsg(
        lang === 'en' 
          ? `Minimum order quantity for ${selectedProductInfo.name} is ${minQty} ${selectedProductInfo.unit}.`
          : `${selectedProductInfo.name} ಗಾಗಿ ಕನಿಷ್ಠ ಆರ್ಡರ್ ಪ್ರಮಾಣ ${minQty} ${selectedProductInfo.unit} ಆಗಿದೆ.`
      );
      return;
    }

    setIsSubmitting(true);

    // Prepare WhatsApp message
    const formattedMessage = `*SRI KAVERI ICE PLANT - NEW ORDER*
----------------------------------
*Customer Name:* ${customerName}
*Phone Number:* ${orderPhone}
*Delivery Location:* ${location}
*Product:* ${selectedProductInfo.name}
*Quantity:* ${quantity} ${selectedProductInfo.unit}
*Delivery Date:* ${deliveryDate}
*Additional Requirements:* ${additionalReqs || 'None'}
----------------------------------
*Estimated Value:* ${orderTotal !== null ? `₹${orderTotal}` : 'Price on Request'}

_Order requested via Website. Please confirm delivery._`;

    const whatsappUrl = `https://wa.me/919164532669?text=${encodeURIComponent(formattedMessage)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Auto open WhatsApp window to submit order
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  const handleSubmitEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!enquiryName || !enquiryPhone || !enquiryLocation || !enquiryMessage) {
      setErrorMsg(t.form.validationAll);
      return;
    }

    setIsSubmitting(true);

    // Prepare WhatsApp message for Enquiry
    const formattedMessage = `*SRI KAVERI ICE PLANT - BUSINESS ENQUIRY*
----------------------------------
*Name:* ${enquiryName}
*Phone:* ${enquiryPhone}
*Location:* ${enquiryLocation}
*Subject:* ${enquirySubject || 'General Ice Supply Consultation'}
*Message:* ${enquiryMessage}

_Enquiry requested via Website._`;

    const whatsappUrl = `https://wa.me/919164532669?text=${encodeURIComponent(formattedMessage)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface-container-low text-on-surface animate-fade-in">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Section Header */}
        <div className="border-l-4 border-secondary pl-6 mb-12">
          <span className="font-mono text-xs font-bold text-secondary uppercase tracking-wider block mb-2">
            {lang === 'en' ? 'Instant Ordering & Support' : 'ತತ್ಕ್ಷಣ ಆರ್ಡರ್ ಮತ್ತು ಬೆಂಬಲ'}
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            {lang === 'en' ? 'Order Ice & Request Delivery' : 'ಐಸ್ ಆರ್ಡರ್ ಮಾಡಿ ಮತ್ತು ವಿತರಣೆಗೆ ವಿನಂತಿಸಿ'}
          </h2>
          <p className="font-sans text-sm text-on-surface-variant max-w-2xl mt-2 leading-relaxed">
            {lang === 'en'
              ? 'Place orders directly with Sri Kaveri Ice Plant. Customize your quantity, select delivery dates, and dispatch instantly via WhatsApp to owner Ashoka\'s coordinate desk.'
              : 'ಶ್ರೀ ಕಾವೇರಿ ಐಸ್ ಪ್ಲಾಂಟ್‌ಗೆ ನೇರವಾಗಿ ಆರ್ಡರ್ ಸಲ್ಲಿಸಿ. ಪ್ರಮಾಣವನ್ನು ನಮೂದಿಸಿ, ದಿನಾಂಕ ಆಯ್ಕೆಮಾಡಿ ಮತ್ತು ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಮಾಲೀಕರಾದ ಅಶೋಕ ಅವರಿಗೆ ತಕ್ಷಣವೇ ಕಳುಹಿಸಿ.'}
          </p>
        </div>

        {/* 4. Contact Action Buttons Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {/* Action 1: Call Now */}
          <a 
            href="tel:+919164532669"
            className="flex items-center justify-center gap-3 bg-white hover:bg-surface-container-low text-primary border border-outline-variant rounded-xl p-5 shadow-3xs transition-all duration-300 hover:scale-101 cursor-pointer text-center"
          >
            <div className="bg-primary/5 text-primary p-2.5 rounded-full">
              <Phone className="h-5 w-5" />
            </div>
            <div className="text-left">
              <span className="font-mono text-4xs uppercase tracking-wider text-on-surface-variant block">
                {lang === 'en' ? 'Urgent Fulfillment' : 'ತುರ್ತು ಪೂರೈಕೆ'}
              </span>
              <span className="font-sans text-sm font-extrabold text-primary">
                {lang === 'en' ? 'Call Now:' : 'ಕರೆ ಮಾಡಿ:'} +91 91645 32669
              </span>
            </div>
          </a>

          {/* Action 2: WhatsApp Order */}
          <button 
            onClick={launchGeneralWhatsApp}
            className="flex items-center justify-center gap-3 bg-white hover:bg-surface-container-low text-primary border border-outline-variant rounded-xl p-5 shadow-3xs transition-all duration-300 hover:scale-101 cursor-pointer text-center"
          >
            <div className="bg-green-500/10 text-green-600 p-2.5 rounded-full">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div className="text-left">
              <span className="font-mono text-4xs uppercase tracking-wider text-on-surface-variant block">
                {lang === 'en' ? 'WhatsApp Order' : 'ವಾಟ್ಸಾಪ್ ಆರ್ಡರ್'}
              </span>
              <span className="font-sans text-sm font-extrabold text-green-600">
                {lang === 'en' ? 'Order via WhatsApp' : 'ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಆರ್ಡರ್'}
              </span>
            </div>
          </button>

          {/* Action 3: Request Delivery */}
          <button 
            onClick={() => {
              setActiveTab('order');
              const target = document.querySelector('#order-form-container');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
            className="flex items-center justify-center gap-3 bg-primary hover:bg-primary-container text-white rounded-xl p-5 shadow-3xs transition-all duration-300 hover:scale-101 cursor-pointer text-center"
          >
            <div className="bg-white/10 text-white p-2.5 rounded-full">
              <Truck className="h-5 w-5" />
            </div>
            <div className="text-left">
              <span className="font-mono text-4xs uppercase tracking-wider text-white/70 block">
                {lang === 'en' ? 'Fast Delivery' : 'ವೇಗದ ವಿತರಣೆ'}
              </span>
              <span className="font-sans text-sm font-extrabold">
                {lang === 'en' ? 'Request Delivery Now' : 'ವಿತರಣೆಗೆ ವಿನಂತಿಸಿ'}
              </span>
            </div>
          </button>
        </div>

        {/* Main Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="order-form-container">
          
          {/* Left Panel: Coverage map, dispatch terms, operational hours */}
          <aside className="lg:col-span-4 order-2 lg:order-1 space-y-6">
            
            {/* Delivery Terms Summary */}
            <div className="bg-white rounded-lg p-6 border border-outline-variant/50 shadow-3xs">
              <h3 className="font-sans text-base font-bold text-primary mb-4 flex items-center gap-2">
                <Truck className="h-5 w-5 text-secondary" />
                {lang === 'en' ? 'Delivery Information' : 'ವಿತರಣಾ ಮಾಹಿತಿ'}
              </h3>
              
              <ul className="space-y-4 font-sans text-xs text-on-surface-variant">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                  <span>
                    {lang === 'en' 
                      ? 'Same-Day Dispatch: Place orders early for prompt cold-chain logistics deployment.'
                      : 'ಅದೇ ದಿನ ವಿತರಣೆ: ತ್ವರಿತ ಸಾಗಾಟಕ್ಕಾಗಿ ಮುಂಚಿತವಾಗಿ ನಿಮ್ಮ ಆರ್ಡರ್ ಸಲ್ಲಿಸಿ.'}
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                  <span>
                    {lang === 'en' 
                      ? 'Temperature Controlled: Dispatched in sub-zero thermal preservation trucks to prevent melting.'
                      : 'ತಾಪಮಾನ ನಿಯಂತ್ರಣ: ಐಸ್ ಕರಗದಂತೆ ತಡೆಯಲು ಇನ್ಸುಲೇಟೆಡ್ ವಾಹನಗಳಲ್ಲಿ ಸಾಗಾಟ ಮಾಡಲಾಗುತ್ತದೆ.'}
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                  <span>
                    {lang === 'en' 
                      ? 'Flexible Scheduling: Daily, weekly, or custom scheduled delivery slots available.'
                      : 'ಫ್ಲೆಕ್ಸಿಬಲ್ ಶೆಡ್ಯೂಲಿಂಗ್: ಸಾಪ್ತಾಹಿಕ ಅಥವಾ ದೈನಂದಿನ ಒಪ್ಪಂದಗಳ ಆಧಾರದಲ್ಲಿ ನಿಯಮಿತ ಸರಬರಾಜು.'}
                  </span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-outline-variant/40 flex items-center gap-4 text-2xs text-on-surface-variant">
                <Clock className="h-5 w-5 text-secondary shrink-0" />
                <div>
                  <span className="font-mono text-4xs uppercase tracking-wider block">
                    {lang === 'en' ? 'Production Hours' : 'ಕಾರ್ಯಾಚರಣೆಯ ಸಮಯ'}
                  </span>
                  <p className="font-bold text-primary">{t.contactInfo.hoursDesc}</p>
                  <p className="text-3xs text-on-surface-variant mt-0.5">
                    {lang === 'en' ? 'Plant operates 24/7 x 365 days' : 'ಕಾರ್ಖಾನೆಯು ವರ್ಷದ ೩೬೫ ದಿನವೂ ೨೪ ಗಂಟೆಯೂ ತೆರೆದಿರುತ್ತದೆ'}
                  </p>
                </div>
              </div>
            </div>

            {/* Corporate Payment Methods Box */}
            <div className="bg-white rounded-lg p-6 border border-outline-variant/50 shadow-3xs">
              <h3 className="font-sans text-base font-bold text-primary mb-4 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-secondary" />
                {t.payment.title}
              </h3>
              <p className="font-sans text-2xs text-on-surface-variant mb-4 leading-relaxed">
                {t.payment.invoice}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {t.payment.methods.map((method, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-surface-container-low p-2 rounded border border-outline-variant/30 text-3xs font-sans font-bold text-primary">
                    <CheckCircle2 className="h-3.5 w-3.5 text-secondary shrink-0" />
                    <span>{method}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Logistics Map Display - links out to the real factory location on Google Maps */}
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-xl bg-primary text-white border border-outline-variant/30 shadow-3xs group block cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent z-10" />
              <img 
                src={MAP_IMAGE_URL} 
                alt="Sri Kaveri Logistic Coverage Map" 
                className="w-full h-56 object-cover object-center filter saturate-[0.8] brightness-90 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 z-20 text-white font-sans">
                <span className="flex items-center gap-1 bg-white/15 backdrop-blur-xs px-2.5 py-1 rounded text-4xs font-mono font-bold uppercase tracking-widest border border-white/5 w-fit mb-1.5">
                  <MapPin className="h-3 w-3 text-secondary-container" /> {lang === 'en' ? 'Distribution Zone' : 'ವಿತರಣಾ ವಲಯ'}
                </span>
                <h4 className="font-bold text-sm">{lang === 'en' ? 'NH-66 Logistics Hub' : 'ರಾಷ್ಟ್ರೀಯ ಹೆದ್ದಾರಿ 66 ಕಾರಿಡಾರ್'}</h4>
                <p className="text-3xs text-white/80 leading-snug">
                  {lang === 'en' 
                    ? 'Reliable refrigerated transit logistics across coastal Karnataka, Kundapura, Udupi, and neighboring hubs.'
                    : 'ಕುಂದಾಪುರ, ಉಡುಪಿ, ಭಟ್ಕಳ, ಕಾರವಾರ ಮತ್ತು ಸಮೀಪದ ಬಂದರುಗಳಿಗೆ ನೇರ ವಿತರಣೆ.'}
                </p>
              </div>
              <span className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-white/95 text-primary px-3 py-1.5 rounded-full text-4xs font-mono font-bold uppercase tracking-wider shadow-sm">
                {lang === 'en' ? 'Open in Maps' : 'ನಕ್ಷೆಯಲ್ಲಿ ತೆರೆಯಿರಿ'}
              </span>
            </a>

          </aside>

          {/* Right Panel: B2B Order & Inquiry Desk */}
          <div className="lg:col-span-8 order-1 lg:order-2 bg-white rounded-xl p-6 sm:p-8 border border-outline-variant/50 shadow-3xs flex flex-col justify-center">
            
            {/* Form Toggle Tabs */}
            <div className="flex border-b border-outline-variant/40 mb-6 pb-1">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('order');
                  setIsSubmitted(false);
                  setErrorMsg('');
                }}
                className={`pb-3 font-mono text-xs font-bold uppercase tracking-wider border-b-2 px-4 transition-all cursor-pointer ${
                  activeTab === 'order' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-on-surface-variant hover:text-primary'
                }`}
              >
                {t.form.orderTab}
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('enquiry');
                  setIsSubmitted(false);
                  setErrorMsg('');
                }}
                className={`pb-3 font-mono text-xs font-bold uppercase tracking-wider border-b-2 px-4 transition-all cursor-pointer ${
                  activeTab === 'enquiry' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-on-surface-variant hover:text-primary'
                }`}
              >
                {t.form.enquiryTab}
              </button>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12 px-4 flex flex-col items-center justify-center animate-fade-in">
                <div className="w-16 h-16 bg-green-50 text-green-600 flex items-center justify-center rounded-full mb-6 border border-green-200">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-sans text-2xl font-extrabold text-primary mb-3">
                  {activeTab === 'order' ? t.form.successOrder : t.form.successEnquiry}
                </h3>
                <p className="font-sans text-sm text-on-surface-variant max-w-md leading-relaxed mb-6">
                  {activeTab === 'order' ? t.form.successOrderDesc : t.form.successEnquiryDesc}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <button
                    onClick={() => {
                      if (activeTab === 'order') {
                        const formattedMessage = `*SRI KAVERI ICE PLANT - NEW ORDER*
----------------------------------
*Customer Name:* ${customerName}
*Phone Number:* ${orderPhone}
*Delivery Location:* ${location}
*Product:* ${selectedProductInfo.name}
*Quantity:* ${quantity} ${selectedProductInfo.unit}
*Delivery Date:* ${deliveryDate}
*Additional Requirements:* ${additionalReqs || 'None'}
----------------------------------
*Estimated Value:* ₹${orderTotal}

_Order requested via Website. Please confirm delivery._`;
                        window.open(`https://wa.me/919164532669?text=${encodeURIComponent(formattedMessage)}`, '_blank');
                      } else {
                        const formattedMessage = `*SRI KAVERI ICE PLANT - BUSINESS ENQUIRY*
----------------------------------
*Name:* ${enquiryName}
*Phone:* ${enquiryPhone}
*Location:* ${enquiryLocation}
*Subject:* ${enquirySubject || 'General Ice Supply Consultation'}
*Message:* ${enquiryMessage}

_Enquiry requested via Website._`;
                        window.open(`https://wa.me/919164532669?text=${encodeURIComponent(formattedMessage)}`, '_blank');
                      }
                    }}
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-mono text-xs font-bold px-6 py-3 rounded-lg shadow-sm cursor-pointer"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>{t.form.sendBtn}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      if (activeTab === 'order') {
                        setCustomerName('');
                        setOrderPhone('');
                        setLocation('');
                        setAdditionalReqs('');
                      } else {
                        setEnquiryName('');
                        setEnquiryPhone('');
                        setEnquiryLocation('');
                        setEnquirySubject('');
                        setEnquiryMessage('');
                      }
                    }}
                    className="flex items-center justify-center gap-2 border border-outline-variant text-primary hover:bg-surface-container-low font-mono text-xs font-bold px-6 py-3 rounded-lg cursor-pointer"
                  >
                    <span>{t.form.resetBtn}</span>
                  </button>
                </div>
              </div>
            ) : (
              <>
                {activeTab === 'order' ? (
                  /* ================== ORDER FORM ================== */
                  <form onSubmit={handleSubmitOrder} className="space-y-6">
                    <div>
                      <h4 className="font-sans text-lg font-bold text-primary mb-1">
                        {lang === 'en' ? 'Direct Ice Ordering Portal' : 'ನೇರ ಐಸ್ ಆರ್ಡರ್ ಪೋರ್ಟಲ್'}
                      </h4>
                      <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                        {lang === 'en'
                          ? 'Fill out the details below to structure your delivery order. Submitting formats your invoice specs and dispatches them straight to owner Ashoka\'s coordinate desk.'
                          : 'ನಿಮ್ಮ ಐಸ್ ವಿತರಣೆಯ ಆರ್ಡರ್ ಸಲ್ಲಿಸಲು ಕೆಳಗಿನ ಫಾರ್ಮ್ ಭರ್ತಿ ಮಾಡಿ. ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ವಾಟ್ಸಾಪ್ ಸಂದೇಶವಾಗಿ ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತದೆ.'}
                      </p>
                    </div>

                    {errorMsg && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 text-xs text-red-800">
                        <AlertCircle className="h-5 w-5 shrink-0 text-red-600 mt-0.5" />
                        <div>
                          <h4 className="font-bold">{t.form.validationTitle}</h4>
                          <p className="text-red-700 mt-0.5">{errorMsg}</p>
                        </div>
                      </div>
                    )}

                    {/* Customer Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label htmlFor="custName" className="font-mono text-3xs font-bold uppercase tracking-wider text-on-surface-variant block">
                          {t.form.fields.custName}
                        </label>
                        <input
                          type="text"
                          id="custName"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          placeholder={t.form.fields.placeholders.name}
                          className="w-full h-11 px-4 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/25 font-sans text-xs"
                          required
                        />
                      </div>
                      
                      <div className="space-y-1.5">
                        <label htmlFor="orderPhone" className="font-mono text-3xs font-bold uppercase tracking-wider text-on-surface-variant block">
                          {t.form.fields.custPhone}
                        </label>
                        <input
                          type="tel"
                          id="orderPhone"
                          value={orderPhone}
                          onChange={(e) => setOrderPhone(e.target.value)}
                          placeholder={t.form.fields.placeholders.phone}
                          className="w-full h-11 px-4 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/25 font-sans text-xs"
                          required
                        />
                      </div>
                    </div>

                    {/* Delivery Location */}
                    <div className="space-y-1.5">
                      <label htmlFor="deliveryLocation" className="font-mono text-3xs font-bold uppercase tracking-wider text-on-surface-variant block">
                        {t.form.fields.location}
                      </label>
                      <input
                        type="text"
                        id="deliveryLocation"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder={t.form.fields.placeholders.location}
                        className="w-full h-11 px-4 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/25 font-sans text-xs"
                        required
                      />
                    </div>

                    {/* Product & Quantity */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label htmlFor="productSelection" className="font-mono text-3xs font-bold uppercase tracking-wider text-on-surface-variant block">
                          {t.form.fields.product}
                        </label>
                        <select
                          id="productSelection"
                          value={selectedProduct}
                          onChange={(e) => setSelectedProduct(e.target.value)}
                          className="w-full h-11 px-4 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/25 font-sans text-xs appearance-none"
                          required
                        >
                          <option value="block-ice">
                            {lang === 'en' ? '100 KG Ice Blocks (₹150 / Block)' : '100 KG ಐಸ್ ಬ್ಲಾಕ್ಸ್ (₹150 / ಬ್ಲಾಕ್)'}
                          </option>
                          <option value="crushed-ice">
                            {lang === 'en' ? 'Crushed Ice (Price on Request)' : 'ಪುಡಿ ಐಸ್ (ದರ ವಿನಂತಿಯ ಮೇರೆಗೆ)'}
                          </option>
                          <option value="ice-cubes">
                            {lang === 'en' ? 'Ice Cubes (Price on Request)' : 'ಐಸ್ ಕ್ಯೂಬ್ಸ್ (ದರ ವಿನಂತಿಯ ಮೇರೆಗೆ)'}
                          </option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="quantity" className="font-mono text-3xs font-bold uppercase tracking-wider text-on-surface-variant block">
                          {t.form.fields.qty} ({selectedProductInfo.unit}) *
                        </label>
                        <input
                          type="number"
                          id="quantity"
                          min={selectedProductInfo.minQty || 1}
                          value={quantity}
                          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 0))}
                          className="w-full h-11 px-4 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/25 font-sans text-xs"
                          required
                        />
                      </div>
                    </div>

                    {/* Delivery Date & Live Calculator */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label htmlFor="deliveryDate" className="font-mono text-3xs font-bold uppercase tracking-wider text-on-surface-variant block flex items-center gap-1">
                          <Calendar className="h-3 w-3 text-secondary" /> {t.form.fields.date}
                        </label>
                        <input
                          type="date"
                          id="deliveryDate"
                          value={deliveryDate}
                          onChange={(e) => setDeliveryDate(e.target.value)}
                          className="w-full h-11 px-4 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/25 font-sans text-xs"
                          required
                        />
                      </div>

                      {/* Live Calculator Widget */}
                      <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant/40 flex flex-col justify-between">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-on-surface-variant font-mono text-3xs uppercase">{t.form.calculator.priceUnit}</span>
                          <span className="font-bold text-primary">
                            {selectedProductInfo.price !== null ? `₹${selectedProductInfo.price}` : (lang === 'en' ? 'On Request' : 'ದರ ವಿನಂತಿ')}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-xs mt-1">
                          <span className="text-on-surface-variant font-mono text-3xs uppercase">{t.form.calculator.minQty}</span>
                          <span className="font-semibold text-secondary">
                            {selectedProductInfo.minQty !== null ? `${selectedProductInfo.minQty} ${selectedProductInfo.unit}` : (lang === 'en' ? 'Flexible' : 'ಸಡಿಲವಾದ')}
                          </span>
                        </div>
                        <div className="border-t border-outline-variant/30 mt-2 pt-2 flex justify-between items-center">
                          <span className="font-mono text-3xs uppercase font-bold text-primary">{t.form.calculator.total}</span>
                          <span className="text-lg font-extrabold text-primary">
                            {orderTotal !== null ? `₹${orderTotal}` : (lang === 'en' ? 'Price on Request' : 'ದರ ವಿನಂತಿಯ ಮೇರೆಗೆ')}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Additional Requirements */}
                    <div className="space-y-1.5">
                      <label htmlFor="additionalReqs" className="font-mono text-3xs font-bold uppercase tracking-wider text-on-surface-variant block">
                        {t.form.fields.additional}
                      </label>
                      <textarea
                        id="additionalReqs"
                        rows={3}
                        value={additionalReqs}
                        onChange={(e) => setAdditionalReqs(e.target.value)}
                        placeholder={t.form.fields.placeholders.additional}
                        className="w-full p-4 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/25 font-sans text-xs"
                      />
                    </div>

                    {/* Submit Order Action */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-fit flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-mono text-xs font-bold px-8 h-12 rounded-lg transition-all active:scale-98 shadow-sm cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        <ShoppingBag className="h-4 w-4" />
                        <span>{isSubmitting ? (lang === 'en' ? 'Formatting Order...' : 'ವಿವರಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತಿದೆ...') : t.form.orderBtn}</span>
                      </button>
                      
                      <p className="mt-4 flex items-center gap-2 text-4xs font-mono text-on-surface-variant uppercase tracking-wider">
                        <ShieldCheck className="h-4 w-4 text-green-600 shrink-0" />
                        <span>* {lang === 'en' ? 'Pre-formatted direct booking. Your data is prepared instantly in WhatsApp without local storage tracking.' : 'ನೇರ ಬುಕಿಂಗ್ ಸಂದೇಶ. ಸ್ಥಳೀಯ ಶೇಖರಣೆ ಇಲ್ಲದೆ ನಿಮ್ಮ ಆರ್ಡರ್ ವಿವರಗಳು ವಾಟ್ಸಾಪ್ ಸಂದೇಶವಾಗಿ ಸಿದ್ಧಗೊಳ್ಳುತ್ತವೆ.'}</span>
                      </p>
                    </div>

                  </form>
                ) : (
                  /* ================== GENERAL ENQUIRY ================== */
                  <form onSubmit={handleSubmitEnquiry} className="space-y-6">
                    <div>
                      <h4 className="font-sans text-lg font-bold text-primary mb-1">
                        {lang === 'en' ? 'Corporate Consultation Desk' : 'ಕಾರ್ಪೊರೇಟ್ ಸಂಪರ್ಕ ಕೇಂದ್ರ'}
                      </h4>
                      <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                        {lang === 'en'
                          ? 'For long-term commercial supply agreements, custom ice block engineering, industrial plant integrations, or logistics audits.'
                          : 'ದೀರ್ಘಕಾಲದ ಪೂರೈಕೆ ಒಪ್ಪಂದಗಳು, ಕಾರ್ಖಾನೆ ಭೇಟಿಗಳು, ಬೃಹತ್ ವಿತರಣಾ ಕರಾರುಗಳು ಅಥವಾ ಬೆಲೆ ವಿನಂತಿಗಳಿಗಾಗಿ ಇಲ್ಲಿ ಸಂಪರ್ಕಿಸಿ.'}
                      </p>
                    </div>

                    {errorMsg && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 text-xs text-red-800">
                        <AlertCircle className="h-5 w-5 shrink-0 text-red-600 mt-0.5" />
                        <div>
                          <h4 className="font-bold">{t.form.validationTitle}</h4>
                          <p className="text-red-700 mt-0.5">{errorMsg}</p>
                        </div>
                      </div>
                    )}

                    {/* Representative Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label htmlFor="enqName" className="font-mono text-3xs font-bold uppercase tracking-wider text-on-surface-variant block">
                          {lang === 'en' ? 'Representative Full Name *' : 'ಪ್ರತಿನಿಧಿಯ ಪೂರ್ಣ ಹೆಸರು *'}
                        </label>
                        <input
                          type="text"
                          id="enqName"
                          value={enquiryName}
                          onChange={(e) => setEnquiryName(e.target.value)}
                          placeholder={lang === 'en' ? 'e.g. Anand Sherigar' : 'ಉದಾ: ಆನಂದ ಶೇರಿಗಾರ್'}
                          className="w-full h-11 px-4 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/25 font-sans text-xs"
                          required
                        />
                      </div>
                      
                      <div className="space-y-1.5">
                        <label htmlFor="enqPhone" className="font-mono text-3xs font-bold uppercase tracking-wider text-on-surface-variant block">
                          {lang === 'en' ? 'Contact Phone Number *' : 'ಸಂಪರ್ಕ ಫೋನ್ ಸಂಖ್ಯೆ *'}
                        </label>
                        <input
                          type="tel"
                          id="enqPhone"
                          value={enquiryPhone}
                          onChange={(e) => setEnquiryPhone(e.target.value)}
                          placeholder={lang === 'en' ? 'e.g. +91 98450 12345' : 'ಉದಾ: +91 98450 12345'}
                          className="w-full h-11 px-4 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/25 font-sans text-xs"
                          required
                        />
                      </div>
                    </div>

                    {/* Location & Subject */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label htmlFor="enqLocation" className="font-mono text-3xs font-bold uppercase tracking-wider text-on-surface-variant block">
                          {lang === 'en' ? 'Operational Hub Location / State *' : 'ಕಾರ್ಯಾಚರಣೆಯ ಸ್ಥಳ / ರಾಜ್ಯ *'}
                        </label>
                        <input
                          type="text"
                          id="enqLocation"
                          value={enquiryLocation}
                          onChange={(e) => setEnquiryLocation(e.target.value)}
                          placeholder={lang === 'en' ? 'e.g. Mangalore, Karnataka' : 'ಉದಾ: ಮಂಗಳೂರು, ಕರ್ನಾಟಕ'}
                          className="w-full h-11 px-4 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/25 font-sans text-xs"
                          required
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="enqSubject" className="font-mono text-3xs font-bold uppercase tracking-wider text-on-surface-variant block">
                          {lang === 'en' ? 'Subject / Procurement Objective' : 'ವಿಷಯ / ಪೂರೈಕೆಯ ಉದ್ದೇಶ'}
                        </label>
                        <input
                          type="text"
                          id="enqSubject"
                          value={enquirySubject}
                          onChange={(e) => setEnquirySubject(e.target.value)}
                          placeholder={lang === 'en' ? 'e.g. Annual Fisheries Supply Contract' : 'ಉದಾ: ವಾರ್ಷಿಕ ಮೀನುಗಾರಿಕಾ ಪೂರೈಕೆ ಕರಾರು'}
                          className="w-full h-11 px-4 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/25 font-sans text-xs"
                        />
                      </div>
                    </div>

                    {/* Requirements / Messages */}
                    <div className="space-y-1.5">
                      <label htmlFor="enqMessage" className="font-mono text-3xs font-bold uppercase tracking-wider text-on-surface-variant block">
                        {lang === 'en' ? 'Detailed Corporate Specifications *' : 'ವಿವರವಾದ ವಿನಂತಿ / ಸಂದೇಶ *'}
                      </label>
                      <textarea
                        id="enqMessage"
                        rows={5}
                        value={enquiryMessage}
                        onChange={(e) => setEnquiryMessage(e.target.value)}
                        placeholder={
                          lang === 'en' 
                            ? 'Detail your industrial cold storage demands, volume commitments, logistic routing queries, or request a complete price proposal sheet...'
                            : 'ನಿಮ್ಮ ಉದ್ಯಮದ ಅಗತ್ಯವಿರುವ ಪ್ರಮಾಣ, ದೈನಂದಿನ ಸರಬರಾಜಿನ ವಿವರಗಳು ಮತ್ತು ಸಾಗಾಟ ಸಂಬಂಧಿತ ಪ್ರಶ್ನೆಗಳನ್ನು ಇಲ್ಲಿ ವಿವರಿಸಿ...'
                        }
                        className="w-full p-4 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/25 font-sans text-xs"
                        required
                      />
                    </div>

                    {/* Submit Enquiry Action */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-fit flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-white font-mono text-xs font-bold px-8 h-12 rounded-lg transition-all active:scale-98 shadow-sm cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        <Send className="h-4 w-4" />
                        <span>{isSubmitting ? (lang === 'en' ? 'Formatting Enquiry...' : 'ವಿಚಾರಣೆ ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತಿದೆ...') : t.form.enquiryBtn}</span>
                      </button>
                      
                      <p className="mt-4 flex items-center gap-2 text-4xs font-mono text-on-surface-variant uppercase tracking-wider">
                        <ShieldCheck className="h-4 w-4 text-secondary shrink-0" />
                        <span>* {lang === 'en' ? 'Premium corporate consultation. Direct dispatch straight to our support coordinators.' : 'ಅಧಿಕೃತ ಕಾರ್ಪೊರೇಟ್ ವಿಚಾರಣೆ. ನೇರವಾಗಿ ನಮ್ಮ ವಾಟ್ಸಾಪ್ ಸಂಪರ್ಕ ಕೇಂದ್ರಕ್ಕೆ ಕಳುಹಿಸಲಾಗುತ್ತದೆ.'}</span>
                      </p>
                    </div>

                  </form>
                )}
              </>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
