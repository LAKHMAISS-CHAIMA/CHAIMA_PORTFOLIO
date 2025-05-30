import React from 'react';

const experiences = [
  {
    role: '',
    company: '',
    period: '',
    tasks: [''],
  },
  {
    role: '',
    company: '',
    period: '',
    tasks: [''],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-left transition-all hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {exp.role} <span className="text-lime-600"> @ {exp.company}</span>
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
