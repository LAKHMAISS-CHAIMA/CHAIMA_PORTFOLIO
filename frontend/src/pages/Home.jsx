import React from "react";
import { motion } from "framer-motion";
import avatar from "../assets/avatar.png";
import chaima_image from "../assets/chaima image.jpg";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { theme } from '../styles/theme';

const Home = () => {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/LAKHMAISS-CHAIMA", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/chaima-lakhmaiss-733a71239/", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:votre.email@example.com", label: "Email" },
    { icon: FaPhone, href: "tel:+212600000000", label: "Phone" }
  ];

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-emerald-50">
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
            className="text-lg text-blue-600 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.p>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            CHAIMA LAKHMAISS
          </motion.h1>
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
            <button className="bg-blue-600 px-6 py-3 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300">
              View My Work
            </button>
            <button className="border-2 border-blue-600 px-6 py-3 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
              Contact me
            </button>
            <a 
              href="/cv.pdf" 
              download="Chaima_Lakhmaiss_CV.pdf"
              className="bg-emerald-600 px-6 py-3 text-white rounded-lg shadow-lg hover:bg-emerald-700 transition-all duration-300"
            >
              Download CV
            </a>
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
                className="text-2xl text-slate-600 hover:text-blue-600 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex-shrink-0"
          initial={theme.animations.scaleIn.initial}
          animate={theme.animations.scaleIn.animate}
          transition={theme.animations.scaleIn.transition}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <img 
              src={avatar} 
              alt="avatar" 
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover relative z-10 border-4 border-white shadow-2xl" 
            />
          </div>
        </motion.div>
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

        <motion.div 
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-blue-600">About me</h3>
          <p className="text-lg text-slate-700 leading-relaxed">
            I'm a full stack JavaScript developer and a passionate tech student.
            I enjoy building modern web apps using React, Node.js, and MongoDB.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Driven by curiosity and creativity, I'm always learning,
            experimenting, and growing as a developer. Looking for
            opportunities to build real-world projects, collaborate, and make an
            impact through code.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {['React', 'Node.js', 'MongoDB', 'TypeScript', 'Express', 'Next.js'].map((skill) => (
              <div 
                key={skill}
                className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <span className="text-slate-700 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
