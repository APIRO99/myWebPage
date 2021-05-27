import React from 'react'
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io5'

import './header.scss'

const Index = () => {
  return (
    <div className="container">
      <img 
        className="navBarImage"
        src="https://firebasestorage.googleapis.com/v0/b/myresume-a24db.appspot.com/o/img%2FprofileK.jpg?alt=media&token=e868ff94-8949-4782-97eb-5a522c7fb43e" 
        alt="" />
      <h2>Andres Pineda</h2>
      <div className="socialMedia">
        <a href='https://www.facebook.com/Apiro99/' className="socialMediaIcon">
          <IoLogoFacebook />
        </a>
        <a href='https://twitter.com/APIRO99' className="socialMediaIcon">
          <IoLogoTwitter />
        </a>
        <a href='https://www.instagram.com/apiro99/' className="socialMediaIcon">
          <IoLogoInstagram />
        </a>
      </div>

    </div>
  )
}

export default Index
