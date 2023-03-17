import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import "./Hero.css";
import "./About.css";
import "./Skills.css";
import "./Project.css";
import "./Contact.css";
import Animation from "./Animation";
import SvgImage from "./Svg";
import Card from "./Card";

function Home() {
  return (
    <>
      <nav className="nav">
        <div className="logo">
          <a href="#">Raja</a>
        </div>
        <div id="mainListDiv" class="main_list">
          <ul class="navlinks">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <span class="navTrigger">
          <i></i>
          <i></i>
          <i></i>
        </span>
      </nav>
      <section class="home"></section>

      {/*########################## Hero Section ################################### */}
      <section className="hero">
        <div className="hero__content">
          <div className="right">
            <Animation />
          </div>
          <h1 className="hero__heading">
            Hello, <br></br> I'm Raja <br></br> Web Developer
          </h1>
          <p className="hero__description">
            Greetings! My name is Raja Kumar, a Full Stack Web Developer based
            in New Delhi, India. I specialize in developing high-quality
            websites using HTML, CSS, and JavaScript, as well as utilizing
            frameworks such as Bootstrap, MongoDB, Node.js, and ExpressJS to
            deliver faster development times and more accurate results.
          </p>
          <a href="www.resume.com">
            <button className="resume__button"> Resume</button>
          </a>
        </div>
      </section>

      {/*########################## About Section ################################### */}
      <section className="about-section">
        <div className="about-content">
          <h2 className="about-heading">About Me</h2>
          <p className="about-text">
            Hi, I'm Raja Kumar, a full-stack web developer with one year of
            experience in developing and delivering high-quality websites and
            web applications. I have a passion for creating user-friendly and
            intuitive websites that provide an exceptional experience for users.
            My expertise in HTML, CSS, JavaScript, and various web development
            frameworks allows me to build fast and responsive web solutions.
            Nowadays i am pursuing BCA (computer science) from Galgotias
            University, Uttar-Pradesh. I have done my schooling from A A M
            Children's Academy Katihar, Bihar With computer science. In my free
            time, I enjoy experimenting with new web technologies and keeping up
            to date with the latest industry trends. I am always looking for new
            and challenging projects to work on and am committed to delivering
            exceptional results for my clients. In my free time, I enjoy
            experimenting with new web technologies and keeping up to date with
            the latest industry trends. I am always looking for new and
            challenging projects to work on and am committed to delivering
            exceptional results for my clients.
          </p>
          <button className="cta-button">View Projects</button>
        </div>
        <div className="about-image">{/* add your about image here */}</div>
      </section>

      {/*########################## Skills and experience Section ################################### */}
      <section className="skills-section">
        <div className="skills-content">
          <div className="right-skills">
            <div className="img-container">
              <div className="svg-icon">
                <SvgImage />
                <SvgImage />
                <SvgImage />
                <SvgImage />
                <SvgImage />
                <SvgImage />
                <SvgImage />
                <SvgImage />
                <SvgImage />
              </div>
            </div>
          </div>
          <h2 className="skills-heading">Skills & Experience</h2>
          <p className="skills-text">
            I'm a web developer with a focus on the MERN stack, but still
            exploring other technologies and frameworks that catch my interest!
            if you're looking for a developer to add to your team, I'd love to
            hear from you! <br></br> <br></br>I specialize in creating
            beautiful, usable, professional website using best practice
            accessibility using HTML, CSS, and JS spectrum of web technologies
            what let me gather a significant amount of various experience. in my
            college and I have learned each and every skill's from Google,
            YouTube, and teachers, etc.
          </p>
        </div>
      </section>

      {/*########################## Projects Section ################################### */}
      <section className="projects-section">
        <div className="projects-content">
          <h2 className="projects-heading">Projects</h2>
          <p className="project-mainbrief">
            Here are the recents projects that i have done using HTML, CSS,
            JavaScript and the frameworks such as ReactJS and Bootstrap. For
            more projects , visit my Github profile.
          </p>
          <Card />
        </div>
      </section>

      {/*########################## Contact Section ################################### */}
      <section className="contacts">
        <h2>Contact</h2>
        <div className="row">
          <div className="column1">
            <h3>Get in touch with me </h3>
            <div className="Contact-details">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="sender-name"
                placeholder="Enter Your Name"
                className="input-field"
                required
              />
            </div>
            <div className="Contact-details">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="sender-email"
                placeholder="Enter Your Email"
                className="input-field"
                required
              />
            </div>
            <div className="Contact-details">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                cols="60"
                rows="10"
                placeholder="Enter Your Message"
                name="message"
                className="input-field"
                required
              ></textarea>
            </div>
            <button className="submit">Send</button>
          </div>
          <div className="column2" style={{ backgroundColor: "black" }}>
            <div className="direct-contact-container">
              <ul className="contact-list">
                <li className="list-item">
                  <i className="fa fa-map-marker fa-2x">
                    <span className="contact-text place">
                      New-Delhi , India
                    </span>
                  </i>
                </li>
                <li className="list-item">
                  <i className="fa fa-phone fa-2x">
                    <span className="contact-text phone">
                      <a href="tel:7903765195" title="Give me a call">
                        7903765195
                      </a>
                    </span>
                  </i>
                </li>
                <li className="list-item">
                  <i className="fa fa-envelope fa-2x">
                    <span className="contact-text gmail">
                      <a href="mailto:#" title="Send me an email">
                        rajakumarmahto952@gmail.com
                      </a>
                    </span>
                  </i>
                </li>
              </ul>
              <ul className="social-media-list">
                <li>
                  <a href="#" target="_blank" className="contact-icon">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="contact-icon">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="contact-icon">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="contact-icon">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
              <hr></hr>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer-section">
        <p>
          Built with &#x2661; by
          <a href="https://twitter.com/rajakumar952" target="_blank">
            Raja kumar
          </a>
        </p>
      </footer>
    </>
  );
}

export default Home;
