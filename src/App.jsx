import './App.css'

function App() {
  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <p className="hero-tag">Hello, I'm</p>

          <h1>Sahar Abdo</h1>

          <h2>React Learner & Front-End Developer</h2>

          <p className="hero-description">
            I build simple and responsive web interfaces using HTML, CSS,
            JavaScript, and React.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>
        </div>
      </header>

      <main>
        <section>
          <h2>About Me</h2>
          <p>
            I am learning front-end development and building projects using
            HTML, CSS, JavaScript, and React.
          </p>
        </section>

        <section>
          <h2>Skills</h2>
          <p>HTML | CSS | JavaScript | React | Git | GitHub</p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <p>My Portfolio Website</p>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Email: abdosahar896@gmail.com</p>
        </section>
      </main>
    </>
  )
}

export default App