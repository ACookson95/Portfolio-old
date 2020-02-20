import React from 'react';
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
  <div>
    <div className='skills-wrapper'>
      <div>Current Skills:</div>
      <div className='skills'>
        <div className='skill'>
          <img src={ReactIcon} />
          <p>React</p>
        </div>
        <div className='skill'>
          <img src={RubyIcon} />
          <p>Ruby on Rails</p>
        </div>
        <div className='skill'>
          <img src={SqlIcon} />
          <p>SQL</p>
        </div>
        <div className='skill'>
          <img src={HtmlIcon} />
          <p>HTML</p>
        </div>
        <div className='skill'>
          <img src={JsIcon} />
          <p>Javascript</p>
        </div>
        <div className='skill'>
          <img src={CssIcon} />
          <p>CSS</p>
        </div>
      </div>
    </div>
    <div className='skills-wrapper'>
      <div>Skills in Development:</div>
      <div className='skills'>
        <div className='skill'>
          <img src={NodeIcon} />
          <p>NodeJS</p>
        </div>
        <div className='skill'>
          <img src={PythonIcon} />
          <p>Python</p>
        </div>
        <div className='skill'>
          <img src={GoIcon} />
          <p>Go</p>
        </div>
      </div>
    </div>
  </div>
)

export default Skills