import React from 'react';

export default function About() {
  return (
    <section className="max-w-3xl mx-auto text-center px-4 py-10 animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-300 mb-6">
        About Me
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed">
        I'm a <strong className="text-blue-600 dark:text-blue-400">Full Stack JavaScript Developer</strong> and a passionate tech student. I love crafting modern web applications using technologies like <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>.
      </p>
      
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        Curious and creative by nature, I thrive on learning and experimenting with new ideas. Whether working on personal projects or collaborating with a team, my goal is to create meaningful user experiences and make an impact through clean, efficient code.
      </p>
    </section>
  );
}
