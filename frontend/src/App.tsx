import React, { useState } from "react";
import Project from './components/Project'; 
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Header from "./components/Header";
import Projects from "./components/Projects";
import CreateProject from "./components/CreateProject";


const App: React.FC = () => {
  const student = 'Halgeir Geirson';
  const degree = 'Bachelor IT';
  const points = 180;
  const email = 'student@hiof.no';

  // State for prosjekter
  const [projects, setProjects] = useState<ProjectType[]>([
    { title: 'Prosjekt 1', description: 'Beskrivelse av prosjektet', details: 'Detaljer', category: 'Kategori1' },
    { title: 'Prosjekt 2', description: 'Beskrivelse av prosjektet', details: 'Detaljer', category: 'Kategori2' },
]);

  // Håndtering av opprettelse av prosjekter
  const handleCreateProject = (newProject: { title: string; description: string; details: string; category: string }) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
};

  // Håndtering av fjerning av prosjekter
  const handleRemoveProject = (index: number) => {
    setProjects((prevProjects) => prevProjects.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Header student={student} degree={degree} points={points} />
      <Experiences />
      <Contact email={email} />
      <Projects projects={projects} onCreate={handleCreateProject} onRemove={handleRemoveProject} />
    </div>
  );
};

export default App;
