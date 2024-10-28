import React from 'react';
import './time.css';

const Time = () => {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="container text-center mt-5">
      <h2>Current Time</h2>
      <p>{currentTime}</p>
    </div>
  );
};

export default Time;
