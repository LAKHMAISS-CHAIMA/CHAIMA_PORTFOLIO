import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, variant = 'primary', className = '', disabled = false }) => {
  const baseStyle = "relative px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center";
  
  const variants = {
    primary: "bg-primary-color text-white hover:bg-primary-dark",
    secondary: "bg-accent-color text-primary-dark hover:bg-primary-light",
    outline: "border-2 border-primary-color text-primary-color hover:bg-primary-color hover:text-white"
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
    disabled: { opacity: 0.6 }
  };

  const rippleVariants = {
    initial: { scale: 0, opacity: 0.75 },
    animate: { scale: 2, opacity: 0 }
  };

  const [ripples, setRipples] = useState([]);

  const createRipple = (e) => {
    if (disabled) return;
    
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ripple = {
      x,
      y,
      id: Date.now()
    };
    
    setRipples([...ripples, ripple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== ripple.id));
    }, 600);
  };

  return (
    <motion.button
      className={`${baseStyle} ${variants[variant]} ${className} overflow-hidden`}
      onClick={(e) => {
        createRipple(e);
        onClick && onClick(e);
      }}
      disabled={disabled}
      variants={buttonVariants}
      initial="rest"
      whileHover={disabled ? "disabled" : "hover"}
      whileTap={disabled ? "disabled" : "tap"}
      animate={disabled ? "disabled" : "rest"}
    >
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          className="absolute bg-white rounded-full pointer-events-none"
          style={{
            width: 100,
            height: 100,
            left: ripple.x - 50,
            top: ripple.y - 50
          }}
          variants={rippleVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6 }}
        />
      ))}
      {children}
    </motion.button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  className: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button; 