/**
 * GSAP animation utility functions.
 * Reusable scroll-triggered animation presets for consistent motion across sections.
 * @module lib/animations
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/** Standard easing curves used across the site */
export const EASE = {
  /** Smooth deceleration — default for most reveals */
  outExpo: 'expo.out',
  /** Snappy deceleration — for interactive elements */
  outQuart: 'quart.out',
  /** Smooth in-out — for looping or symmetric animations */
  inOutCirc: 'circ.inOut',
  /** Elastic bounce — for playful micro-interactions */
  outBack: 'back.out(1.7)',
} as const;

/** Standard durations in seconds */
export const DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.9,
  slower: 1.2,
} as const;

/**
 * Fade-up reveal animation triggered on scroll.
 * @param element - Target element or selector
 * @param options - Override defaults
 */
export function fadeUpOnScroll(
  element: gsap.TweenTarget,
  options?: {
    delay?: number;
    duration?: number;
    y?: number;
    stagger?: number;
  }
): gsap.core.Tween {
  return gsap.from(element, {
    y: options?.y ?? 60,
    opacity: 0,
    duration: options?.duration ?? DURATION.slow,
    delay: options?.delay ?? 0,
    stagger: options?.stagger ?? 0.1,
    ease: EASE.outExpo,
    scrollTrigger: {
      trigger: element as gsap.DOMTarget,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });
}

/**
 * Scale-in reveal animation triggered on scroll.
 * @param element - Target element or selector
 * @param options - Override defaults
 */
export function scaleInOnScroll(
  element: gsap.TweenTarget,
  options?: {
    delay?: number;
    duration?: number;
    scale?: number;
  }
): gsap.core.Tween {
  return gsap.from(element, {
    scale: options?.scale ?? 0.9,
    opacity: 0,
    duration: options?.duration ?? DURATION.slow,
    delay: options?.delay ?? 0,
    ease: EASE.outExpo,
    scrollTrigger: {
      trigger: element as gsap.DOMTarget,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });
}

/**
 * Horizontal slide-in animation triggered on scroll.
 * @param element - Target element or selector
 * @param direction - 'left' or 'right'
 */
export function slideInOnScroll(
  element: gsap.TweenTarget,
  direction: 'left' | 'right' = 'left',
  options?: {
    delay?: number;
    duration?: number;
    distance?: number;
  }
): gsap.core.Tween {
  const x = direction === 'left' ? -(options?.distance ?? 80) : (options?.distance ?? 80);

  return gsap.from(element, {
    x,
    opacity: 0,
    duration: options?.duration ?? DURATION.slow,
    delay: options?.delay ?? 0,
    ease: EASE.outExpo,
    scrollTrigger: {
      trigger: element as gsap.DOMTarget,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });
}

/**
 * Staggered children reveal — animates direct children of a container.
 * @param container - Parent element or selector
 * @param childSelector - CSS selector for children to animate
 */
export function staggerChildrenOnScroll(
  container: gsap.DOMTarget,
  childSelector: string,
  options?: {
    stagger?: number;
    duration?: number;
    y?: number;
  }
): gsap.core.Tween {
  return gsap.from(`${container} ${childSelector}`, {
    y: options?.y ?? 40,
    opacity: 0,
    duration: options?.duration ?? DURATION.normal,
    stagger: options?.stagger ?? 0.08,
    ease: EASE.outExpo,
    scrollTrigger: {
      trigger: container,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
}
