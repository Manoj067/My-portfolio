import React from 'react';
import './App.css';

function App() {
  // Sample projects data
  const projects = [
    { title: "Portfolio Website", description: "A personal portfolio to showcase my work." },
    { title: "E-commerce App", description: "An e-commerce platform for small businesses." },
    { title: "Weather App", description: "A simple weather forecasting app using an API." }
  ];

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <h1>My Portfolio</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero-section">
        <h2>Welcome to My Portfolio</h2>
        <p>I'm a React Developer building amazing web apps.</p>
      </header>

      {/* About Me Section */}
      <section id="about" className="about-section">
        <h3>About Me</h3>
        <p>Hi, I'm a software developer specializing in front-end development with React.js. I love creating intuitive and responsive websites.</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h3>My Projects</h3>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h3>Skills</h3>
        <div className="skills">
          <div className="skill">
            <span>React</span>
            <div className="progress-bar"><div className="progress react"></div></div>
          </div>
          <div className="skill">
            <span>JavaScript</span>
            <div className="progress-bar"><div className="progress js"></div></div>
          </div>
          <div className="skill">
            <span>CSS</span>
            <div className="progress-bar"><div className="progress css"></div></div>
          </div>
        </div>
        
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h3>Contact Me</h3>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Connect with me on social media</p>
        <ul>
          <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;