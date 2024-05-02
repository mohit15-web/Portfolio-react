import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import "./footer.css"

const SocialIcons = () => {
  const handleLinkedInClick = () => {
    window.location.href = 'https://www.linkedin.com/in/mohit-chaudhary-615972238/';
  };

  const handleGithubClick = () => {
    window.location.href = 'https://github.com/mohit15-web';
  };

  const handleInstagramClick = () => {
    window.location.href = 'https://www.instagram.com/_.moxhit._/';
  };

  return (
    <div className='w-[100%] h-[100vh] flex flex-col justify-center items-center  '>
      <div className='text-white text-center'>
        <h1 className='text-3xl '>👋</h1>
      <h1 className='text-3xl font-extrabold py-2'>Thanks for checking my website!</h1>
      {/* <p className='text-2xl font-extrabold'>get in touch (Click to copy)</p> */}
      <p className=' text-xl font-extrabold'>mohitchoudharu2gmail.com</p>
      </div>
    <ul className="wrapper">
      <li className="icon facebook" onClick={handleLinkedInClick}>
        <span className="tooltip">Linkdein</span>
        <FaLinkedin size="1.5em" />
      </li>
      <li className="icon twitter" onClick={handleGithubClick}>
        <span className="tooltip">Github</span>
        <FaGithub size="1.5em" />
      </li>
      <li className="icon instagram" onClick={handleInstagramClick}>
        <span className="tooltip">Instagram</span>
        <FaInstagram size="1.5em" />
      </li>
    </ul>
    </div>
  );
};

export default SocialIcons;
