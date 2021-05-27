import React from 'react'

import Welcome from 'components/Welcome'
import AboutMe from 'components/AboutMe'
import NavBar from 'components/NavBar'

import './home.scss'

const index = () => {
  return (
    <NavBar>
      <div className="content-container">
        <Welcome />
        <AboutMe />
      </div>
    </NavBar>
  )
}

export default index
