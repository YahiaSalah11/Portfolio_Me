// MainSection.jsx
import React, { useEffect } from 'react';
import { Box, Typography, Link } from '@mui/material';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook , FaHtml5, FaCss3Alt, FaSass, FaJsSquare, FaReact, FaNodeJs, FaSwift, FaNpm, FaDatabase, FaAws, FaFire} from "react-icons/fa";
import Lottie from "lottie-react";
import WavingAnimations from '../Animations/WavingAnimations.json';
import TypingAnimation from '../Animations/Animation - 1745766027455.json';
import universityLogo from '../Animations/Cairo University.png'; 


import { SiPython, SiDocker } from "react-icons/si";
import { motion } from 'framer-motion';





const MainSection = () => {

// Notify webhook that will be sent by email when the page is opened for first time or after 30 minutes

  useEffect(() => {
    const notifiedAt = localStorage.getItem("notified_at");

    // If not notified yet or more than 30 minutes (1800000 ms) have passed
    if (!notifiedAt || Date.now() - parseInt(notifiedAt) > 1800000) {
      setTimeout(() => {
        fetch("https://hooks.zapier.com/hooks/catch/23914240/uuh6qhu/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            message: "Visitor opened the portfolio site",
          }),
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Webhook failed");
            }
          })
          .catch((error) => {
            console.warn("Zapier webhook failed:", error.message);
          });

        // Save current time so we don't notify again within 30 mins
        localStorage.setItem("notified_at", Date.now().toString());
      }, 2000); // wait 2 seconds before sending to prevent fetching leaks
    }
  }, []);


  return (

    <section className="main">

      <div className="MainFirst">
        <div className="MainFirstText">

          <Typography variant="h1">Hi All, I'm Yahia</Typography>
          <Typography variant="h4">Full-Stack Developer</Typography>
          <div className='contentP'>
            <Typography variant="h5">A dedicated Full Stack Developer 🚀 transitioning from a background in Data Science and AI, skilled in creating dynamic web applications with JavaScript, Node.js, and EJS, and passionate about building smart, data-driven backend systems.</Typography>
          </div>

          <div className="social-icons">
            <a href="https://github.com/YahiaSalah11" target="_blank" rel="noopener noreferrer" className="icon-github">
              <FaGithub size={32} />
            </a>
            <a href="https://www.linkedin.com/in/yahia-elsherif-b486841b5/" target="_blank" rel="noopener noreferrer" className="icon-linkedin">
              <FaLinkedin size={32} />
            </a>
            <a href="https://facebook.com/yourUsername" target="_blank" rel="noopener noreferrer" className="icon-facebook">
              <FaFacebook size={32} />
            </a>
            <a href="https://www.instagram.com/yahiasalah11/" target="_blank" rel="noopener noreferrer" className="icon-instagram">
              <FaInstagram size={32} />
            </a>
          </div>

          <div className='ContactMeAndDownloadResumeBottons'>
            <a href='#contact'>Contact Me</a>
            <a className='downloadResume' href="/Yahia Elsherif DA Resume.pdf" download="Resume" >
              Download Resume
            </a>
          </div>
        </div>

        <div className='TypingAnimation'>
          <Lottie
            animationData={WavingAnimations}
            loop={true}
            className="WavingAnimations"
          />
        </div>
      </div>




      
      <div className='MainSecond'>

        <motion.div 
          className="education-section"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }} 
        >
          <div className='TypingAnimationDiv'>
            <Lottie
              animationData={TypingAnimation}
              loop={true}
              className="TypingAnimations"
            />
 
          </div>
        </motion.div>


      <div id='skills'>
        <motion.div 
          className="education-section"
          initial={{ x: +200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }} 
        >
              <div className='MainSecondText'>
                <Typography variant="h3" gutterBottom>What I do</Typography>
                <Typography variant="h6" className="description-text">
                CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
                </Typography>

                {/* Tech icons */}
                <div className="tech-icons">
                        <div className="tech-icon">
                        <FaHtml5 size={50} />
                        </div>
                        <div className="tech-icon">
                        <FaCss3Alt size={50} />
                        </div>
                        <div className="tech-icon">
                        <FaSass size={50} />
                        </div>
                        <div className="tech-icon">
                        <FaJsSquare size={50} />
                        </div>
                        <div className="tech-icon">
                        <FaReact size={50} />
                        </div>
                        <div className="tech-icon">
                        <FaNodeJs size={50} />
                        </div>
                        <div className="tech-icon">
                        <FaSwift size={50} />
                        </div>
                        <div className="tech-icon">
                        <FaNpm size={50} />
                        </div>
                        <div className="tech-icon">
                        <FaDatabase size={50} />
                        </div>
                        <div className="tech-icon">
                        <FaAws size={50} />
                        </div>
                        <div className="tech-icon">
                        <FaFire size={50} />
                        </div>
                        <div className="tech-icon">
                        <SiPython size={50} />
                        </div>
                        <div className="tech-icon">
                        <SiDocker size={50} />
                </div>
              </div>

              {/* Features list */}
              <Box className="features-list">
              <Typography variant="h6" className="feature-text">
                  Develop highly interactive Front end / User Interfaces for your web and mobile applications Progressive Web Applications (PWA) in normal and SPA Stacks Integration of third party services such as Firebase / AWS / Digital Ocean
              </Typography>

              </Box>
          </div>

        </motion.div>
        </div>


        
    </div>



    <motion.div 
        className="education-section"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }} 
      >
        <h2 className="education-title">Education</h2>

        <div className="education-content">

          <img 
            src={universityLogo} 
            alt="Cairo University Logo" 
            className="education-logo"
          />

          <div className="education-details">
            <h3 className="university-name">Cairo University</h3>
            <h4 className="degree">Bachelor of Computer Science - Artificial Intelligence Section</h4>
            <p className="study-duration">September 2020 - April 2024</p>
          </div>
        </div>
      </motion.div>





    </section>
  );
};

export default MainSection;





































