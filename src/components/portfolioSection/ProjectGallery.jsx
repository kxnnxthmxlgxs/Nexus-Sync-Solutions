// src/components/ProjectGallery.jsx
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Project 1',
    description: 'A web development project for a startup.',
    imageUrl: '/path-to-image-1',
    tech: ['React', 'Node.js', 'Tailwind CSS']
  },
  {
    title: 'Project 2',
    description: 'An e-commerce platform with a custom CMS.',
    imageUrl: '/path-to-image-2',
    tech: ['Vue.js', 'Express', 'MongoDB']
  },
  // Add more projects here
];

const ProjectGallery = () => {
  return (
    <section className="project-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  );
};

export default ProjectGallery;
