/**
 * All user-facing copy strings.
 * Centralized for future i18n support. Never hardcode text in JSX.
 * @module constants/copy
 */

export const COPY = {
  /** Site-wide metadata */
  site: {
    name: 'Shahid Studios',
    fullName: 'Mohammad Shahidul Islam',
    tagline: 'Your Brand, Engineered Beautifully',
    description:
      'Shahid Studios — Creative Designer & Developer with 10+ years of experience in brand identity, UI/UX design, web development, and print design. Based in Chattogram, Bangladesh.',
    keywords: [
      'graphic designer',
      'web developer',
      'UI/UX designer',
      'brand identity',
      'logo design',
      'freelancer',
      'Chattogram',
      'Bangladesh',
      'Shahid Studios',
    ],
  },

  /** Navigation labels */
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    work: 'Work',
    caseStudies: 'Case Studies',
    blog: 'Blog',
    contact: 'Contact',
    resume: 'Resume',
  },

  /** Hero section */
  hero: {
    greeting: "Hello, I'm",
    name: 'Shahidul Islam',
    role: 'Creative Designer & Developer',
    tagline: 'Your Brand, Engineered Beautifully',
    cta: 'View My Work',
    ctaSecondary: 'Get In Touch',
    availabilityStatus: 'Available for new projects',
  },

  /** About section */
  about: {
    overline: 'About Me',
    heading: 'Crafting Digital & Print Experiences for Over a Decade',
    bio: "I'm Mohammad Shahidul Islam — a multidisciplinary designer and developer based in Chattogram, Bangladesh. With 10+ years in graphic design and a deep passion for frontend development, I bridge the gap between visual creativity and technical execution. From brand identities to complex web applications, I deliver work that's both beautiful and functional.",
    statsYears: '10+',
    statsYearsLabel: 'Years Experience',
    statsProjects: '100+',
    statsProjectsLabel: 'Projects Delivered',
    statsClients: '50+',
    statsClientsLabel: 'Happy Clients',
  },

  /** Services section */
  services: {
    overline: 'Services',
    heading: 'What I Can Do For You',
    subheading:
      'From concept to completion — design, develop, and deliver solutions that elevate your brand.',
  },

  /** Portfolio section */
  portfolio: {
    overline: 'Portfolio',
    heading: 'Selected Work',
    subheading:
      'A curated selection of projects across brand identity, UI/UX, web development, and print design.',
    viewProject: 'View Project',
    viewCaseStudy: 'Read Case Study',
    filterAll: 'All',
  },

  /** Pricing section */
  pricing: {
    overline: 'Pricing',
    heading: 'Transparent Packages',
    subheading:
      "Starting prices for common services. Every project is unique — let's discuss yours.",
  },

  /** Testimonials section */
  testimonials: {
    overline: 'Testimonials',
    heading: 'What Clients Say',
  },

  /** FAQ section */
  faq: {
    overline: 'FAQ',
    heading: 'Frequently Asked Questions',
    subheading: 'Common questions about working together, timelines, and deliverables.',
  },

  /** Contact section */
  contact: {
    overline: 'Get In Touch',
    heading: "Let's Work Together",
    subheading:
      "Have a project in mind? I'd love to hear about it. Reach out via the form below or connect directly on WhatsApp.",
    formName: 'Your Name',
    formEmail: 'Your Email',
    formSubject: 'Subject',
    formMessage: 'Tell me about your project...',
    formSubmit: 'Send Message',
    formSuccess: "Message sent successfully! I'll get back to you soon.",
    formError: 'Something went wrong. Please try again or reach out on WhatsApp.',
    whatsappCta: 'Chat on WhatsApp',
  },

  /** Footer */
  footer: {
    copyright: `© ${new Date().getFullYear()} Shahid Studios. All rights reserved.`,
    madeWith: 'Designed & developed by Mohammad Shahidul Islam',
    newsletter: {
      heading: 'Stay Updated',
      subheading: 'Get notified about new projects and articles.',
      placeholder: 'Enter your email',
      submit: 'Subscribe',
    },
  },

  /** Blog */
  blog: {
    overline: 'Blog',
    heading: 'Articles & Insights',
    subheading: 'Thoughts on design, development, and the creative process.',
    readMore: 'Read Article',
    readTime: 'min read',
  },

  /** Case Studies */
  caseStudies: {
    overline: 'Case Studies',
    heading: 'The Process Behind The Work',
    subheading: 'Deep dives into the strategy, design, and development of selected projects.',
    challenge: 'The Challenge',
    process: 'The Process',
    outcome: 'The Outcome',
    techUsed: 'Technologies Used',
  },

  /** Resume */
  resume: {
    overline: 'Resume',
    heading: 'Experience & Education',
    downloadCta: 'Download CV',
  },
} as const;
