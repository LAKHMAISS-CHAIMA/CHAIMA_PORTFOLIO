import React from 'react';
import { Download } from 'lucide-react';

export default function Shared() {
  return (
    <div className="text-center mt-16">
      <a
        href="/cv.pdf"
        download
        className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-white font-medium py-2 px-6 rounded-full transition duration-300 shadow-lg hover:shadow-xl"
      >
        <Download size={18} />
        Download CV
      </a>
    </div>
  );
}
