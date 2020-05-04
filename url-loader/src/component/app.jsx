import React from 'react';
import './../css/styles.css';
import data from './../data.json';
import logo from './../assests/images/lemon-and-limes.png';
import video from './../assests/videos/coverr-cutting-steak.mp4';
import videopost from './../assests/videos/coverr-cutting-steak.jpg';

const App = () => {
  console.log(data);

  return (
    <div>
      <h1>Hola mundo</h1>;
      <img src={logo} width={40} />
      <video controls poster={videopost} width={360}>
        <source src={video} />
      </video>
    </div>
  );
};

export default App;
