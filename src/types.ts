export interface Product {
  id: string;
  name: string;
  tag?: string;
  description: string;
  image: string;
  applications: string[];
  iconName: string;
  dimensions: string;
  purity: string;
  price?: string;
  moq?: string;
  weight?: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  iconName: string;
  image?: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
}

export interface QualityHighlight {
  id: string;
  title: string;
  description: string;
  items: string[];
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 
    | 'Factory Building' 
    | 'Ice Production Area' 
    | 'Ice Blocks' 
    | 'Machinery' 
    | 'Storage Area' 
    | 'Delivery Operations';
  image: string;
}

export interface EnquiryRequest {
  fullName: string;
  companyName: string;
  phoneNumber: string;
  emailAddress: string;
  productType: string;
  message: string;
}
