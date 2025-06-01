import { Routes as RouterRoutes, Route } from 'react-router-dom';
import AnimatedSection from './components/AnimatedSection';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';

const Routes = () => {
  return (
    <RouterRoutes>
      <Route 
        path="/" 
        element={
          <AnimatedSection>
            <Home />
          </AnimatedSection>
        } 
      />
      <Route 
        path="/projects" 
        element={
          <AnimatedSection>
            <Projects />
          </AnimatedSection>
        } 
      />
      <Route 
        path="/experience" 
        element={
          <AnimatedSection>
            <Experience />
          </AnimatedSection>
        } 
      />
      <Route 
        path="/certificates" 
        element={
          <AnimatedSection>
            <Certificates />
          </AnimatedSection>
        } 
      />
      <Route 
        path="/contact" 
        element={
          <AnimatedSection>
            <Contact />
          </AnimatedSection>
        } 
      />
    </RouterRoutes>
  );
};

export default Routes; 