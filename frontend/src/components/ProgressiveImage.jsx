import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ProgressiveImage = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [blur, setBlur] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoading(false);
      setTimeout(() => setBlur(false), 50);
    };
  }, [src]);

  return (
    <motion.div
      className="relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.img
        src={src}
        alt={alt}
        className={`${className} ${blur ? 'blur-sm' : 'blur-0'} transition-all duration-700`}
        style={{ opacity: isLoading ? 0.5 : 1 }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-primary-light border-t-primary-dark rounded-full animate-spin" />
        </div>
      )}
    </motion.div>
  );
};

ProgressiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ProgressiveImage.defaultProps = {
  className: '',
};

export default ProgressiveImage; 