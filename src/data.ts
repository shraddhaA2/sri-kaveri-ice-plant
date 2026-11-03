import { Product, Industry, ProcessStep, QualityHighlight, GalleryItem } from './types';

export const LOGO_URL = '/logo.png';

// Official Google Maps location for the factory (shared by owner)
export const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/vTP1EXKu7VSSzJTL8';

export const PRODUCTS: Product[] = [
  {
    id: '100kg-blocks',
    name: '100 KG Ice Blocks',
    tag: 'Fisheries & Cargo Grade',
    description: 'Massive, high-density blocks designed for exceptionally slow melting rates and long-lasting cooling. Clean and food-safe, these blocks represent the gold standard for fresh fish storage, seafood preservation, and long-distance transport.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeIlsnmp4b8xlSCqcLbdItBMqoLMuPOwEXCOmCGiBsNCw1mKzankBcd7VFA0aACxH-hJIsmgmmrwMynfXeMJANmvgA6tbquc4S3AYWWYwWO_fsYiRS6K7m3YbPAOeuuZ6IJ890vRihXaLwmy0B---KfYOcn-nnJwMQmohMXyyhkymqAkP1f8FaCh2nMCcJ_LOMVqqse7Mst6lvadSomYRWcSqLoJ2Ctsnx-VzBLWjBdDpSEfTdDojN',
    applications: [
      'Fish storage and maritime seafood preservation',
      'Long-distance seafood transit and export cargo',
      'Large-scale concrete cooling and temperature control'
    ],
    iconName: 'sailing',
    dimensions: '4 ft × 3 ft blocks',
    purity: 'Multi-stage Purified Water',
    price: '₹170 / Block',
    moq: '10 Blocks',
    weight: '100 KG'
  },
  {
    id: 'crushed-ice',
    name: 'Crushed Ice',
    tag: 'Rapid Cooling Grade',
    description: 'Uniform, clean crushed ice designed for rapid cooling and maximum surface contact. Perfect for packing seafood, market displays, food storage, and catering events.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFt0TmdhgJlKsK5o0xQw8JN5qc_pH1tLvR6TQViWr2tIhpmA_yNn5rSmaTFF_1Mk79OOItuBuyTbNLnpDtqqbyRs1bdDIIR4-rS_X2_0E4HketSQlQKm23ZuinKFlukGWF0gj29rmO1c-iBsGw5lVgPm_Pn50avixqMvd38dEA4T9uRLHkzUGyzf-kgUu4udLHinbYkBXGM9wCOf0noNt-67sIhMJLWNAJIbzNxa7dCQZzBCC6ULia',
    applications: [
      'Fish markets and seafood retail preservation displays',
      'Fresh catch packing at maritime harbor docks',
      'Commercial catering, cooling, and large public events'
    ],
    iconName: 'restaurant',
    dimensions: 'Clean uniform ice shards',
    purity: 'Purified Process Water',
    price: '₹220 / Bag',
    moq: '10 Bags',
    weight: '50 KG Bag'
  },
  {
    id: 'ice-cubes',
    name: 'Ice Cubes',
    tag: 'Food & Beverage Grade',
    description: 'Crystal clear, food-grade ice cubes prepared using purified Reverse Osmosis water. Ideal for hotels, restaurants, juice shops, catering, parties, and events.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeEREGCdcfkvUXOxH4r1OQqw5IIDJ8VfXgpEKWwMLbphJ8D_ASpsP_cn0JUj7GsfyHz8pHkFg6Xo2kafjdUXGf3EdGutWNzZ3vtwEAc0rbSL_9FPoME6Me9GhhxrnjpgLUdbX57-XZ3jZFtM6UZSAGX8vcK_UgCE-yqSSU9rY5Hrl4oApmRj-RyTk_beapWU0qf0ytvUMZhuT6LyHi9itJGVGPYkDGfiB5RzdL40oEQFrgb25fyqWj',
    applications: [
      'Hotels, restaurants, bars, lounges, and juice shops',
      'Hospitality catering, weddings, and corporate events',
      'Parties and daily beverage serving safety'
    ],
    iconName: 'check_circle',
    dimensions: 'Standard food-grade cubes',
    purity: 'Reverse Osmosis Purified',
    price: '₹150 / Bag',
    moq: '15 Bags',
    weight: '20 KG Bag'
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'fisheries',
    name: 'Fisheries & Aquaculture',
    description: 'Providing heavy-volume block and flake ice directly to commercial maritime fleets, trawlers, and packaging harbors to ensure fresh catch integrity from ocean to shore.',
    iconName: 'sailing'
  },
  {
    id: 'hospitality',
    name: 'Premium Hospitality',
    description: 'Supplying immaculate, crystal-clear RO tube ice to five-star hotels, luxury resorts, and high-end event caterers who refuse to compromise on presentation and purity.',
    iconName: 'local_hotel'
  },
  {
    id: 'food-processing',
    name: 'Food Processing',
    description: 'Controlled temperature solutions for meat packing plants, commercial bakeries, and industrial food blending where hygienic standards are strictly audited.',
    iconName: 'restaurant_menu'
  },
  {
    id: 'cold-chain',
    name: 'Cold Chain Logistics',
    description: 'Securing the continental pharmaceutical, biochemical, and agricultural supply chain with high-mass thermal blocks that buffer cargo against unpredictable temperature spikes.',
    iconName: 'local_shipping'
  },
  {
    id: 'construction',
    name: 'Construction Cooling',
    description: 'Enabling massive civil engineering feats by supplying bulk ice for hydrational temperature regulation in ready-mix concrete formulations for dams, piers, and runways.',
    iconName: 'architecture'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Water Purification',
    description: 'Raw source water undergoes rigorous multi-chamber pre-treatment to eliminate organic substances, suspended solids, and initial mineral compounds.',
    iconName: 'waves'
  },
  {
    stepNumber: 2,
    title: 'Advanced Filtration',
    description: 'The pre-treated water passes through industrial Reverse Osmosis (RO) membranes and secondary carbon block filtrations, reaching pristine chemical purity.',
    iconName: 'filter_alt'
  },
  {
    stepNumber: 3,
    title: 'Ice Production',
    description: 'Water is directed into high-efficiency sub-zero freezing shafts. Advanced cyclic refrigeration crystallizes the pure water with touchless mechanical oversight.',
    iconName: 'ac_unit'
  },
  {
    stepNumber: 4,
    title: 'Quality Testing',
    description: 'Continuous real-time sensors monitor TDS levels, structural density, and micro-bacteriological integrity before the harvesting trigger is engaged.',
    iconName: 'biotech'
  },
  {
    stepNumber: 5,
    title: 'Cold Storage',
    description: 'The finished product is cataloged and transferred to insulated cold storage rooms to preserve its solid block density.',
    iconName: 'kitchen'
  },
  {
    stepNumber: 6,
    title: 'Refrigerated Delivery',
    description: 'Ice is dispatched using our custom GPS-monitored refrigerated transport fleet, maintaining strict thermal seals directly to client facilities.',
    iconName: 'local_shipping'
  }
];

