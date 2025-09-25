import React from "react";
import { motion } from 'framer-motion';


const projects = [
  {
    title: "Motorcycle E-commerce",
    description: "🛵 A full-featured e-commerce platform for motorcycle enthusiasts.",
    language: "React.js & Node.js",
    size: "11.7 MB",
    link: "https://elbossely-bikeshop-frontend-2rin.vercel.app/"
  },
  
  {
    title: "Expense Tracker",
    description: "💸 Awesome expence tracker webapp using Node.js and MySQL...",
    language: "JavaScript",
    size: "13.8 MB",
    link: "https://github.com/YahiaSalah11/Financial-Manager"
  },
  {
    title: "claude monet gallery",
    description: "📷 A Gallery for the paintings of Claude Monet and brief about his life.",
    language: "JavaScript",
    size: "9 MB",
    link:"https://github.com/YahiaSalah11/gallerieWithReact"
  },
  {
    title: "MyPortfolio",
    description: "🚀 Fullstack Developer Portfolio that helps you showcase...",
    language: "React.js",
    size: "11.7 MB",
    link: "https://github.com/YahiaSalah11/MyPortfolio"
  }
];

const Projects = () => {
  return (                    
  
  <section id="projects" className="projects-section">
                <motion.div 
                className="education-section"
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.2 }}
                >

                    <h2 className="projects-title">Open Source Projects</h2>
                    <div className="projects-grid">

                        {projects.map((project, index) => (
                          <a href={project.link} key={index} className="project-card" target="_blank" rel="noopener noreferrer">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-info">
                              <span className="language">🟡 {project.language}</span>
                              <span className="size">{project.size}</span>
                            </div>
                          </a>
                        ))}
                        
                    </div>


                    <div className="MoreProjects">
                        <a href="https://github.com/YahiaSalah11?tab=repositories" target="_blank" rel="noopener noreferrer">More Projects</a>
                    </div>

            </motion.div>
    </section>

  );
};

export default Projects;
