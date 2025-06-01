import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const AnimatedCard = ({ title, description, icon, link }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-2 rounded-full bg-primary-light dark:bg-primary-dark">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {description}
      </p>
      
      {link && (
        <motion.a
          href={link}
          className="inline-flex items-center text-primary-color hover:text-primary-dark"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          En savoir plus
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.a>
      )}
    </motion.div>
  );
};

AnimatedCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.element,
  link: PropTypes.string
};

export default AnimatedCard; 