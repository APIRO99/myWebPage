import React, { useState } from 'react'

import Title from 'components/Title'
import BulletPoint from 'components/BulletPoint'
import Fade from 'react-reveal/Fade'
import './aboutme.scss'


const Index = () => {

  const [state, setstate] = useState({
    personalDescription:`Hello! I'm Andres Pineda, someone who loves being in constant learning, a passionate person who loves working in development and i'm currently looking to expand my area of knoledge working in new projects`,
    professionalDescription:`Software Engineering student interested in web development. I have some experience working on projects using different frameworks for both, frontend and backend.`,
    profileURL: 'https://avatars.githubusercontent.com/u/31348546?v=4',
    personalData: {
      Birthday: "2 Feb 1999",
      Age: "22",
      Website: "apiro.dev",
      Phone: "+502 3222 2352",
      Email: "apiro99@outlook.com",
      City: "Guatemala, Guatemala",
    }
  })

  const bulletpoints = (
    <div className="bullet-points">{
    Object
    .entries(state.personalData)
    .map(([key, value]) =>
      <BulletPoint 
        key={key}
        title={key}
        content={value}
      />
    )
    }</div>

  )

  return (
    <div className="aboutme-container">
      <Title text="About Me"/>
      <p className="text">{state.personalDescription}</p>
      <div className="about-content">
        <Fade left>
          <img src={state.profileURL}  alt="Andres Pineda" />
        </Fade>
        <Fade right>
          <div className="personal-info">
            <Title text="Web Developer" showUnderline={false}/>
            <p className="text prof-desc">{state.professionalDescription}</p>
            { bulletpoints }
          </div>
        </Fade>
      </div>

    </div>
  )
}

export default Index
