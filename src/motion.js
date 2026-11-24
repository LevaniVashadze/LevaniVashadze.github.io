const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Props for react-scroll links: animated scrolling unless the visitor asked for less motion.
export const scrollProps = {
  smooth: !reduceMotion,
  duration: reduceMotion ? 0 : 500,
  offset: -90,
};

// Move keyboard focus to the section a link scrolls to, so the next Tab continues from there.
export const focusSection = (id) => {
  document.getElementById(id)?.focus({ preventScroll: true });
};
