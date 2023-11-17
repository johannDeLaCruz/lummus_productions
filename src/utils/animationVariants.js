export const verticalPop = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.5,
      staggerChildren: 0.6,
    },
  },
};
export const verticalPopChildren = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const horizontalPop = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.4,
      staggerChildren: 0.3,
    },
  },
};

export const horizontalPopChildren = {
  hidden: { opacity: 0, x: -10, y: 10 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const createPathFillIn = (fillColor) => ({
  hidden: {
    pathLength: 0,
    opacity: 0,
    fill: `hsla(360, 100%, 100%, 0)`,
    stroke: `hsla(360, 100%, 100%, 0)`,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    fill: fillColor,
    stroke: fillColor,
    transition: {
      delay: 1,
      pathLength: { duration: 4, type: "spring", bounce: 0 },
      opacity: { duration: 0.01 },
      stroke: { duration: 4, type: "spring", bounce: 0 },
      fill: { delay: 2, duration: 1, ease: "linear" },
    },
  },
});