export const QUALITY_HIGHLIGHTS: QualityHighlight[] = [
  {
    id: 'hygiene',
    title: 'Hygienic Production',
    description: 'Our facility operates under strict zero-touch hygiene protocols. From raw water purification to the final loading dock, automated mechanical processes handle the products to ensure clean, safe, and contamination-free ice.',
    items: [
      'Food-grade Stainless Steel contact surfaces',
      'Touchless automated harvesting, block ejectors, and packing systems',
      'Regular deep-clean sanitization protocols for all freezing equipment'
    ],
    iconName: 'clean_hands'
  },
  {
    id: 'purification',
    title: 'Advanced Purification',
    description: 'We believe that exceptional ice starts with clean, pure water. We use a heavy-duty multi-stage filtration system that filters out impurities, dissolved solids, and microscopic particulates.',
    items: [
      'Multi-stage Reverse Osmosis (RO) filtration systems',
      'High-efficiency UV-C sterilization systems at water exit points',
      'Continuous water polishing to ensure crystal clear visual clarity'
    ],
    iconName: 'science'
  },
  {
    id: 'testing',
    title: 'Rigorous Testing',
    description: 'Quality is verified, not assumed. Every production cycle is accompanied by regular testing in our facility. We continuously audit density and purity to ensure exceptional, slower-melting consistency.',
    items: [
      'Real-time automated water quality sensors at key production stages',
      'Regular cleanliness and water quality inspections',
      'Visual density checks to ensure uniform block structure'
    ],
    iconName: 'verified'
  },
  {
    id: 'logistics',
    title: 'Reliable Cold Chain',
    description: 'Manufacturing premium ice is only half the equation; preserving it during transfer is crucial. Our custom B2B logistics model guarantees that our ice arrives in pristine solid condition, exactly when your production schedule demands it.',
    items: [
      'Proprietary fleet of heavy refrigerated thermal delivery vehicles',
      'Automated real-time GPS tracking and remote trailer temperature monitoring',
      '24/7 dedicated dispatch logistics team securing flexible emergency supplies'
    ],
    iconName: 'local_shipping'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Sri Kaveri Ice Plant Main Facility Exterior',
    category: 'Factory Building',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDW76MYaviJ82QdOjBNs4yDwrL9cz6WU4_Lq08Jt2WCpvpVXIyDAu609elyyqf8gGnm2YsXPCpWswwsWhCE1vn5asuJBlPVnKC3-SAXd6oIkrVY-2p_C6eUP7TnY4RQ3la6mebQ9ZqkaandVMPwtBeQknbM2eAOHPvJvpBMwYQ_PlXE1J2iHbTarGX7GLiX7nd7cU3_AJRWFODlV_FOKDMdhaMvz3VnIjkO8ob4ilX20ACXgkH3mbf8'
  },
  {
    id: 'gal-2',
    title: 'Touchless High-Efficiency Ice Production Floor',
    category: 'Ice Production Area',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdSLOuEHZFj3beul-bWcwQtfLTiDEfT7VpZJvpzNLz2xL39hYWg6spSMaAKq_2LSkwi51oSJnJ8ahRqhn_8cTyT4jjNI7Vuj0UfPyt2Fn4AaTs-KG9eapG-N7LIAbL6Z86Kn3ABFpciAFqdSrf3PEg4ahdUuV21iil4MRcibS51lyyHBW_SB2-1u9ExFzW99mlSx8ci87xcXz7HxmSFVCqR6QcPjK0HGxBGx4D7-01otcYTPH5pBWI'
  },
  {
    id: 'gal-3',
    title: 'Stored Crystalline Block Ice Stacks',
    category: 'Ice Blocks',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASdqIE-TfW7FGPOb_HIWXFI02okO7AAZkdfX103bD0CF6EK99JXppBA26ZMVwhbFnL8d3z6JqmF19bl-WIN6_QGTnkLAIe6bK6Brq1rz2zWN5l1rVyTamKNyVPxh0CX3dy44IjAZNnza_0gh7edDKJ_1kh78GwTFWlYIC77J5behJWlSutwcd31yIkoJa_apLOVj1OyWC-GGIeAiLudQokv1mOz7oqjGmmBHwt7qkpmNWA50PSEgyw'
  },
  {
    id: 'gal-4',
    title: 'Multi-Stage RO Water Filtration Machinery Plant',
    category: 'Machinery',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJmSS5huyiiXT2aiM0RRxamSjIEDiV9vMJzAaPHKLZZhvCYAJrYm-SSdpxtiCcRoeG-oNWcMlatUtovqF-Vf31EpUEJqikj7DjgXpR1LkvFsML6v7QTMmA2W3l_17_MwQFVtWjTxVscxNVAWA9seAsq2Ps1UWsaZ3Uzh1YbdhUrA7L1BI8045fXTpMPJDrVjdT1C3zHq6wEjJXNFHXNTBtrINc3GDO2QgkbsmiQ43LHMvhHsHSU4sv'
  },
  {
    id: 'gal-5',
    title: 'Insulated Cold Storage Areas',
    category: 'Storage Area',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1RW4YP9q9OuEWNptG8xt4vPfO_Lg_tOPueFV4LEYbTLU2o33EqH0s9AV1XoNOagQkV9OhwFSPE_CJCl_DcWuJ2Yy7FWLOQg6vmpFTB8JLPuOzFk4Zkwx8HqgdWuPe2lSJ6xiA5tkzHK1zGuehU-7IVurTzEy4y0JUCMETd-X5WPJMA7WVzt7puTZ_fbqeLw5SEFyFbl8JX2MptAza1WxHqVVsUVfvFNTayAo75PBby-wsx4AMrL6g'
  },
  {
    id: 'gal-6',
    title: 'Automated Block Ice Loading & Dispatch Bays',
    category: 'Delivery Operations',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjaL2OY3G1pHHL2BOrB5AcLdJFJP0JdhtxZ8MJc34fchkjFOKw0ADOLoAsSyOO_yh2iul3c0fKy6IszksxgxLUpeky7J6c99jPE7rutECrYlv_glTG1RZDhg7QH4V2Ih225m3192c2r2HUtj3ajG299WNAxlbsrSUyTgmtE5ScSofSU4-EiWMqVB7qwDBE-M6ZzgsHyfs3sp7d8U1pVujRvOys3SsAcJXE-KuLJYcyCVzDZYwYlK4f'
  }
];

export const MAP_IMAGE_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDW76MYaviJ82QdOjBNs4yDwrL9cz6WU4_Lq08Jt2WCpvpVXIyDAu609elyyqf8gGnm2YsXPCpWswwsWhCE1vn5asuJBlPVnKC3-SAXd6oIkrVY-2p_C6eUP7TnY4RQ3la6mebQ9ZqkaandVMPwtBeQknbM2eAOHPvJvpBMwYQ_PlXE1J2iHbTarGX7GLiX7nd7cU3_AJRWFODlV_FOKDMdhaMvz3VnIjkO8ob4ilX20ACXgkH3mbf8';

export const FACTORY_HERO_IMAGE_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDW76MYaviJ82QdOjBNs4yDwrL9cz6WU4_Lq08Jt2WCpvpVXIyDAu609elyyqf8gGnm2YsXPCpWswwsWhCE1vn5asuJBlPVnKC3-SAXd6oIkrVY-2p_C6eUP7TnY4RQ3la6mebQ9ZqkaandVMPwtBeQknbM2eAOHPvJvpBMwYQ_PlXE1J2iHbTarGX7GLiX7nd7cU3_AJRWFODlV_FOKDMdhaMvz3VnIjkO8ob4ilX20ACXgkH3mbf8';
