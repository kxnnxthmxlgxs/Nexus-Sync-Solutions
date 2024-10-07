// src/components/TechnologiesUsed.jsx
import React from 'react';

const technologies = ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Vue.js'];

const TechnologiesUsed = () => {
  return (
    <section className="technologies-used py-12 text-center">
      <h2 className="text-3xl font-bold text-white">Technologies We Use</h2>
      <div className="flex justify-center flex-wrap mt-6">
        {technologies.map((tech, index) => (
          <span key={index} className="text-lg text-white bg-gray-700 py-2 px-4 m-2 rounded">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesUsed;
