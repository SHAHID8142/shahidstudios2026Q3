/**
 * Social media and contact link definitions.
 * @module constants/social
 */

export interface SocialLink {
  /** Platform name */
  platform: string;
  /** Full URL */
  url: string;
  /** Accessible label */
  ariaLabel: string;
  /** Icon identifier (for icon component mapping) */
  icon: string;
}

/** Social media profiles */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'Behance',
    url: 'https://behance.net/shahidstudios',
    ariaLabel: 'View Shahid Studios on Behance',
    icon: 'behance',
  },
  {
    platform: 'Dribbble',
    url: 'https://dribbble.com/shahidstudios',
    ariaLabel: 'View Shahid Studios on Dribbble',
    icon: 'dribbble',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/shahidstudios',
    ariaLabel: 'Connect with Shahidul Islam on LinkedIn',
    icon: 'linkedin',
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/SHAHID8142',
    ariaLabel: 'View Shahid Studios code on GitHub',
    icon: 'github',
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/shahidstudios',
    ariaLabel: 'Follow Shahid Studios on Instagram',
    icon: 'instagram',
  },
  {
    platform: 'Facebook',
    url: 'https://facebook.com/shahidstudios',
    ariaLabel: 'Follow Shahid Studios on Facebook',
    icon: 'facebook',
  },
  {
    platform: 'X',
    url: 'https://x.com/shahidstudios',
    ariaLabel: 'Follow Shahid Studios on X',
    icon: 'x',
  },
];

/** Direct contact information */
export const CONTACT_INFO = {
  email: 'shahidprintshop@gmail.com',
  phone: '+880 1840488142',
  whatsapp: 'https://wa.me/8801840488142',
  location: 'Chattogram, Bangladesh',
} as const;
