import React from 'react';
import ReactPlayer from 'react-player';
import '../../css/cover.css';
import DownArrow from '../../images/icons/misc/downarrow.svg';

const Cover = () => (
  <div id='home'>
    <div className='wrapper'>
      <ReactPlayer 
        className='background-video'
        url='https://vimeo.com/33382602' 
        playing 
        loop 
        muted 
        controls={false}
        width='100%'
        height='100%'
      />
      <div className='title'><h1>Hello, I'm Aaron <br /> Cookson.</h1></div>
    </div>
    <a href="#about">
      <div className="next-section">
        <h4>GET TO KNOW ME</h4>
        <img src={DownArrow} alt='Down Arrow'></img>
      </div>
    </a>
  </div>
)

export default Cover