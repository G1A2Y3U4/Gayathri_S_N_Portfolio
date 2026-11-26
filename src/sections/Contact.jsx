
import React, { useState } from "react";

import {
  Mail,
  MapPin,
  Send,
  ArrowUpRight
} from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const emailAddress = "gayathrisankaran14@gmail.com";

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
  };

  // Submit form using Web3Forms
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    try {
      const formElement = e.currentTarget;
      const submissionData = new FormData(formElement);

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: submissionData
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        console.error("Web3Forms Error:", result);
        setStatus("error");
      }

    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");

    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* SECTION HEADING */}
        <div className="contact-heading">
          <span>GET IN TOUCH</span>
          <h2>Let's Connect</h2>
          <p>
            Have a project, opportunity, or collaboration in mind?
            Feel free to reach out. I'd love to hear from you.
          </p>
        </div>

        <div className="contact-content">

          {/* LEFT SIDE - CONTACT DETAILS */}
          <div className="contact-left">

            <div className="contact-intro">
              <div className="contact-icon">
                <Mail size={28} />
              </div>

              <h3>Let's Start a Conversation</h3>

              <p>
                I'm interested in frontend development opportunities,
                web development projects, and meaningful collaborations.
                Let's create something valuable together.
              </p>
            </div>

            {/* EMAIL */}
            <a
              href={`mailto:${emailAddress}`}
              className="contact-info-item"
            >
              <div className="info-icon">
                <Mail size={21} />
              </div>

              <div className="info-content">
                <span>Email Address</span>
                <strong>{emailAddress}</strong>
              </div>

              <ArrowUpRight
                className="contact-arrow"
                size={19}
              />
            </a>

            {/* LOCATION */}
            <div className="contact-info-item">
              <div className="info-icon">
                <MapPin size={21} />
              </div>

              <div className="info-content">
                <span>Location</span>
                <strong>Chennai, India</strong>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="contact-social-section">
              <h4>Connect With Me</h4>

              <div className="contact-socials">

                <a
                  href="https://www.linkedin.com/in/gayathri-sankaran-3b3695280/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={21} />
                </a>

                <a
                  href="https://github.com/G1A2Y3U4"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub size={21} />
                </a>

                <a
                  href={`mailto:${emailAddress}`}
                  aria-label="Email"
                >
                  <Mail size={21} />
                </a>

              </div>
            </div>

          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <div className="contact-form-card">

            <div className="form-heading">
              <h3>Send Me a Message</h3>
              <p>Fill out the form below to get in touch.</p>
            </div>

            <form onSubmit={handleSubmit}>

              {/* MANDATORY WEB3FORMS ACCESS KEY */}
              <input
                type="hidden"
                name="access_key"
                value="72960cf9-769a-4372-81e2-1c881476bd2e"
              />

              {/* EMAIL SUBJECT */}
              <input
                type="hidden"
                name="subject"
                value="New Contact Message from Portfolio"
              />

              {/* NAME */}
              <div className="form-group">
                <label htmlFor="name">Your Name</label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="form-group">
                <label htmlFor="email">Your Email</label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>

              {/* MESSAGE */}
              <div className="form-group">
                <label htmlFor="message">Your Message</label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your opportunity or project..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="send-message-btn"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}
                <Send size={17} />
              </button>

            </form>

            {/* SUCCESS MESSAGE */}
            {status === "success" && (
              <p className="form-note" role="status">
                Thank you! Your message has been sent successfully.
              </p>
            )}

            {/* ERROR MESSAGE */}
            {status === "error" && (
              <p className="form-note" role="alert">
                Unable to send your message. Please try again.
              </p>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
