import React from 'react';

export const Start = ({ setUsername }) => {
  return (
    <div className="start">
      <input className="startInput" placeholder="enter your name" />
      <button className="startButton">Start</button>
    </div>
  );
};
