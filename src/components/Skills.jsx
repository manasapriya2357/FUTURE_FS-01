function Skills() {
  const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Git",
  "GitHub",
  "C",
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;