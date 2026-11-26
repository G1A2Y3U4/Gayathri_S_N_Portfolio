
import React from "react";

import {
  ExternalLink,
  GraduationCap,
  FileCheck2,
  Users,
  LayoutDashboard
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import "../styles/Projects.css";

function Projects() {

  const projects = [
    {
      title: "Grabit-LMS",
      category: "Web Application",
      icon: <GraduationCap />,

      description:
        "A placement aptitude preparation platform designed to help students practise quantitative aptitude, logical reasoning, and verbal ability through practice activities, timed mock tests, and performance tracking.",

      technologies: [
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB"
      ],

      status: "In Development",
      github: "https://github.com/G1A2Y3U4/Grabit-LMS"
    },

    {
      title: "AuditX",
      category: "Academic Team Project",
      icon: <FileCheck2 />,

      description:
        "A document verification and approval system designed to help academic departments review uploaded records, identify document mismatches, and manage staff and administrator approval workflows.",

      technologies: [
        "Next.js",
        "JavaScript",
        "MongoDB",
        "Document Processing"
      ],

      status: "In Development",
      github: "https://github.com/G1A2Y3U4"
    },

    {
      title: "Employee Management System",
      category: "Full Stack Web Application",
      icon: <Users />,

      description:
        "An employee management application developed to manage employee information and administrative operations through a structured web interface.",

      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "JWT",
        "REST API"
      ],

      status: "Completed",
      github:
        "https://github.com/G1A2Y3U4/WD_2_EmployeeManagementSystem_byte"
    },

    {
      title: "Command Center",
      category: "Task Management Application",
      icon: <LayoutDashboard />,

      description:
        "A collaborative Kanban task management application designed to organize tasks across workflow stages, with task management and real-time collaboration features.",

      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "Socket.IO",
        "JWT"
      ],

      status: "Completed",
      github:
        "https://github.com/G1A2Y3U4/WD_6_CommandCenter_byte"
    }
  ];

  return (
    <section className="projects-section" id="projects">

      <div className="projects-container">

        {/* SECTION HEADING */}

        <div className="projects-heading">

          <span className="projects-subtitle">
            MY WORK
          </span>

          <h2>Featured Projects</h2>

          <p>
            A collection of projects where I apply my
            development skills to build practical,
            functional, and user-friendly applications.
          </p>

        </div>


        {/* PROJECT CARDS */}

        <div className="projects-grid">

          {projects.map((project) => (

            <article className="project-card" key={project.title}>

              {/* CARD TOP */}

              <div className="project-top">

                <div className="project-icon">
                  {project.icon}
                </div>

                <span className={`project-status ${
                  project.status === "Completed"
                    ? "completed"
                    : "development"
                }`}>
                  {project.status}
                </span>

              </div>


              {/* PROJECT DETAILS */}

              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>


              {/* TECHNOLOGIES */}

              <div className="project-technologies">

                {project.technologies.map((technology) => (

                  <span key={technology}>
                    {technology}
                  </span>

                ))}

              </div>


              {/* GITHUB LINK */}

              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                >

                  <FaGithub className="github-icon" />

                  <span>View on GitHub</span>

                  <ExternalLink className="external-icon" />

                </a>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;
