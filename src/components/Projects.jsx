function Projects() {
  const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A professional portfolio website built with React.js to showcase my skills, projects, and achievements.",
    tech: "React.js | CSS | JavaScript",
  },
  {
    title: "Future Interns Portfolio Project",
    description:
      "Developed a responsive portfolio website using React.js as part of the Future Interns Full Stack Web Development Internship.",
    tech: "React.js | Vite | GitHub",
  },
  {
    title: "Upcoming Projects",
    description:
      "Additional web development and full stack projects will be added as I continue learning and building.",
    tech: "Coming Soon",
  },
];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <h4>{project.tech}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;