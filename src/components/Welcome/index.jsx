import React from 'react'
import Typical from 'react-typical'

import './welcome.scss'

const Index = () => {

  const texts = [
    `I'm a developer`, 2500,
    `I'm a student`, 2500,
  ];

  return (
      <div className="welcomeContainer">
        <h2> Andres Pineda</h2>
        <Typical 
          wrapper="span"
          loop={Infinity} 
          steps={texts} 
          className={'dynamicText'}
        />
      </div>
  )
}

export default Index
