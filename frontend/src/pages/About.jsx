import React from 'react';
import { motion } from "framer-motion";

export default function About() {
  return (
     <motion.div 
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-amber-600">About me</h3>
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
  );
}
