export const fadeInOnScroll = (delay: number, duration: number) => ({
  hidden: { opacity: 0 }, // initial state: fully transparent
  visible: {
    opacity: 1, // fade in to fully visible
    transition: {
      delay: delay, // small delay before starting the animation
      duration: duration, // duration of the fade-in effect
      ease: [0.42, 0, 0.58, 1], // custom cubic-bezier for smooth ease-in-out effect
    },
  },
});

// 参考: https://www.framer.com/motion/transition/###stiffness
export const fadeInUpSpring = (delay: number, duration: number) => ({
  hidden: { y: 60, opacity: 0, scale: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: delay,
      duration: duration,
      ease: [0.6, -0.05, 0.01, 0.99],
      type: "spring",
      stiffness: 100,
    },
  },
});
