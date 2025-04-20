export const fadeInAnimation = {
  initial: { opacity: 0, scale: 0.7, transformOrigin: 'bottom' },
  transition: { duration: 0.4 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.6 },
};
