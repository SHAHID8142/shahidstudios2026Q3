/**
 * Navigation link definitions.
 * Used by both desktop and mobile navigation components.
 * @module constants/navigation
 */

export interface NavLink {
  /** Display label */
  label: string;
  /** Route path or anchor */
  href: string;
  /** Whether this is an external link */
  external?: boolean;
}

/** Primary navigation links */
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/work' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

/** CTA button in navigation */
export const NAV_CTA = {
  label: "Let's Talk",
  href: '/contact',
} as const;
