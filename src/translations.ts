export type Language = 'en' | 'kn';

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      products: "Products",
      order: "Order Ice",
      industries: "Industries Served",
      process: "Manufacturing Process",
      quality: "Quality Standards",
      gallery: "Gallery",
      contact: "Contact",
      enquiry: "Business Enquiry"
    },
    topBanner: {
      hub: "Karnataka Industrial Hub",
      support: "Support: +91 91645 32669",
      tagline: "Supreme Purity B2B Commercial Ice"
    },
    hero: {
      title: "Premium Ice Blocks, Crushed Ice & Ice Cubes",
      sub: "Trusted commercial ice supplier serving Karnataka, Goa, Maharashtra and Kerala",
      desc: "Hygienic production, reliable delivery, and premium quality ice for fisheries, hotels, restaurants, seafood businesses, catering, and industrial applications.",
      orderBtn: "Order Ice Now",
      whatsappBtn: "WhatsApp Order Desk",
      assurance1: "800 Blocks Daily Capacity",
      assurance2: "24/7 Supply Dispatch",
      assurance3: "Hygienic Purified Water"
    },
    about: {
      tag: "Direct From Factory",
      title: "Sri Kaveri Ice Plant",
      intro: "Sri Kaveri Ice Plant is a premier ice manufacturing and supply company based in Trasi, Kundapura. We provide quality ice solutions for fisheries, seafood storage, hotels, restaurants, catering businesses, events, and industrial cooling requirements.",
      whyHeader: "Why We Started",
      whyDesc: "Coastal Karnataka and neighboring regions have a critical need for consistent, highly reliable, and clean cold preservation. Fisheries, marine exports, hospitality, and construction sectors depend on slow-melting ice to maintain food hygiene and operations without temperature interruptions.",
      storyHeader: "Our Origin Story",
      storyDesc: "Established in 2015/2016 by owner Ashoka, Sri Kaveri Ice Plant was built with a vision to revolutionize regional cold chain integrity. By placing our manufacturing facility directly on National Highway 66 (Opposite Karnataka Bank) in Trasi, Kundapura, we created a key logistical logistics terminal. This enables rapid dispatch of heavy truckloads of high-density block ice directly to harbors, processing complexes, and commercial hubs.",
      differentHeader: "What Makes Us Different",
      differentDesc: "We do not treat ice as a simple commodity. We focus on quality and reliability. Through multi-stage water purification, deep-freezing, and strict touch-free handling, we produce clean, food-grade ice with superior durability and exceptionally slow melting rates.",
      features: [
        { title: "Hygienic Production", desc: "100% purified water with zero manual human contact during harvesting and packing." },
        { title: "Reliable Bulk Supply", desc: "With a high-volume continuous output of 800 blocks daily, we never run out of ice." },
        { title: "Fast Delivery Network", desc: "Our direct NH-66 logistics fleet guarantees same-day delivery within 10-12 hours." },
        { title: "Competitive Pricing", desc: "Get top-tier industrial and food-grade ice directly from the factory at affordable rates." }
      ]
    },
    products: {
      tag: "Direct Ordering Catalog",
      title: "Premium Ice Products",
      desc: "Order clean commercial ice directly from our state-of-the-art facility. Sized, priced, and crafted to satisfy strict food-grade and industrial preservation standards.",
      orderNow: "Order Now",
      minOrder: "Min. Order",
      weight: "Weight",
      price: "Price",
      block: {
        name: "100 KG Ice Blocks",
        tag: "Fisheries & Cargo Grade",
        desc: "Massive, high-density blocks designed for exceptionally slow melting rates and long-lasting cooling. Clean and food-safe, these blocks represent the gold standard for fresh fish storage, seafood preservation, and long-distance transport.",
        appTitle: "Primary Applications:",
        apps: [
          "Fish storage and maritime seafood preservation",
          "Long-distance seafood transit and export cargo",
          "Large-scale concrete cooling and temperature control"
        ],
        specSize: "4 ft × 3 ft"
      },
      crushed: {
        name: "Crushed Ice",
        tag: "Rapid Cooling Grade",
        desc: "Uniform, clean crushed ice designed for rapid cooling and maximum surface contact. Perfect for packing seafood, market displays, food storage, and catering events.",
        appTitle: "Primary Applications:",
        apps: [
          "Fish markets and seafood retail preservation displays",
          "Fresh catch packing at maritime harbor docks",
          "Commercial catering, cooling, and large public events"
        ],
        specSize: "Clean uniform ice shards"
      },
      cubes: {
        name: "Ice Cubes",
        tag: "Food & Beverage Grade",
        desc: "Crystal clear, food-grade ice cubes prepared using purified Reverse Osmosis water. Ideal for hotels, restaurants, juice shops, catering, parties, and events.",
        appTitle: "Primary Applications:",
        apps: [
          "Hotels, restaurants, bars, lounges, and juice shops",
          "Hospitality catering, weddings, and corporate events",
          "Parties and daily beverage serving safety"
        ],
        specSize: "Standard food-grade cubes"
      },
      table: {
        title: "Product Specifications & Quality Summary",
        colProduct: "Product Name",
        colForm: "Dimensions & Format",
        colFilter: "Filtration & Purity",
        colPurpose: "Primary Operational Use",
        note: "All values are strictly certified. Continuous quality audits are maintained to ensure absolute compliance."
      }
    },
    delivery: {
      tag: "Cold Chain Supply Network",
      title: "Logistics & Delivery Information",
      areasHeader: "States & Regions Served:",
      areas: ["Karnataka", "Goa", "Maharashtra", "Kerala"],
      details: [
        { label: "Dispatch Window", value: "Same-Day Delivery Available" },
        { label: "Fulfillment Speed", value: "Within 10-12 hours of booking" },
        { label: "Minimum Order Size", value: "10 Ice Blocks (Bulk requests prioritized)" },
        { label: "Emergency Supply", value: "24/7 Emergency Dispatch Operational" },
        { label: "Standard Rates", value: "Starting from ₹50 / km. Final rates depend on payload and distance." }
      ]
    },
    factory: {
      tag: "Factory Infrastructure",
      title: "Plant Capacity & Machinery",
      capacity: "Continuous Production Output",
      capacityVal: "800 Blocks / Day",
      team: "Full-Time Staff & Operators",
      teamVal: "10 Experts",
      machineryHeader: "Our Production Equipment:",
      machineryDesc: "Sri Kaveri Ice Plant utilizes specialized cooling equipment to ensure continuous freezing, automated crane extraction, and efficient crushing capabilities.",
      machineryList: [
        { name: "Heavy Duty Compressor", desc: "Maintains constant rapid freezing for high daily output." },
        { name: "High-Efficiency Cooling Coil", desc: "Transfers heat away quickly to ensure uniform cooling." },
        { name: "Mechanical Crusher", desc: "Processes blocks into clean, uniform crushed ice." },
        { name: "Brine Tank Agitator", desc: "Circulates cold brine uniformly across all ice cans." },
        { name: "Liquid Level Controller", desc: "Controls cooling liquid flow with high accuracy." },
        { name: "Suction Accumulator", desc: "Guarantees compressor safety during continuous operation." }
      ]
    },
    quality: {
      tag: "Quality & Safety",
      title: "Quality Standards & Approvals",
      desc: "Our plant is built to support certified hygiene and safety approvals. We maintain clean facilities.",
      standards: [
        { title: "Purified Water Filtration", desc: "Every drop of water goes through multi-stage filtration to ensure pure, odor-free ice." },
        { title: "Hygienic Touch-Free Harvesting", desc: "Utilizes overhead cranes and automated tables to ensure zero manual touch." },
        { title: "Equipment Maintenance", desc: "Daily cleaning and maintenance of freezing cells for maximum food-grade hygiene." },
        { title: "Quality Monitoring", desc: "Regular checks to guarantee clean, food-safe ice for seafood and hospitality." }
      ],
      licencesHeader: "Official Regulatory Approvals & Licenses:",
      licencesDesc: "Sri Kaveri Ice Plant holds all necessary government operational licenses. We maintain full transparency:",
      licences: [
        "ISO Quality Certification",
        "FSSAI Food Safety Licence",
        "State Pollution Control Board Clearance",
        "Gram Panchayat Trade Licence",
        "KEB Industrial Power Approval",
        "State Fire & Emergency Safety Certificate"
      ]
    },
    whyChoose: {
      title: "Why Fisheries & Businesses Choose Sri Kaveri",
      reasons: [
        "Hygienic Production",
        "Fast Delivery",
        "Affordable Prices",
        "High Quality",
        "24/7 Service",
        "Bulk Orders Available",
        "Reliable Supply",
        "Food Grade Ice"
      ]
    },
    payment: {
      title: "Accepted Payment Methods",
      invoice: "GST Invoices generated instantly for business bookkeeping.",
      methods: ["Cash Payment", "UPI / Instant QR", "NEFT / Bank Transfer", "Credit & Debit Cards"]
    },
    form: {
      orderTab: "1. Place Ice Order",
      enquiryTab: "2. Business Enquiry",
      validationTitle: "Form Validation",
      validationAll: "Please complete all required fields.",
      successOrder: "Ice Order Formed!",
      successOrderDesc: "Your direct ice order has been formatted and redirected to WhatsApp for instant delivery coordination.",
      successEnquiry: "Enquiry Prepared!",
      successEnquiryDesc: "Your business consultation query has been formatted. Click the button below to submit directly to our desk.",
      orderBtn: "Confirm & Open WhatsApp Order",
      enquiryBtn: "Open WhatsApp to Send",
      sendBtn: "Send Order on WhatsApp",
      resetBtn: "Place Another Request",
      fields: {
        custName: "Customer Name / Business *",
        custPhone: "Phone Number (WhatsApp preferred) *",
        custWhatsApp: "WhatsApp Number *",
        location: "Full Delivery Location / Site Address *",
        product: "Product Selection *",
        qty: "Quantity Required *",
        date: "Requested Delivery Date *",
        additional: "Additional Delivery / Unloading Instructions",
        placeholders: {
          name: "e.g. Coastal Seafoods Inc.",
          phone: "e.g. +91 98450 12345",
          location: "e.g. Malpe Fishing Harbor, Dock No. 4, Udupi",
          additional: "e.g. Crush requirements, specific unloading instructions, preferred delivery timing..."
        }
      },
      calculator: {
        title: "Live Order Calculator",
        priceUnit: "Price per unit:",
        minQty: "Min. Requirement:",
        total: "Estimated Total:"
      },
      securedNote: "Pre-formatted direct ordering. Your order details will be opened directly in WhatsApp."
    },
    contactInfo: {
      title: "Factory Location & Address",
      desc: "Visit our ice production plant or get in touch with owner Ashoka's office directly.",
      addressTitle: "Factory Address:",
      address: "Sri Kaveri Ice Plant, NH 66, Opp Karnataka Bank, Trasi, Kundapura, Karnataka - 576201",
      phone: "+91 91645 32669",
      email: "srikaveriiceplant@gmail.com",
      hoursTitle: "Operating Hours:",
      hoursDesc: "Open 24 Hours / 7 Days a Week / 365 Days Yearly"
    },
    footer: {
      desc: "Supplying fisheries, hotels, restaurants, and businesses across Karnataka, Goa, Maharashtra, and Kerala with high-quality ice.",
      links: "Navigation Links",
      rights: "© 2026 Sri Kaveri Ice Plant. All rights reserved. Premium quality commercial ice."
    },
    whatsappWidget: {
      toast: "Order Ice: +91 91645 32669"
    }
  },
  kn: {
    nav: {
      home: "ಮುಖಪುಟ",
      about: "ನಮ್ಮ ಬಗ್ಗೆ",
      products: "ಉತ್ಪನ್ನಗಳು",
      order: "ಐಸ್ ಆರ್ಡರ್ ಮಾಡಿ",
      industries: "ಸೇವೆ ಸಲ್ಲಿಸುವ ಕ್ಷೇತ್ರಗಳು",
      process: "ತಯಾರಿಕಾ ಪ್ರಕ್ರಿಯೆ",
      quality: "ಗುಣಮಟ್ಟದ ಮಾನದಂಡಗಳು",
      gallery: "ಗ್ಯಾಲರಿ",
      contact: "ಸಂಪರ್ಕಿಸಿ",
      enquiry: "ವ್ಯವಹಾರ ವಿಚಾರಣೆ"
    },
    topBanner: {
      hub: "ಕರ್ನಾಟಕ ಕೈಗಾರಿಕಾ ಕೇಂದ್ರ",
      support: "ಸಂಪರ್ಕಿಸಿ: +91 91645 32669",
      tagline: "ಅತ್ಯುತ್ತಮ ಶುದ್ಧತೆಯ ವಾಣಿಜ್ಯ ಐಸ್ ಪೂರೈಕೆದಾರರು"
    },
    hero: {
      title: "ಪ್ರೀಮಿಯಂ ಐಸ್ ಬ್ಲಾಕ್ಸ್, ಕ್ರಶ್ಡ್ ಐಸ್ ಮತ್ತು ಐಸ್ ಕ್ಯೂಬ್ಸ್",
      sub: "ಕರ್ನಾಟಕ, ಗೋವಾ, ಮಹಾರಾಷ್ಟ್ರ ಮತ್ತು ಕೇರಳದ ಪ್ರಮುಖ ಮತ್ತು ನಂಬಿಕಸ್ಥ ಐಸ್ ಪೂರೈಕೆದಾರರು",
      desc: "ಮೀನುಗಾರಿಕೆ, ಹೋಟೆಲ್‌ಗಳು, ರೆಸ್ಟೋರೆಂಟ್‌ಗಳು, ಸಮುದ್ರ ಆಹಾರ ಉದ್ಯಮಗಳು, ಕ್ಯಾಟರಿಂಗ್ ಮತ್ತು ಕೈಗಾರಿಕಾ ಅಗತ್ಯಗಳಿಗಾಗಿ ಆರೋಗ್ಯಕರ ಉತ್ಪಾದನೆ, ವಿಶ್ವಾಸಾರ್ಹ ವಿತರಣೆ ಮತ್ತು ಪ್ರೀಮಿಯಂ ಗುಣಮಟ್ಟದ ಐಸ್.",
      orderBtn: "ಈಗಲೇ ಆರ್ಡರ್ ಮಾಡಿ",
      whatsappBtn: "ವಾಟ್ಸಾಪ್ ಆರ್ಡರ್ ಡೆಸ್ಕ್",
      assurance1: "ಪ್ರತಿದಿನ 800 ಬ್ಲಾಕ್ ಗಳ ಸಾಮರ್ಥ್ಯ",
      assurance2: "24/7 ಸಾಗಾಟ ಮತ್ತು ವಿತರಣೆ",
      assurance3: "ಸ್ವಚ್ಛ ಮತ್ತು ಶುದ್ಧ ನೀರು"
    },
    about: {
      tag: "ನೇರವಾಗಿ ಕಾರ್ಖಾನೆಯಿಂದ",
      title: "ಶ್ರೀ ಕಾವೇರಿ ಐಸ್ ಪ್ಲಾಂಟ್",
      intro: "ಶ್ರೀ ಕಾವೇರಿ ಐಸ್ ಪ್ಲಾಂಟ್ ಕುಂದಾಪುರದ ತ್ರಾಸಿಯಲ್ಲಿದ್ದು, ಗುಣಮಟ್ಟದ ಐಸ್ ತಯಾರಿಸುವ ಮತ್ತು ಪೂರೈಸುವ ಪ್ರಮುಖ ಉದ್ಯಮವಾಗಿದೆ. ನಾವು ಮೀನುಗಾರಿಕೆ, ಸಮುದ್ರ ಆಹಾರ ಸಂರಕ್ಷಣೆ, ಹೋಟೆಲ್‌ಗಳು, ರೆಸ್ಟೋರೆಂಟ್‌ಗಳು, ಕ್ಯಾಟರಿಂಗ್ ವ್ಯವಹಾರಗಳು, ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಕೈಗಾರಿಕಾ ಅಗತ್ಯಗಳಿಗಾಗಿ ಅತ್ಯುತ್ತಮ ಐಸ್ ಪರಿಹಾರಗಳನ್ನು ಒದಗಿಸುತ್ತೇವೆ.",
      whyHeader: "ನಾವು ಏಕೆ ಪ್ರಾರಂಭಿಸಿದೆವು",
      whyDesc: "ಕರಾವಳಿ ಕರ್ನಾಟಕ ಮತ್ತು ಸುತ್ತಮುತ್ತಲಿನ ಪ್ರದೇಶಗಳಲ್ಲಿ ನಂಬಿಕಸ್ಥ ಮತ್ತು ಶುದ್ಧ ಐಸ್ ಪೂರೈಕೆಯ ತೀವ್ರ ಅಗತ್ಯವಿತ್ತು. ಮೀನುಗಾರಿಕೆ, ರಫ್ತು ಉದ್ಯಮಗಳು, ಹೋಟೆಲ್ ಉದ್ಯಮ ಮತ್ತು ಇತರ ಕ್ಷೇತ್ರಗಳು ತಮ್ಮ ಕಾರ್ಯಾಚರಣೆಯನ್ನು ತಾಪಮಾನದ ವ್ಯತ್ಯಾಸಗಳಿಲ್ಲದೆ ಕಾಯ್ದುಕೊಳ್ಳಲು ನಿಧಾನವಾಗಿ ಕರಗುವ ಐಸ್ ಅತ್ಯಂತ ಮುಖ್ಯವಾಗಿದೆ.",
      storyHeader: "ನಮ್ಮ ಇತಿಹಾಸ",
      storyDesc: "ಮಾಲೀಕರಾದ ಅಶೋಕ ಅವರ ನೇತೃತ್ವದಲ್ಲಿ 2015/2016 ರಲ್ಲಿ ಪ್ರಾರಂಭವಾದ ಶ್ರೀ ಕಾವೇರಿ ಐಸ್ ಪ್ಲಾಂಟ್ ಪ್ರದೇಶದ ಕೋಲ್ಡ್ ಚೈನ್ ವ್ಯವಸ್ಥೆಯನ್ನು ಬಲಪಡಿಸುವ ಕನಸಿನೊಂದಿಗೆ ಹುಟ್ಟಿಕೊಂಡಿತು. ಕುಂದಾಪುರದ ತ್ರಾಸಿಯಲ್ಲಿ ರಾಷ್ಟ್ರೀಯ ಹೆದ್ದಾರಿ 66 ರ ಪಕ್ಕದಲ್ಲೇ (ಕರ್ನಾಟಕ ಬ್ಯಾಂಕ್ ಎದುರು) ನಮ್ಮ ಅತ್ಯಾಧುನಿಕ ತಯಾರಿಕಾ ಘಟಕವನ್ನು ಸ್ಥಾಪಿಸುವ ಮೂಲಕ, ನಾವು ಬಂದರುಗಳು, ಸಂಸ್ಕರಣಾ ಕೇಂದ್ರಗಳು ಮತ್ತು ವಾಣಿಜ್ಯ ಕೇಂದ್ರಗಳಿಗೆ ತ್ವರಿತವಾಗಿ ಐಸ್ ತಲುಪಿಸಲು ಸಾಧ್ಯವಾಗಿಸಿದೆವು.",
      differentHeader: "ನಮ್ಮ ವಿಶೇಷತೆ ಏನು?",
      differentDesc: "ನಾವು ಐಸ್ ಅನ್ನು ಕೇವಲ ಒಂದು ವಸ್ತುವಾಗಿ ನೋಡುವುದಿಲ್ಲ, ಅದಕ್ಕೆ ಅತ್ಯಂತ ಆದ್ಯತೆ ನೀಡುತ್ತೇವೆ. ಮಲ್ಟಿ-ಸ್ಟೇಜ್ ನೀರಿನ ಶುದ್ಧೀಕರಣ, ಆಳವಾದ ಫ್ರೀಜಿಂಗ್ ಮತ್ತು ಕಟ್ಟುನಿಟ್ಟಾದ ಸ್ಪರ್ಶರಹಿತ ತಯಾರಿಕೆಯಿಂದಾಗಿ ನಮ್ಮ ಐಸ್ ಬ್ಲಾಕ್ ಗಳು ಹೆಚ್ಚು ಗಟ್ಟಿಯಾಗಿದ್ದು, ಇತರ ಸಾಮಾನ್ಯ ಐಸ್ ಗಿಂತ ಅತ್ಯಂತ ನಿಧಾನವಾಗಿ ಕರಗುತ್ತವೆ ಮತ್ತು ದೀರ್ಘಕಾಲದವರೆಗೆ ಬಾಳಿಕೆ ಬರುತ್ತವೆ.",
      features: [
        { title: "ಶುದ್ಧ ಮತ್ತು ಆರೋಗ್ಯಕರ ತಯಾರಿಕೆ", desc: "ಮಾನವ ಸ್ಪರ್ಶವಿಲ್ಲದೆ ಸಂಪೂರ್ಣ ಶುದ್ಧೀಕರಿಸಿದ ನೀರನ್ನು ಮಾತ್ರ ಐಸ್ ತಯಾರಿಕೆಗೆ ಬಳಸಲಾಗುತ್ತದೆ." },
        { title: "ನಿರಂತರ ಬೃಹತ್ ಸರಬರಾಜು", desc: "ಪ್ರತಿದಿನ 800 ಬ್ಲಾಕ್ ಗಳ ಬೃಹತ್ ಉತ್ಪಾದನಾ ಸಾಮರ್ಥ್ಯದೊಂದಿಗೆ ನಾವು ಎಂದಿಗೂ ಕೊರತೆಯಾಗದಂತೆ ಪೂರೈಸುತ್ತೇವೆ." },
        { title: "ವೇಗದ ವಿತರಣಾ ಜಾಲ", desc: "ರಾಷ್ಟ್ರೀಯ ಹೆದ್ದಾರಿ 66 ರ ನಮ್ಮ ಸಾಗಾಟ ವ್ಯವಸ್ಥೆಯ ಮೂಲಕ ಕೇವಲ 10-12 ಗಂಟೆಗಳ ಒಳಗೆ ವಿತರಣೆಯ ಭರವಸೆ ನೀಡುತ್ತೇವೆ." },
        { title: "ಕೈಗೆಟುಕುವ ದರ", desc: "ಕಾರ್ಖಾನೆಯಿಂದ ನೇರವಾಗಿ ಅತ್ಯುತ್ತಮ ದರ್ಜೆಯ ಕೈಗಾರಿಕಾ ಮತ್ತು ತಿನ್ನಲು ಯೋಗ್ಯವಾದ ಐಸ್ ಅನ್ನು ರಿಯಾಯಿತಿ ದರದಲ್ಲಿ ಪಡೆಯಿರಿ." }
      ]
    },
    products: {
      tag: "ನೇರ ಆರ್ಡರ್ ಕ್ಯಾಟಲಾಗ್",
      title: "ನಮ್ಮ ಪ್ರಮುಖ ಐಸ್ ಉತ್ಪನ್ನಗಳು",
      desc: "ನಮ್ಮ ಅತ್ಯಾಧುನಿಕ ಘಟಕದಿಂದ ನೇರವಾಗಿ ಅತ್ಯಂತ ಶುದ್ಧವಾದ ಐಸ್ ಅನ್ನು ಆರ್ಡರ್ ಮಾಡಿ. ನಿಮ್ಮ ಉದ್ದೇಶಗಳಿಗೆ ಸೂಕ್ತವಾದ ಗಾತ್ರ ಮತ್ತು ನಿಖರ ಬೆಲೆಯಲ್ಲಿ ಲಭ್ಯವಿದೆ.",
      orderNow: "ಆರ್ಡರ್ ಮಾಡಿ",
      minOrder: "ಕನಿಷ್ಠ ಆರ್ಡರ್",
      weight: "ತೂಕ",
      price: "ಬೆಲೆ",
      block: {
        name: "100 ಕೆ.ಜಿ ಐಸ್ ಬ್ಲಾಕ್ಸ್",
        tag: "ಮೀನುಗಾರಿಕೆ ಮತ್ತು ಸಾಗಾಟ ದರ್ಜೆ",
        desc: "ಹೆಚ್ಚು ಸಾಂದ್ರತೆ ಮತ್ತು ಅತ್ಯಂತ ನಿಧಾನವಾಗಿ ಕರಗುವ ಗಟ್ಟಿ ಐಸ್ ಬ್ಲಾಕ್ಗಳು. ಮೀನು ಶೇಖರಣೆ, ಸಮುದ್ರ ಆಹಾರದ ತಾಜಾತನ ಕಾಯ್ದುಕೊಳ್ಳಲು ಮತ್ತು ದೀರ್ಘ ದೂರದ ಸಾಗಾಟಕ್ಕೆ ಅತ್ಯಂತ ಸೂಕ್ತವಾಗಿದೆ.",
        appTitle: "ಪ್ರಮುಖ ಉಪಯೋಗಗಳು:",
        apps: [
          "ಮೀನು ಶೇಖರಣೆ ಮತ್ತು ಸಮುದ್ರ ಆಹಾರದ ಸಂರಕ್ಷಣೆ",
          "ದೀರ್ಘಾವಧಿಯ ಸಮುದ್ರ ಆಹಾರ ಸಾಗಾಟ ಮತ್ತು ರಫ್ತು",
          "ದೊಡ್ಡ ಪ್ರಮಾಣದ ಕಾಂಕ್ರೀಟ್ ಕೂಲಿಂಗ್ ಮತ್ತು ತಾಪಮಾನ ನಿಯಂತ್ರಣ"
        ],
        specSize: "4 ಅಡಿ x 3 ಅಡಿ"
      },
      crushed: {
        name: "ಪುಡಿ ಮಾಡಿದ ಐಸ್ (Crushed Ice)",
        tag: "ತ್ವರಿತ ತಂಪಾಗಿಸುವಿಕೆ",
        desc: "ತಾಜಾತನ ಕಾಪಾಡಲು ಮತ್ತು ವೇಗವಾಗಿ ತಂಪು ಮಾಡಲು ಅತ್ಯಂತ ಸೂಕ್ತವಾದ ಪುಡಿ ಐಸ್. ಮೀನು ಮಾರುಕಟ್ಟೆಗಳು, ಪ್ರದರ್ಶನ ಮತ್ತು ಸಮಾರಂಭಗಳ ತಂಪಾಗಿಸುವಿಕೆಗೆ ಅತ್ಯುತ್ತಮವಾಗಿದೆ.",
        appTitle: "ಪ್ರಮುಖ ಉಪಯೋಗಗಳು:",
        apps: [
          "ಮೀನು ಮಾರುಕಟ್ಟೆಗಳು ಮತ್ತು ತಾಜಾ ಸಮುದ್ರ ಆಹಾರದ ಪ್ರದರ್ಶನ",
          "ಮೀನುಗಾರಿಕಾ ಬಂದರುಗಳಲ್ಲಿ ಹಡಗುಗಳಿಗೆ ಮತ್ತು ತಾಜಾ ಹಿಡಿತಕ್ಕೆ ಪ್ಯಾಕಿಂಗ್",
          "ಹೋಟೆಲ್ ಕ್ಯಾಟರಿಂಗ್ ಮತ್ತು ದೊಡ್ಡ ಮಟ್ಟದ ಶುಭ ಸಮಾರಂಭಗಳು"
        ],
        specSize: "ಸಮರೂಪದ ಸ್ವಚ್ಛ ಐಸ್ ಚೂರುಗಳು"
      },
      cubes: {
        name: "ಐಸ್ ಕ್ಯೂಬ್ಸ್ (Ice Cubes)",
        tag: "ಆಹಾರ ಮತ್ತು ಪಾನೀಯ ದರ್ಜೆ",
        desc: "ಶುದ್ಧೀಕರಿಸಿದ ನೀರನ್ನು ಬಳಸಿ ಅತ್ಯಂತ ಸ್ವಚ್ಛವಾಗಿ ತಯಾರಿಸಲಾದ ಐಸ್ ಕ್ಯೂಬ್ಸ್. ಹೋಟೆಲ್, ರೆಸ್ಟೋರೆಂಟ್, ಜ್ಯೂಸ್ ಪಾರ್ಲರ್ ಮತ್ತು ಸಮಾರಂಭಗಳಿಗೆ ಅತ್ಯುತ್ತಮವಾಗಿದೆ.",
        appTitle: "ಪ್ರಮುಖ ಉಪಯೋಗಗಳು:",
        apps: [
          "ಉನ್ನತ ಹೋಟೆಲ್‌ಗಳು, ರೆಸ್ಟೋರೆಂಟ್‌ಗಳು, ಬಾರ್ ಮತ್ತು ಕೆಫೆಗಳು",
          "ಮದುವೆ ಸಮಾರಂಭಗಳು, ಪಾರ್ಟಿಗಳು ಮತ್ತು ಜ್ಯೂಸ್ ಅಂಗಡಿಗಳು",
          "ದೈನಂದಿನ ಪಾನೀಯ ಸೇವೆಗೆ ಸಂಪೂರ್ಣ ಸುರಕ್ಷಿತ ಮತ್ತು ತಾಜಾ"
        ],
        specSize: "ಪ್ರಮಾಣಿತ ಗಾತ್ರದ ಐಸ್ ಕ್ಯೂಬ್ಸ್"
      },
      table: {
        title: "ಉತ್ಪನ್ನಗಳ ವಿವರಣೆ ಮತ್ತು ಗುಣಮಟ್ಟದ ಸಾರಾಂಶ",
        colProduct: "ಉತ್ಪನ್ನದ ಹೆಸರು",
        colForm: "ಆಯಾಮಗಳು ಮತ್ತು ಸ್ವರೂಪ",
        colFilter: "ಶುದ್ಧೀಕರಣ ಮತ್ತು ಗುಣಮಟ್ಟ",
        colPurpose: "ಮುಖ್ಯ ಕಾರ್ಯಾಚರಣೆಯ ಬಳಕೆ",
        note: "* ಎಲ್ಲಾ ಮೌಲ್ಯಗಳನ್ನು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಪ್ರಮಾಣೀಕರಿಸಲಾಗಿದೆ. ಸಂಪೂರ್ಣ ಶುದ್ಧತೆಯನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಲು ನಿರಂತರ ತಪಾಸಣೆ ನಡೆಸಲಾಗುತ್ತದೆ."
      }
    },
    delivery: {
      tag: "ಕೋಲ್ಡ್ ಚೈನ್ ಪೂರೈಕೆ ಜಾಲ",
      title: "ಸಾಗಾಟ ಮತ್ತು ವಿತರಣಾ ಮಾಹಿತಿ",
      areasHeader: "ಸೇವೆ ಒದಗಿಸುವ ರಾಜ್ಯಗಳು:",
      areas: ["ಕರ್ನಾಟಕ", "ಗೋವಾ", "ಮಹಾರಾಷ್ಟ್ರ", "ಕೇರಳ"],
      details: [
        { label: "ವಿತರಣಾ ಸಮಯ", value: "ಅದೇ ದಿನ ವಿತರಣೆ ಲಭ್ಯವಿದೆ" },
        { label: "ವಿತರಣೆಯ ವೇಗ", value: "ಆರ್ಡರ್ ಮಾಡಿದ 10-12 ಗಂಟೆಗಳ ಒಳಗೆ" },
        { label: "ಕನಿಷ್ಠ ಆರ್ಡರ್ ಗಾತ್ರ", value: "10 ಐಸ್ ಬ್ಲಾಕ್‌ಗಳು (ಬೃಹತ್ ಆರ್ಡರ್‌ಗಳಿಗೆ ಆದ್ಯತೆ)" },
        { label: "ತುರ್ತು ಸರಬರಾಜು", value: "24/7 ತುರ್ತು ಸಾಗಾಟ ವ್ಯವಸ್ಥೆ ಸಕ್ರಿಯವಾಗಿದೆ" },
        { label: "ಸಾಗಾಟ ದರ", value: "ಕಿ.ಮೀ ಗೆ ₹50 ರಿಂದ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ. ಅಂತಿಮ ದರ ದೂರ ಮತ್ತು ವಾಹನದ ಮೇಲೆ ನಿರ್ಧಾರವಾಗುತ್ತದೆ." }
      ]
    },
    factory: {
      tag: "ಕಾರ್ಖಾನೆಯ ಮೂಲಸೌಕರ್ಯ",
      title: "ಉತ್ಪಾದನಾ ಸಾಮರ್ಥ್ಯ ಮತ್ತು ಯಂತ್ರೋಪಕರಣಗಳು",
      capacity: "ನಿರಂತರ ಉತ್ಪಾದನಾ ಸಾಮರ್ಥ್ಯ",
      capacityVal: "ಪ್ರತಿದಿನ 800 ಬ್ಲಾಕ್ ಗಳ ಉತ್ಪಾದನೆ",
      team: "ಪೂರ್ಣ ಸಮಯದ ತಂತ್ರಜ್ಞರು ಮತ್ತು ಕೆಲಸಗಾರರು",
      teamVal: "10 ಪರಿಣಿತರು",
      machineryHeader: "ನಮ್ಮ ತಾಂತ್ರಿಕ ಯಂತ್ರೋಪಕರಣಗಳು:",
      machineryDesc: "ಶ್ರೀ ಕಾವೇರಿ ಐಸ್ ಪ್ಲಾಂಟ್ ನಿರಂತರ ಸಬ್-ಝೀರೋ ಘನೀಕರಣ, ಸ್ವಯಂಚಾಲಿತ ಕ್ರೇನ್ ಹೊರತೆಗೆಯುವಿಕೆ ಮತ್ತು ಸುಧಾರಿತ ಪುಡಿ ಮಾಡುವಿಕೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ವಿಶೇಷ ಯಂತ್ರೋಪಕರಣಗಳನ್ನು ಬಳಸುತ್ತದೆ.",
      machineryList: [
        { name: "ಹೆವಿ ಡ್ಯೂಟಿ ಕಂಪ್ರೆಸರ್ (Compressor)", desc: "ತ್ವರಿತ ಘನೀಕರಣಕ್ಕಾಗಿ ನಿರಂತರ ಅನಿಲ ಸಂಕೋಚನ ಚಕ್ರಗಳನ್ನು ಕಾಯ್ದುಕೊಳ್ಳುತ್ತದೆ." },
        { name: "ಕೂಲಿಂಗ್ ಕಾಯಿಲ್ (Cooling Coil)", desc: "ಮಲ್ಟಿ-ಪಾಯಿಂಟ್ ಚಿಲ್ಲರ್ ವ್ಯವಸ್ಥೆಯ ಮೂಲಕ ಶಾಖವನ್ನು ತ್ವರಿತವಾಗಿ ಹೊರಹಾಕುತ್ತದೆ." },
        { name: "ಮೆಕ್ಯಾನಿಕಲ್ ಕ್ರಷರ್ (Crusher)", desc: "ಐಸ್ ಬ್ಲಾಕ್ ಗಳನ್ನು ಸಮರೂಪದ ಪುಡಿ ಮಾಡಿದ ಐಸ್ ಆಗಿ ಮಾರ್ಪಡಿಸುತ್ತದೆ." },
        { name: "ಬ್ರೈನ್ ಅಜಿಟೇಟರ್ (Agitator)", desc: "ಐಸ್ ಕ್ಯಾನ್ ಗ್ರಿಡ್‌ಗಳಾದ್ಯಂತ ಏಕರೂಪದ ಶಾಖ ವರ್ಗಾವಣೆಯನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ." },
        { name: "ಎಲ್.ಐ.ಟಿ (LIT - ಲೆವೆಲ್ ಇಂಡಿಕೇಟರ್ ಟ್ರಾನ್ಸ್‌ಮಿಟರ್)", desc: "ದ್ರವ ಶೀತಕದ ಹರಿವನ್ನು ಕಟ್ಟುನಿಟ್ಟಾದ ನಿಖರತೆಯೊಂದಿಗೆ ನಿಯಂತ್ರಿಸುತ್ತದೆ." },
        { name: "ಅಕ್ಯುಮ್ಯುಲೇಟರ್ (Accumulator)", desc: "ನಿರಂತರ ಚಾಲನೆಯ ಸಮಯದಲ್ಲಿ ಸಂಕೋಚಕದ ಸುರಕ್ಷತೆ ಮತ್ತು ಶುಷ್ಕ ಹೀರಿಕೊಳ್ಳುವಿಕೆಯನ್ನು ಖಾತರಿಪಡಿಸುತ್ತದೆ." }
      ]
    },
    quality: {
      tag: "ಅನುಸರಣೆ ಮತ್ತು ಸುರಕ್ಷತೆ",
      title: "ಗುಣಮಟ್ಟದ ಮಾನದಂಡಗಳು ಮತ್ತು ಪರವಾನಗಿಗಳು",
      desc: "ನಮ್ಮ ಪ್ಲಾಂಟ್ ಪ್ರಮಾಣೀಕೃತ ಜೈವಿಕ ಮತ್ತು ಕೈಗಾರಿಕಾ ಸುರಕ್ಷತಾ ನಿಯಮಗಳನ್ನು ಬೆಂಬಲಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ. ನಾವು ಕಟ್ಟುನಿಟ್ಟಾದ ನೈರ್ಮಲ್ಯ ದಾಖಲೆಗಳನ್ನು ಕಾಯ್ದುಕೊಳ್ಳುತ್ತೇವೆ.",
      standards: [
        { title: "ರಿವರ್ಸ್ ಆಸ್ಮೋಸಿಸ್ ಶುದ್ಧ ನೀರು", desc: "ಐಸ್ ತಯಾರಿಸಲು ಬಳಸುವ ಪ್ರತಿಯೊಂದು ಹನಿ ನೀರನ್ನು ಕಟ್ಟುನಿಟ್ಟಾದ ಆರ್.ಓ ಪ್ರಕ್ರಿಯೆಗೆ ಒಳಪಡಿಸಲಾಗುತ್ತದೆ." },
        { title: "ಸ್ಪರ್ಶರಹಿತ ಸ್ವಯಂಚಾಲಿತ ತಯಾರಿಕೆ", desc: "ಮಾನವ ಸ್ಪರ್ಶವಿರದಂತೆ ತಡೆಯಲು ಓವರ್‌ಹೆಡ್ ಕ್ರೇನ್ ಮತ್ತು ಸ್ವಯಂಚಾಲಿತ ಡಂಪ್ ಟೇಬಲ್ ಬಳಸಲಾಗುತ್ತದೆ." },
        { title: "ನಿಯಮಿತ ಯಂತ್ರೋಪಕರಣಗಳ ನಿರ್ವಹಣೆ", desc: "ದಿನನಿತ್ಯದ ಕಂಪ್ರೆಸರ್ ತಪಾಸಣೆ ಮತ್ತು ಶೀತೀಕರಣ ಕೋಣೆಗಳ ಶುದ್ಧೀಕರಣ ಪ್ರಕ್ರಿಯೆಗಳನ್ನು ನಡೆಸಲಾಗುತ್ತದೆ." },
        { title: "ಲ್ಯಾಬ್ ಗುಣಮಟ್ಟ ಮೇಲ್ವಿಚಾರಣೆ", desc: "ಆಹಾರ ಮತ್ತು ಸಂರಕ್ಷಣೆ ಸುರಕ್ಷತೆಗಾಗಿ ಸೂಕ್ಷ್ಮಜೀವಿಗಳ ಪತ್ತೆಹಚ್ಚುವಿಕೆ ಮತ್ತು ನೈರ್ಮಲ್ಯ ಪರೀಕ್ಷೆ ನಡೆಸಲಾಗುತ್ತದೆ." }
      ],
      licencesHeader: "ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಅನುಮೋದನೆಗಳು ಮತ್ತು ಪರವಾನಗಿಗಳು:",
      licencesDesc: "ಶ್ರೀ ಕಾವೇರಿ ಐಸ್ ಪ್ಲಾಂಟ್ ಅಗತ್ಯವಿರುವ ಎಲ್ಲಾ ಸರ್ಕಾರಿ ಪರವಾನಗಿಗಳನ್ನು ಹೊಂದಿದೆ. ವ್ಯವಹಾರದಲ್ಲಿ ಪೂರ್ಣ ಪಾರದರ್ಶಕತೆ ಕಾಯ್ದುಕೊಳ್ಳುತ್ತೇವೆ:",
      licences: [
        "ISO ಗುಣಮಟ್ಟ ಪ್ರಮಾಣಪತ್ರ",
        "ASSI ಕಾರ್ಯಾಚರಣಾ ಅನುಮೋದನೆ",
        "ರಾಜ್ಯ ಮಾಲಿನ್ಯ ನಿಯಂತ್ರಣ ಮಂಡಳಿ ಕ್ಲಿಯರೆನ್ಸ್",
        "ಗ್ರಾಮ ಪಂಚಾಯತ್ ವ್ಯಾಪಾರ ಪರವಾನಗಿ",
        "ಕೆ.ಇ.ಬಿ (KEB) ಕೈಗಾರಿಕಾ ವಿದ್ಯುತ್ ಅನುಮೋದನೆ",
        "ರಾಜ್ಯ ಅಗ್ನಿಶಾಮಕ ಮತ್ತು ತುರ್ತು ಸೇವೆಗಳ ಸುರಕ್ಷತಾ ಪತ್ರ"
      ]
    },
    whyChoose: {
      title: "ಉದ್ಯಮಗಳು ಶ್ರೀ ಕಾವೇರಿಯನ್ನು ಏಕೆ ಆಯ್ಕೆ ಮಾಡಿಕೊಳ್ಳುತ್ತವೆ?",
      reasons: [
        "ಶುದ್ಧ ಮತ್ತು ಸುರಕ್ಷಿತ ತಯಾರಿಕೆ",
        "ವೇಗದ ವಿತರಣೆ",
        "ಕೈಗೆಟುಕುವ ದರ",
        "ಉತ್ತಮ ಗುಣಮಟ್ಟ",
        "24/7 ಗ್ರಾಹಕ ಸೇವೆ",
        "ಬೃಹತ್ ಆರ್ಡರ್‌ಗಳಿಗೆ ಅವಕಾಶ",
        "ಖಾತರಿಯಾದ ಸರಬರಾಜು",
        "ತಿನ್ನಲು ಯೋಗ್ಯವಾದ ಐಸ್"
      ]
    },
    payment: {
      title: "ಸ್ವೀಕರಿಸಲಾಗುವ ಪಾವತಿ ವಿಧಾನಗಳು",
      invoice: "ವ್ಯವಹಾರದ ಲೆಕ್ಕಪತ್ರಕ್ಕಾಗಿ ಜಿ.ಎಸ್.ಟಿ (GST) ಇನ್‌ವಾಯ್ಸ್ ತಕ್ಷಣವೇ ಒದಗಿಸಲಾಗುತ್ತದೆ.",
      methods: ["ನಗದು ಪಾವತಿ (Cash)", "ಯು.ಪಿ.ಐ (UPI) / ತತ್ಕ್ಷಣ ಕ್ಯೂಆರ್", "ನೆಫ್ಟ್ (NEFT) / ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ", "ಕ್ರೆಡಿಟ್ ಮತ್ತು ಡೆಬಿಟ್ ಕಾರ್ಡ್‌ಗಳು"]
    },
    form: {
      orderTab: "1. ಐಸ್ ಆರ್ಡರ್ ಮಾಡಿ",
      enquiryTab: "2. ವ್ಯವಹಾರ ವಿಚಾರಣೆ",
      validationTitle: "ಫಾರ್ಮ್ ದೃಢೀಕರಣ",
      validationAll: "ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಅಗತ್ಯ ಕ್ಷೇತ್ರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ.",
      successOrder: "ಐಸ್ ಆರ್ಡರ್ ಸಿದ್ಧಗೊಂಡಿದೆ!",
      successOrderDesc: "ನಿಮ್ಮ ಆರ್ಡರ್ ವಿವರಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಲಾಗಿದೆ. ತತ್ಕ್ಷಣ ವಿತರಣೆಗಾಗಿ ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಕಳುಹಿಸಲು ಕೆಳಗಿನ ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ.",
      successEnquiry: "ವಿಚಾರಣೆ ಸಿದ್ಧಗೊಂಡಿದೆ!",
      successEnquiryDesc: "ನಿಮ್ಮ ವ್ಯವಹಾರ ವಿಚಾರಣೆಯ ವಿವರಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಲಾಗಿದೆ. ಕೆಳಗಿನ ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ ನೇರವಾಗಿ ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಕಳುಹಿಸಿ.",
      orderBtn: "ಖಚಿತಪಡಿಸಿ ಮತ್ತು ವಾಟ್ಸಾಪ್ ಆರ್ಡರ್ ತೆರೆಯಿರಿ",
      enquiryBtn: "ಕಳುಹಿಸಲು ವಾಟ್ಸಾಪ್ ತೆರೆಯಿರಿ",
      sendBtn: "ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಆರ್ಡರ್ ಕಳುಹಿಸಿ",
      resetBtn: "ಮತ್ತೊಂದು ವಿನಂತಿ ಸಲ್ಲಿಸಿ",
      fields: {
        custName: "ಗ್ರಾಹಕರ ಹೆಸರು / ಉದ್ಯಮ *",
        custPhone: "ಫೋನ್ ಸಂಖ್ಯೆ (ವಾಟ್ಸಾಪ್ ಸಂಖ್ಯೆ ಆದ್ಯತೆ) *",
        custWhatsApp: "ವಾಟ್ಸಾಪ್ ಸಂಖ್ಯೆ *",
        location: "ಪೂರ್ಣ ವಿತರಣಾ ವಿಳಾಸ / ಸ್ಥಳ *",
        product: "ಉತ್ಪನ್ನದ ಆಯ್ಕೆ *",
        qty: "ಅಗತ್ಯವಿರುವ ಪ್ರಮಾಣ *",
        date: "ವಿತರಣೆ ಬೇಕಾದ ದಿನಾಂಕ *",
        additional: "ಹೆಚ್ಚುವರಿ ಅಗತ್ಯಗಳು / ತಾಪಮಾನದ ಸೂಚನೆಗಳು",
        placeholders: {
          name: "ಉದಾ: ಕರಾವಳಿ ಸೀಫುಡ್ಸ್ ಲಿಮಿಟೆಡ್",
          phone: "ಉದಾ: +91 98450 12345",
          location: "ಉದಾ: ಮಲ್ಪೆ ಮೀನುಗಾರಿಕಾ ಬಂದರು, ಡಾಕ್ ನಂ 4, ಉಡುಪಿ",
          additional: "ಉದಾ: ಪುಡಿ ಮಾಡುವಿಕೆ, ಸಾಪ್ತಾಹಿಕ ಕರಾರುಗಳು, ಲೋಡಿಂಗ್ ಸಹಾಯ ಬೇಕಿದ್ದರೆ ತಿಳಿಸಿ..."
        }
      },
      calculator: {
        title: "ಲೈವ್ ಆರ್ಡರ್ ಕ್ಯಾಲ್ಕುಲೇಟರ್",
        priceUnit: "ಘಟಕದ ಬೆಲೆ:",
        minQty: "ಕನಿಷ್ಠ ಅಗತ್ಯತೆ:",
        total: "ಅಂದಾಜು ಒಟ್ಟು ಮೊತ್ತ:"
      },
      securedNote: "ಯಾವುದೇ ಸ್ಥಳೀಯ ಸಂಗ್ರಹಣೆ ಇಲ್ಲದೆ ನಿಮ್ಮ ಡೇಟಾವನ್ನು ನೇರವಾಗಿ ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಸುರಕ್ಷಿತವಾಗಿ ಕಳುಹಿಸಲಾಗುತ್ತದೆ."
    },
    contactInfo: {
      title: "ಕಾರ್ಖಾನೆಯ ಸ್ಥಳ ಮತ್ತು ವಿಳಾಸ",
      desc: "ನಮ್ಮ ಬೃಹತ್ ತಯಾರಿಕಾ ಘಟಕಕ್ಕೆ ಭೇಟಿ ನೀಡಿ ಅಥವಾ ಮಾಲೀಕರಾದ ಅಶೋಕ ಅವರ ಸಾಗಾಟ ಸಮನ್ವಯ ಕೇಂದ್ರವನ್ನು ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಿ.",
      addressTitle: "ಕಾರ್ಖಾನೆಯ ವಿಳಾಸ:",
      address: "ಶ್ರೀ ಕಾವೇರಿ ಐಸ್ ಪ್ಲಾಂಟ್, ಎನ್.ಎಚ್ 66, ಕರ್ನಾಟಕ ಬ್ಯಾಂಕ್ ಎದುರು, ತ್ರಾಸಿ, ಕುಂದಾಪುರ, ಕರ್ನಾಟಕ - 576201",
      phone: "+91 91645 32669",
      email: "srikaveriiceplant@gmail.com",
      hoursTitle: "ಕೆಲಸದ ಸಮಯ:",
      hoursDesc: "ವರ್ಷದ 365 ದಿನಗಳೂ 24 ಗಂಟೆಯೂ ಸೇವೆ ಲಭ್ಯವಿದೆ"
    },
    footer: {
      desc: "ಪಶ್ಚಿಮ ಭಾರತದಾದ್ಯಂತ ಕರಾವಳಿ ಮೀನುಗಾರಿಕೆ, ಹೋಟೆಲ್ ಉದ್ಯಮ ಮತ್ತು ಕೈಗಾರಿಕಾ ಗ್ರಾಹಕರಿಗೆ ಅತ್ಯಂತ ಗಟ್ಟಿಯಾದ, ನಿಧಾನವಾಗಿ ಕರಗುವ ಐಸ್ ಒದಗಿಸುತ್ತಿದೆ.",
      links: "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",
      rights: "© 2026 ಶ್ರೀ ಕಾವೇರಿ ಐಸ್ ಪ್ಲಾಂಟ್. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ. ವಿಶ್ವಾಸಾರ್ಹ ತಂಪಾಗಿಸುವಿಕೆಯ ಪರಿಹಾರಗಳು."
    },
    whatsappWidget: {
      toast: "ಐಸ್ ಆರ್ಡರ್ ಮಾಡಿ: +91 91645 32669"
    }
  }
};
