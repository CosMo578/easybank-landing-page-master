import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function Reveal({ children, delayTime }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const mControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mControls.start("visible");
    }
  }, [isInView, mControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mControls}
      transition={{ duration: 0.5, delay: delayTime || 0.25, type: "spring" }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
  