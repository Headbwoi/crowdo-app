export const toggleVariant = {
  show: {
    y: [-100, 0],
    opacity: [0, 1],
    transition: { duration: 0.7 },
  },
  exit: {
    opacity: [1, 0],
    y: [0, -100],
    transition: { duration: 0.5 },
  },
}
