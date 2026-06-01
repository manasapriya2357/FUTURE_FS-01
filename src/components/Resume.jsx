function Resume() {
  return (
    <section id="resume" className="resume">
      <h2>Resume</h2>

      <p>
        Download my resume to learn more about my education,
        skills, and experience.
      </p>

      <a
          href="/resume.docx"
          download
          className="resume-btn"
        >
          📄 Download Resume
      </a>
    </section>
  );
}

export default Resume;