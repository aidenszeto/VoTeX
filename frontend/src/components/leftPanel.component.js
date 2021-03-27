import React from 'react'
import Dictaphone from './record.component.js'

const LeftPanel = () => {
  return (
    <div className="left-panel">
      <h1>Get Started</h1>
      <p>Say something like "Integral from negative one to one of x squared dx equals zero."</p>
      <Dictaphone />
    </div>
  )
};

export default LeftPanel;
