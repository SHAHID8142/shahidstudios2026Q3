/**
 * Custom text splitter utility to simulate GSAP SplitText for free.
 * Wraps words and characters in spans for staggered animations.
 * @module utils/splitText
 */

export function splitTextToChars(element: HTMLElement): void {
  const text = element.innerText;
  element.innerHTML = '';

  const words = text.split(' ');

  words.forEach((word, wordIndex) => {
    const wordSpan = document.createElement('span');
    wordSpan.style.display = 'inline-block';
    wordSpan.style.whiteSpace = 'nowrap';
    wordSpan.className = 'split-word';

    const chars = word.split('');
    chars.forEach((char) => {
      const charSpan = document.createElement('span');
      charSpan.style.display = 'inline-block';
      charSpan.className = 'split-char';
      charSpan.innerText = char;
      wordSpan.appendChild(charSpan);
    });

    element.appendChild(wordSpan);

    // Add space after word if it's not the last word
    if (wordIndex < words.length - 1) {
      const spaceSpan = document.createElement('span');
      spaceSpan.style.display = 'inline-block';
      spaceSpan.innerHTML = '&nbsp;';
      element.appendChild(spaceSpan);
    }
  });
}
