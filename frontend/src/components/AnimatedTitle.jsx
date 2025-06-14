import React from 'react';
import { motion } from 'framer-motion';

const AnimatedTitle = ({ text, className }) => {
  // Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{
            display: 'inline-block',
            marginRight: letter === " " ? "0.3em" : "0.0em",
            whiteSpace: 'pre',
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTitle; 