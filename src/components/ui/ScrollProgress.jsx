import { motion, useScroll } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-cyan-400 origin-left z-50 shadow-[0_0_10px_#00f0ff]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress;
