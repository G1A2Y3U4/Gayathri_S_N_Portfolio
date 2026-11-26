
import React from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail, ArrowUpRight } from "lucide-react";

import '../styles/Hero.css';
import professional_photo from '../assets/professional_photo.png';

function Hero() {

  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1 className="hero-name">
            Gayathri S N<span>.</span>
          </h1>

          <h2 className="hero-title">
            FRONTEND <span>DEVELOPER</span>
          </h2>

          <p className="hero-description">
            I build responsive, user-friendly and interactive
            web applications using React and modern web
            technologies. I enjoy transforming ideas into
            meaningful digital experiences through clean
            design and functional code.
          </p>

          {/* ACTION BUTTONS */}
          <div className="hero-buttons">

            <a href="#projects" className="btn-primary">
              EXPLORE PROJECTS
              <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="btn-outline">
              HIRE ME
              <ArrowUpRight size={18} />
            </a>

          </div>

          {/* SOCIAL LINKS */}
          <div className="hero-socials">

            <a
              href="https://github.com/G1A2Y3U4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://linkedin.com/in/gayathri-sankaran-3b3695280/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>

            <a
              href="mailto:gayathrisankaran14@gmail.com"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image-wrapper">

          <div className="hero-image-bg"></div>

          <img
            src={professional_photo}
            alt="Gayathri - Frontend Developer"
            className="hero-image"
          />

          <div className="hero-image-label">
            <span></span>
            Open to Opportunities
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
