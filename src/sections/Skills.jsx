
import React from "react";
import {
  Code2,
  Database,
  Wrench,
  Lightbulb,
  Globe,
  GitBranch
} from "lucide-react";

import "../styles/Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building responsive and user-friendly interfaces.",
      icon: <Code2 />,
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Bootstrap",
        "Responsive Design"
      ]
    },
    {
      title: "Programming",
      description: "Programming fundamentals and problem solving.",
      icon: <Lightbulb />,
      skills: ["JavaScript", "Python"]
    },
    {
      title: "Database & Backend",
      description: "Working with databases and application APIs.",
      icon: <Database />,
      skills: ["MongoDB", "MySQL", "Node.js", "Express.js", "REST APIs"]
    },
    {
      title: "Tools & Other Skills",
      description: "Tools and practices used during development.",
      icon: <Wrench />,
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Prompt Engineering",
        "SEO Optimization"
      ]
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <span className="skills-subtitle">MY EXPERTISE</span>
          <h2>Skills & Technologies</h2>
          <p>
            Technologies and tools I use to build responsive,
            functional, and user-friendly web applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>

              <div className="skill-icon">
                {category.icon}
              </div>

              <h3>{category.title}</h3>

              <p className="skill-description">
                {category.description}
              </p>

              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
