import React from 'react';
import '../../css/skills.css';
import ReactIcon from '../../images/icons/devIcons/React.png';
import HtmlIcon from '../../images/icons/devIcons/HTML.png';
import JsIcon from '../../images/icons/devIcons/JS.png';
import CssIcon from '../../images/icons/devIcons/CSS.png';
import SqlIcon from '../../images/icons/devIcons/SQL.png';
import RubyIcon from '../../images/icons/devIcons/Ruby.png';
import NodeIcon from '../../images/icons/devIcons/NodeJS.png';
import PythonIcon from '../../images/icons/devIcons/Python.png';
import GoIcon from '../../images/icons/devIcons/GoLang.png';

const Skills = () => (
  <div id='skills'>
    <div className='skills-wrapper'>
      <div>Current Skills:</div>
      <div className='skills'>
        <div className='skill'>
          <img src={ReactIcon} alt='icon' />
          <p>React</p>
        </div>
        <div className='skill'>
          <img src={RubyIcon} alt='icon' />
          <p>Ruby on Rails</p>
        </div>
        <div className='skill'>
          <img src={SqlIcon} alt='icon' />
          <p>SQL</p>
        </div>
        <div className='skill'>
          <img src={HtmlIcon} alt='icon' />
          <p>HTML</p>
        </div>
        <div className='skill'>
          <img src={JsIcon} alt='icon' />
          <p>Javascript</p>
        </div>
        <div className='skill'>
          <img src={CssIcon} alt='icon' />
          <p>CSS</p>
        </div>
      </div>
    </div>
    <div className='skills-wrapper'>
      <div>Skills in Development:</div>
      <div className='skills'>
        <div className='skill'>
          <img src={NodeIcon} alt='icon' />
          <p>NodeJS</p>
        </div>
        <div className='skill'>
          <img src={PythonIcon} alt='icon' />
          <p>Python</p>
        </div>
        <div className='skill'>
          <img src={GoIcon} alt='icon' />
          <p>Go</p>
        </div>
      </div>
    </div>
  </div>
)

export default Skills