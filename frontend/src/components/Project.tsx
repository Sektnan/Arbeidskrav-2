import React from 'react';

// Typen for prosjektet
type ProjectProps = {
  title: string;
  description: string;
  details: string;
  children?: React.ReactNode;
};

// Project-komponenten som viser ett prosjekt
const Project: React.FC<ProjectProps> = ({ title, description, details, children }) => {
  return (
    <div>
      <h3>{title}</h3>
      <h2>{description}</h2>
      <p>{details}</p>
      {children}
    </div>
  );
};

export default Project;