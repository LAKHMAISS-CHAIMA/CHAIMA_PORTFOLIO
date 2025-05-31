import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

const AnimatedCard = ({ children, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse position values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transform mouse position into rotation values
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onHoverStart={() => setIsHovered(true)}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
        }}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl opacity-20 blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCard; 