import React from 'react';

function Projects() {
    const projectList = [
        {
            title: "Personal Portfolio",
            description: "A professional React-based portfolio featuring interactive sections, custom CSS animations, and a functional contact system.",
            tech: ["React", "JavaScript", "CSS3"],
            link: "https://github.com/yourusername/portfolio"
        },
        {
            title: "Technical Documentation App",
            description: "A system designed to organize core CS concepts like Operating Systems and Computer Networks for easy reference.",
            tech: ["HTML", "CSS", "JS"],
            link: "#"
        },
        {
            title: "Mobile App Concept",
            description: "Exploring mobile application development principles and user interface design for cross-platform utility.",
            tech: ["React Native", "Firebase"],
            link: "#"
        }
    ];

    return (
        <section className="page-section">
            <h2 className="section-title">My Professional Work</h2>
            <div className="projects-grid">
                {projectList.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tech-stack">
                                {project.tech.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
                            </div>
                            <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                                View Source Code
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;