import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const AnimatedSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0] // Courbe d'animation personnalisée
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number
};

export default AnimatedSection; 