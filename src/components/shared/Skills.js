import React from 'react';
import '../../css/skills.css';
import ReactIcon from '../../images/icons/devIcons/react.svg';
import HtmlIcon from '../../images/icons/devIcons/html.svg';
import JsIcon from '../../images/icons/devIcons/js.svg';
import CssIcon from '../../images/icons/devIcons/css.svg';
import SqlIcon from '../../images/icons/devIcons/database.svg';
import RubyIcon from '../../images/icons/devIcons/rails.svg';
import NodeIcon from '../../images/icons/devIcons/node.svg';
import PythonIcon from '../../images/icons/devIcons/python.svg';
import GoIcon from '../../images/icons/devIcons/golang.svg';

const Skills = () => (
  <div>
    <div id='skills' className='header'>SKILLS</div>
    <div>
      <div className='skills-wrapper'>
        <h1>CURRENT SKILLS</h1>
        <div className='skills'>
          <div className='skill'>
            <div className='image'><img src={ReactIcon} alt='icon' /></div>
            <p>React</p>
          </div>
          <div className='skill'>
            <div className='image'><img src={RubyIcon} alt='icon' /></div>
            <p>Ruby on Rails</p>
          </div>
          <div className='skill'>
            <div className='image'><img src={SqlIcon} alt='icon' /></div>
            <p>SQL</p>
          </div>
          <div className='skill'>
            <div className='image'><img src={HtmlIcon} alt='icon' /></div>
            <p>HTML</p>
          </div>
          <div className='skill'>
            <div className='image'><img src={JsIcon} alt='icon' /></div>
            <p>Javascript</p>
          </div>
          <div className='skill'>
            <div className='image'><img src={CssIcon} alt='icon' /></div>
            <p>CSS</p>
          </div>
        </div>
      </div>
      <div className='skills-wrapper'>
        <h1>SKILLS IN DEVELOPMENT</h1>
        <div className='skills'>
          <div className='skill'>
            <div className='image'><img src={NodeIcon} alt='icon' /></div>
            <p>NodeJS</p>
          </div>
          <div className='skill'>
            <div className='image'><img src={PythonIcon} alt='icon' /></div>
            <p>Python</p>
          </div>
          <div className='skill'>
            <div className='image'><img src={GoIcon} alt='icon' /></div>
            <p>Go</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Skills