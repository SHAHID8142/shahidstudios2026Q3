/**
 * Lenis smooth scroll + GSAP ScrollTrigger integration.
 * This is the single source of truth for scroll behavior across the site.
 * @module lib/lenis
 */
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize Lenis smooth scroll and connect it to GSAP's ticker.
 * Must be called once on page load (typically in BaseLayout).
 * @returns The Lenis instance for manual control if needed.
 */
export function initLenis(): Lenis {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    touchMultiplier: 2,
    infinite: false,
  });

  /** Sync Lenis scroll position with GSAP ScrollTrigger */
  lenis.on('scroll', ScrollTrigger.update);

  /** Drive Lenis from GSAP's RAF for perfect frame sync */
  gsap.ticker.add((time: number) => {
    lenis.raf(time * 1000);
  });

  /** Disable GSAP's built-in lag smoothing (Lenis handles this) */
  gsap.ticker.lagSmoothing(0);

  return lenis;
}
