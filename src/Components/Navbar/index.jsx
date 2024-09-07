/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Style from './style.module.css' 
function Navigation() {
  return (
    
    
    <header>
    <nav className={Style.nav}>
   
    <ul className={"Style.nav-selector"} >
        <li>
       <span className={Style.logo}>
          <img className={Style.logo-1} href="#" src="/images/Newlogo.png" alt="logo" />
          <span className="minitext" a href="#">v18.3.1</span>
          </span>      
      </li>
      <li><input type="search" placeholder="Search" /></li>
      <li><a href='#'>Learn</a></li>
      <li><a href='#'>Reference</a></li>
      <li><a href='#'>Community</a></li>
      <li><a href='#'>Blog</a></li>
      <img href='#' className="icon"src="/images/moon.png" alt="" />
          <img href="#" className="icon"src="/images/tranlsator.png" alt="" />
            <img href="#" className="icon"src="/images/github.png" alt="" />

    </ul>
  </nav>
  {/* 
<nav role="navigation">

<div className={Style.Hamburger}>
 <div id={Style.menuToggle}>
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul id={Style.menu}>
      <li><a href='#'>Learn</a></li>
      <li><a href='#'>Reference</a></li>
      <li><a href='#'>Community</a></li>
      <li><a href='#'>Blog</a></li>
    </ul>
    
  </div>
 <img className={Style.logo-2} src='/images/logo.png' alt='' />
  <img href='#' className={Style.icon}src="/images/moon.png" alt="" />
          <img href="#" className={Style.icon}src="/images/tranlsator.png" alt="" />
            <img href="#" className={Style.icon}src="/images/github.png" alt="" />
            </div>
</nav>  */}
</header>

)
}

export default Navigation;