/**
 * Shared TypeScript interfaces used across the project.
 * @module types/index
 */

/** Portfolio project data shape */
export interface Project {
  title: string;
  slug: string;
  category: ProjectCategory;
  thumbnail: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

/** Supported project categories for filtering */
export type ProjectCategory =
  | 'brand-identity'
  | 'ui-ux'
  | 'web-development'
  | 'print-design'
  | 'app-design'
  | 'all';

/** Service offering */
export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

/** Client testimonial */
export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
}

/** FAQ item */
export interface FAQItem {
  question: string;
  answer: string;
}

/** Pricing tier */
export interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

/** Blog post frontmatter */
export interface BlogPost {
  title: string;
  slug: string;
  description: string;
  date: string;
  tags: string[];
  category: string;
  coverImage: string;
  readTime: number;
  draft?: boolean;
}

/** Case study frontmatter */
export interface CaseStudy {
  title: string;
  slug: string;
  client: string;
  category: ProjectCategory;
  date: string;
  coverImage: string;
  challenge: string;
  outcome: string;
  tech: string[];
}

/** Experience entry for resume timeline */
export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  description: string;
  current?: boolean;
}

/** Client logo for "Trusted By" section */
export interface ClientLogo {
  name: string;
  logo: string;
  url?: string;
}
