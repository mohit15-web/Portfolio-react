import React from 'react';
import "./profile.css"
import mohitPic from "../../assets/mohit.png"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const ProfileSection = () => {
  const handleResumeClick = () => {
    window.open('./assets/mohit-resume.pdf');
  };

  const handleContactClick = () => {
    window.location.href = './#contact';
  };

  const handleLinkedInClick = () => {
    window.location.href = 'https://www.linkedin.com/in/mohit-chaudhary-615972238/';
  };

  const handleGithubClick = () => {
    window.location.href = 'https://github.com/mohit15-web';
  };
  

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={mohitPic} alt="mohit profile picture" className='mohitPic'/>
      </div>
      <div className="section__text">
        <p className="section__text__p1 text-slate-500 text-4xl">Hello, I'm</p>
        <h1 className="title text-white text-6xl">Mohit Chaudhary</h1>
        <p className="section__text__p2 text-slate-500 text-4xl">Frontend Developer</p>
        <div className="btn-container">
          <button className="btn btn-color-2 text-white pt-2" onClick={handleResumeClick}>
            Download CV
          </button>
          <button className="btn btn-color-1 pt-2" onClick={handleContactClick}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
        <FaLinkedin onClick={handleLinkedInClick} className='text-white object-cover w-16 h-10'/>
        <FaGithub onClick={handleGithubClick} className='text-white object-cover w-16 h-10'/>
      
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
