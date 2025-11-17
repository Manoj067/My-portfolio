import React, { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Project List
  const projects = [
    {
      title: "Chowgule SBD Dashboard",
      description:
        "A departmental dashboard built at Stratos Infra using React, Tailwind and REST APIs for real-time data management.",
      link: "https://demo.erponline.net/chowgule/",
    },
    {
      title: "Wedding Event Website",
      description:
        "A complete modern wedding event website with gallery and sections. Fully responsive.",
      link: "https://wedding-event-six.vercel.app/",
    },
    {
      title: "PixelNest Creative Studio",
      description:
        "A digital studio portfolio website showcasing creative UI/UX projects.",
      link: "#",
    },
    {
      title: "TriLife Hospital Website",
      description:
        "Hospital website with doctor listings and appointment modules.",
      link: "#",
    },
    {
      title: "GitHub Mini Projects",
      description: "My collection of web apps built using HTML, CSS & JS.",
      link: "https://github.com/manoj067",
    },
  ];

  return (
    <div className={darkMode ? "app dark" : "app"}>
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Manoj KS</h1>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero">
        <h2>Hi, I'm Manoj</h2>
        <p>Frontend Developer (React | JavaScript | TailwindCSS)</p>
        <a href="#projects" className="hero-btn">View My Work</a>
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <h3>About Me</h3>
        <p>
          I'm a passionate Frontend Developer with 2 years of experience building
          modern, responsive, and scalable web applications using React.js,
          TailwindCSS and JavaScript. I focus on writing clean, maintainable code
          and creating smooth user experiences.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h3>Projects</h3>
        <div className="project-grid">
          {projects.map((p, index) => (
            <div className="project-card" key={index}>
              <h4>{p.title}</h4>
              <p>{p.description}</p>
              <a href={p.link} target="_blank" rel="noreferrer" className="project-btn">
                {p.link === "#" ? "Coming Soon" : "View Project"}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="skills">
        <h3>Skills</h3>

        <div className="skill">
          <span>React</span>
          <div className="progress"><div className="progress-fill react"></div></div>
        </div>

        <div className="skill">
          <span>JavaScript</span>
          <div className="progress"><div className="progress-fill js"></div></div>
        </div>

        <div className="skill">
          <span>HTML & CSS</span>
          <div className="progress"><div className="progress-fill css"></div></div>
        </div>

        <div className="skill">
          <span>Tailwind CSS</span>
          <div className="progress"><div className="progress-fill tailwind"></div></div>
        </div>

        <div className="skill">
          <span>Git & GitHub</span>
          <div className="progress"><div className="progress-fill git"></div></div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h3>Contact Me</h3>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Connect with me</p>
        <ul>
          <li><a href="https://www.linkedin.com/in/" target="_blank">LinkedIn</a></li>
          <li><a href="https://github.com/manoj067" target="_blank">GitHub</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
