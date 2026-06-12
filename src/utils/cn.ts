/**
 * Utility function for conditional class name merging.
 * Combines class names, filtering out falsy values.
 * @module utils/cn
 */

/**
 * Merge class names, filtering out undefined/null/false values.
 * @param classes - Class names or falsy values
 * @returns Merged class string
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
