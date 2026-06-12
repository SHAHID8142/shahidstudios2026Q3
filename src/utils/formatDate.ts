/**
 * Date formatting utility.
 * Consistent date display across blog posts, case studies, and timelines.
 * @module utils/formatDate
 */

/**
 * Format a date string or Date object into a human-readable format.
 * @param date - Date string or Date object
 * @param options - Intl.DateTimeFormat options override
 * @returns Formatted date string (e.g., "June 12, 2026")
 */
export function formatDate(date: string | Date, options?: Intl.DateTimeFormatOptions): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  });
}

/**
 * Format a date into a relative time string (e.g., "2 days ago").
 * @param date - Date string or Date object
 * @returns Relative time string
 */
export function formatRelativeDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}
