import React from "react";
import { motion } from "framer-motion";
import avatar from "../assets/avatar.png";
import chaima_image from "../assets/chaima image.jpg";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { theme } from '../styles/theme';
import About from '../pages/About'
import AnimatedTitle from '../components/AnimatedTitle';
import AnimatedCard from '../components/AnimatedCard';

const Home = () => {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/LAKHMAISS-CHAIMA", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/chaima-lakhmaiss-733a71239/", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:chaimaalakhmaiss23@gmail.com", label: "Email" },
    { icon: FaPhone, href: "tel:+212697406273", label: "Phone" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen w-full ">
      <motion.div
        className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10 p-8 md:p-20"
        initial={theme.animations.fadeIn.initial}
        animate={theme.animations.fadeIn.animate}
        transition={theme.animations.fadeIn.transition}
      >
        <motion.div
          className="flex-1"
          initial={theme.animations.slideIn.initial}
          animate={theme.animations.slideIn.animate}
          transition={theme.animations.slideIn.transition}
        >
          <motion.p
            className="text-lg text-amber-700 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.p>
          <AnimatedTitle 
            text="CHAIMA LAKHMAISS"
            className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"
          />
          <motion.h2
            className="text-xl md:text-2xl mb-6 text-slate-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            A full stack JavaScript developer
          </motion.h2>

          <motion.div
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-3 text-white rounded-full shadow-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-amber-600 px-6 py-3 text-amber-600 rounded-full hover:bg-amber-600 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact me
            </motion.button>
            <motion.a
              href="/ChaimalakhmaissCV.pdf"
              download="ChaimalakhmaissCV.pdf"
              className="bg-gradient-to-r from-orange-600 to-amber-600 px-6 py-3 text-white rounded-full shadow-lg hover:from-orange-700 hover:to-amber-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            className="flex gap-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-slate-600 hover:text-amber-600 transition-colors duration-300"
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -10, 10, -10, 0],
                  transition: {
                    duration: 0.5
                  }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <AnimatedCard className="flex-shrink-0">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <motion.img
              src={avatar}
              alt="avatar"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover relative z-10 border-4 border-white shadow-2xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            />
          </div>
        </AnimatedCard>
      </motion.div>

      <motion.div
        className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 p-8 md:p-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex-shrink-0 w-full md:w-auto"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={chaima_image}
            alt="chaima_image"
            className="w-full md:w-80 h-80 object-cover rounded-2xl shadow-2xl"
          />
        </motion.div>

        <section id="about" className="min-h-screen py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <About />
          </motion.div>
        </section>
      </motion.div>
    </section>
  );
};

export default Home;
