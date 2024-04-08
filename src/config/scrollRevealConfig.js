import ScrollReveal from 'scrollreveal';

const defaultOptions = {
  delay: 200,
  distance: '50px',
  easing: 'ease-in-out',
  origin: 'bottom',
  duration: 1000,
  reset: true
};

export function applyScrollReveal(selector, options = {}) {
  const combinedOptions = { ...defaultOptions, ...options };
  ScrollReveal().reveal(selector, combinedOptions);
}
