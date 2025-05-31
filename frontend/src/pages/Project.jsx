import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import AnimatedCard from '../components/AnimatedCard';
import AnimatedTitle from '../components/AnimatedTitle';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A responsive personal portfolio with contact form and project showcase.',
    github: 'https://github.com/chaima/portfolio',
  },
  {
    title: 'E-commerce App',
    description: 'A full stack e-commerce platform with user and admin dashboards.',
    github: 'https://github.com/chaima/ecommerce-app',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Project() {
  return (
    <section id="projects" className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <AnimatedTitle 
          text="My Projects"
          className="text-3xl font-bold mb-12 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"
        />

        <motion.div 
          className="grid sm:grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((proj, i) => (
            <motion.div key={i} variants={item}>
              <AnimatedCard>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-left">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{proj.description}</p>
                  <motion.a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-amber-600 dark:text-amber-400 font-medium hover:underline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="mr-2" />
                    View on GitHub
                  </motion.a>
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
