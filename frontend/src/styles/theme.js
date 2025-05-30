export const theme = {
  colors: {
    primary: '#3B82F6', 
    secondary: '#10B981', 
    accent: '#6366F1', 
    background: {
      main: '#F8FAFC', 
      dark: '#1E293B', 
      gradient: 'linear-gradient(to right, #3B82F6, #10B981)'
    },
    text: {
      primary: '#1E293B',
      secondary: '#475569',
      light: '#94A3B8'
    }
  },
  animations: {
    fadeIn: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    },
    slideIn: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.6 }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.6 }
    }
  }
}; 