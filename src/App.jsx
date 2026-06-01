import "./App.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import profilePic from "./assets/manasa.jpg";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">Manasa Priya 💻</div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <img
            src={profilePic}
            alt="Manasa Priya"
            className="profile-pic"
          />
          <h1>Hi, I'm Manasa Priya 👋</h1>

          <h3>
            Full Stack Developer | React Enthusiast | Tech Learner
          </h3>
          <p>
              Aspiring Full Stack Web Developer passionate about
              building responsive, user-friendly web applications
              using modern technologies. Currently pursuing B.Tech
              and continuously improving my skills through projects,
              internships, and hands-on learning.
          </p>

          <div className="social-links">
          <a
            href="https://github.com/manasapriya2357"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/manasa-priya-saripalli-564178394"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="mailto:manasapriyasaripalli@gmail.com"
          >
            Email
          </a>
        </div>

          <a href="#projects" className="project-btn">
            View Projects
          </a>
        </div>
      </section>
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;