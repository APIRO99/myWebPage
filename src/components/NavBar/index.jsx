import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'


import { AiFillHome } from 'react-icons/ai'
import { IoPersonOutline, IoReorderFourOutline, IoMailOutline } from 'react-icons/io5'
import { IconContext } from 'react-icons'
import './navbar.scss'

import Header from './Header'

const Index = ({ children }) => {

  const ref = useRef();
  const [showSideBar, setshowSideBar] = useState(window.innerWidth < 1200 ? false : true)
  const toogleSideBar = () => {
    setshowSideBar(!showSideBar);
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      (window.innerWidth < 1200)
        ? setshowSideBar(false)
        : setshowSideBar(true)
    })

    document.addEventListener('mousedown', (ev) => {
      if ((window.innerWidth < 1200) && !ref.current.contains(ev.target)) {
        setshowSideBar(false)
      }
    })
      
    return () => {
      window.removeEventListener('resize', ()=>{});
      document.removeEventListener("mousedown", ()=>{});
    }
  }, [])

  const tempData = [
    {
      title: 'Home',
      path: '/',
      icon: <AiFillHome />,
      cName: 'nav-text'
    },{
      title: 'About Me',
      path: '/',
      icon: <IoPersonOutline />,
      cName: 'nav-text'
    },{
      title: 'Contact Me',
      path: '/', 
      icon: <IoMailOutline />,
      cName: 'nav-text'
    },
  ]

  const mobileView = (
    <div className="appContainer">
    <IconContext.Provider value={{ color: '#fff'}}>
      <div ref={ref}>
        <div className="navbar-button">
          <IoReorderFourOutline className="menu-bars" onClick={toogleSideBar}/>
        </div>

        <nav
          className={showSideBar ? 'nav-menu active' : 'nav-menu'}>
          <Header />
          <ul className='nav-menu-items'>
            {tempData.map((data, index) => { return (
              <li key={index} className={data.cName}>
                <Link to={data.path}>
                  {data.icon}
                  <span>{data.title}</span>
                </Link>
              </li>
            )})}
          </ul>
        </nav>
      </div>
      { children }

      </IconContext.Provider>
    </div>
  )

  const desktopView = (
    <div className="appContainer">
    <IconContext.Provider value={{ color: '#fff'}}>
      <nav
        className={'nav-menu active psabs'}>
        <Header />
        <ul className='nav-menu-items'>
          { tempData.map((data, index) => { return (
            <li key={index} className={data.cName}>
              <Link to={data.path}>
                {data.icon}
                <span>{data.title}</span>
              </Link>
            </li>
          )})}
        </ul>
      </nav>
      { children }

      </IconContext.Provider>
    </div>
  )


  return (window.innerWidth < 1200) ? mobileView : desktopView
}

export default Index
