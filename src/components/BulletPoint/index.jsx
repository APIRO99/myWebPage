import React from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5'

import './bulletpoint.scss'

const index = ({ title, content }) => {
  return (
    <div className="bullet-point">
      <IoChevronForwardOutline color="#0466c8"/>
      <p className="title text">{title}:</p>
      <p className="content text">{content}</p>
    </div>
  )
}

export default index
