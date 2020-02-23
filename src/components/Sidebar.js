import React from 'react';
import FbIcon from '../images/icons/social/facebook.svg';
import GithubIcon from '../images/icons/social/github.svg';
import InstaIcon from '../images/icons/social/instagram.svg';
import LinkedinIcon from '../images/icons/social/linkedin.svg';
import TwitterIcon from '../images/icons/social/twitter.svg';

const Sidebar = () => (
  <div className='sidebar'>
    <div>
      <img className='profile' src="https://media-exp1.licdn.com/dms/image/C5603AQHiVUv_t5gdeQ/profile-displayphoto-shrink_200_200/0?e=1587600000&v=beta&t=qzWdRGTeELZb80BDjj7hbWI98H44BWXHgJpcU7LFdq4" alt='profile pic' />
    </div>
    <a href='#home'>Home</a>
    <a href='#about'>About</a>
    <a href='#skills'>Skills</a>
    <a href='#projects'>Projects</a>
    <a href='#hobbies'>Hobbies</a>
    <a>Resume</a>
    <a>Contact Me</a>
    <div className='social-wrapper'>
      <a>Follow Me @</a>
      <div className='social'>
        <a href="https://www.github.com/ACookson95" rel="noopener noreferrer" target="_blank"><img src={GithubIcon} alt="social"/></a>
        <a href="https://www.linkedin.com/in/aaron-cookson/" rel="noopener noreferrer" target="_blank"><img src={LinkedinIcon} alt="social"/></a>
        <a href="https://www.facebook.com/Cookson.Aaron" rel="noopener noreferrer" target="_blank"><img src={FbIcon} alt="social"/></a>
        <a href="https://www.instagram.com/aaron_cookson/" rel="noopener noreferrer" target="_blank"><img src={InstaIcon} alt="social"/></a>
        <a href="https://www.twitter.com/aaroncookson?lang=en" rel="noopener noreferrer" target="_blank"><img src={TwitterIcon} alt="social"/></a>
      </div>
    </div>
  </div>
)

export default Sidebar