// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card bg-gray-800 rounded-lg shadow-lg p-6">
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-2xl font-bold mt-4 text-white">{project.title}</h2>
      <p className="text-gray-400 mt-2">{project.description}</p>
      <div className="tech-stack flex flex-wrap mt-4">
        {project.tech.map((tech, index) => (
          <span key={index} className="text-sm bg-gray-700 text-white py-1 px-2 rounded mr-2 mb-2">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
