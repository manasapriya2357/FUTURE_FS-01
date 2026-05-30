function Projects() {
  const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A professional portfolio website built with React.js to showcase my skills, projects, and achievements.",
  },
  {
    title: "Future Interns Task 1",
    description:
      "A project completed as part of my Full Stack Web Development internship program.",
  },
  {
    title: "Upcoming Projects",
    description:
      "Additional web development and full stack projects will be added as I continue learning and building.",
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;