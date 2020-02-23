import React from 'react';
import Cover from './Cover';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Hobbies from './Hobbies';

const Home = () => (
  <div className='home'>
    <Cover />
    <About />
    <Skills />
    <Projects />
    <Hobbies />
  </div>
)

export default Home