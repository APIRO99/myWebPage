import React from 'react'
import './title.scss'

const index = ({ text, showUnderline=true }) => {
  return (
    <div className="section-title">
      <h1 >{text}</h1>
      {showUnderline && <div></div>}
    </div>
  )
}

export default index
