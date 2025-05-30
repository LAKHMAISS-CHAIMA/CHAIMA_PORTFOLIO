import React from 'react';
import { FaGithub } from 'react-icons/fa'; 

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

export default function Project() {
  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-white">My Projects</h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-left"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{proj.description}</p>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-lime-600 dark:text-lime-400 font-medium hover:underline"
              >
                <FaGithub className="mr-2" />
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
