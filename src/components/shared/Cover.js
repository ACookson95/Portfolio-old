import React from 'react';
import ReactPlayer from 'react-player';
import '../../App.css';

const Cover = () => (
  <div>
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
      <div className='title'><h1>Hello, I'm Aaron.</h1></div>
    </div>
  </div>
)

export default Cover