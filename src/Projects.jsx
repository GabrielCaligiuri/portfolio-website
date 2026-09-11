//src Home.jsx
//Gabriel Caligiuri
import './projects.css';

const projects = [
  { label: "View Project →", title: "Valorant Headshot Statistical Analysis" , href: "https://github.com/gabrielcaligiuri/valorant-headshot-statistical-analysis", description: "Statistical analysis of 20,000 Valorant matches comparing weekday vs weekend headshot percentages across 4 phases using Python, pandas, numpy, and scipy."},
  { label: "View Project →", title: "Portfolio Website", href: "https://github.com/gabrielcaligiuri/portfolio-website", description: "Custom portfolio website built with React and Vite. Features a clean responsive layout, reusable React components and smooth navigation. "},
  { label: "View Project →", title: "Chess Game" , href: "https://github.com/gabrielcaligiuri/chess-game", description: "A playable Java chess game, built for 2 local players. Features complete piece movement, game rule enforcement, and clean UI components."}
]
export default function Projects() {
    return (
      <div className="project_container">
      {projects.map((project, index) => (
        <div className="project_card">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.href} target="_blank">{project.label}</a>
        </div>
      ))}
      </div>
    )
};