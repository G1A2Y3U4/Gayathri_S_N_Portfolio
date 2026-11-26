
import React from "react";
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  CheckCircle2,
  ExternalLink
} from "lucide-react";

import "../styles/Experience.css";

function Experience() {
  const responsibilities = [
    "Developed website interfaces using HTML, CSS, and JavaScript.",
    "Contributed to website development for online election and e-Ballot systems.",
    "Performed website testing for SecuredVoting.com and Kudvo.com to verify functionality and usability.",
    "Assisted in identifying website issues and checking the functionality of web portal features."
  ];

  const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Website Testing"
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        <div className="experience-heading">
          <span>CAREER JOURNEY</span>
          <h2>Professional Experience</h2>
          <p>My industry experience and practical development exposure.</p>
        </div>

        <div className="experience-card">

          <div className="experience-card-header">
            <div className="experience-icon">
              <BriefcaseBusiness size={25} />
            </div>

            <div className="experience-title">
              <h3>Web Developer Intern</h3>
              <h4>iNodesys Technologies</h4>
            </div>

            <span className="experience-badge">Internship</span>
          </div>

          <div className="experience-meta">
            <span>
              <CalendarDays size={16} />
              January 06 – January 31, 2025
            </span>

            <span>
              <MapPin size={16} />
              Chennai, India
            </span>
          </div>

          <div className="experience-divider"></div>

          <h5 className="experience-subtitle">Key Responsibilities</h5>

          <ul className="experience-list">
            {responsibilities.map((item, index) => (
              <li key={index}>
                <CheckCircle2 size={17} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="experience-divider"></div>

          <h5 className="experience-subtitle">Technologies & Skills</h5>

          <div className="experience-tags">
            {technologies.map((technology, index) => (
              <span key={index}>{technology}</span>
            ))}
          </div>

          <div className="experience-projects">
            <h5>Web Portals Worked On</h5>
            <div className="portal-links">
                  <a href="https://securedvoting.com/"target="_blank" rel="noreferrer">
                    SecuredVoting.com
                  <ExternalLink size={15} />
                  </a>
                  
                  <a href="https://kudvo.com/"target="_blank" rel="noreferrer">
                    Kudvo.com
                  <ExternalLink size={15} />
                  </a>
            </div>
            <p>Online Election and e-Ballot Systems</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;
