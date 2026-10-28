export interface Problem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  headline: string;
  tagline: string;
  summary: string;
  heroImage: string;
  altText: string;
  symptoms: string[];
  causes: {
    title: string;
    description: string;
    technicalNote?: string;
  }[];
  symptomCauseFixStrip: {
    symptom: string;
    cause: string;
    fix: string;
  }[];
  approach: {
    step: string;
    title: string;
    description: string;
  }[];
  outcomes: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedCaseNoteId?: string;
}

export interface Service {
  id: string;
  slug: string;
  number: string;
  title: string;
  tagline: string;
  summary: string;
  heroImage: string;
  whoItsFor: string[];
  whatToExpect: string[];
  howItWorks: {
    stepNumber: string;
    stepTitle: string;
    stepDetails: string;
  }[];
  deliverables: string[];
  formatOptions: string; // e.g., On-site in Chicagoland/Midwest or nationwide travel; remote triage available
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface CaseNote {
  id: string;
  slug: string;
  tag: string;
  clientType: string;
  location: string;
  title: string;
  situation: string;
  whatWeFound: string[];
  whatChanged: string[];
  keyTakeaway: string;
  image: string;
  isPlaceholder?: boolean;
}

export interface FAQItem {
  id: string;
  category: 'grounding' | 'pretreatment' | 'application' | 'curing' | 'working-together';
  categoryLabel: string;
  question: string;
  answer: string;
  quickCheckTip?: string;
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  preferredContact: 'phone' | 'text' | 'email';
  operationType: 'job-shop' | 'oem' | 'aerospace' | 'architectural' | 'other';
  problemCategory: 'grounding' | 'cleaning' | 'powder-waste' | 'unusual' | 'training' | 'not-sure';
  urgency: 'urgent-line-down' | 'within-week' | 'routine-planning';
  description: string;
}
