import React from 'react';

const certificates = [
  { name: '', from: '' },
  { name: '', from: '' },
];

export default function Certificat() {
  return (
    <section
      id="certificates"
      className="bg-gradient-to-r from-green-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 py-16 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12">Certificates</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {certificates.map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Certificate: ${cert.name} from ${cert.from}`}
              className="w-72 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105 text-left"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {cert.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Issued by {cert.from}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
