import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-heading">
          <p className="about-subtitle">GET TO KNOW ME</p>
          <h2>About <span>Me</span></h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <h3>Creating Modern & User-Friendly Web Experiences.</h3>

            <p>
              Hello! I'm Gayathri, a Computer Science Engineering
              graduate and aspiring Web Developer passionate about
              building modern, responsive and user-friendly web
              applications.
            </p>

            <p>
              I enjoy turning ideas into functional digital
              experiences using HTML, CSS, JavaScript and React.js.
              I focus on creating clean interfaces, improving user
              experiences and developing responsive websites that
              work seamlessly across different devices.
            </p>

            <p>
              Through practical projects and hands-on development
              experience, I continuously strengthen my technical
              skills and explore new technologies. My goal is to
              grow as a Web Developer and contribute to building
              meaningful and impactful digital solutions.
            </p>

            <a href="#contact" className="about-button">
              Let's Connect
            </a>
          </div>

          <div className="about-details">

            <div className="about-card">
              <span>01</span>
              <h4>Education</h4>
              <p>B.E. Computer Science Engineering</p>
              <small>
                St. Peter's College of Engineering and Technology
              </small>
            </div>

            <div className="about-card">
              <span>02</span>
              <h4>Expertise</h4>
              <p>Web Development</p>
              <small>
                HTML · CSS · JavaScript · MySql · React.js 
              </small>
            </div>

            <div className="about-card">
              <span>03</span>
              <h4>My Approach</h4>
              <p>Learn, Build and Innovate</p>
              <small>
                Practical projects · Problem-solving · Continuous learning
              </small>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
