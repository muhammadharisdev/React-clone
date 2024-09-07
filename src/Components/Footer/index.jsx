/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Style from "./style.module.css"

function Footer() {
  return (
    <footer>
    <div className={Style.company}>
      <p>React  <span>©2023</span></p>
    </div>
    <div className={Style.learnReact}>
      <h3>Learn React</h3>
      <li><a href='#'>Quick Start</a></li>
      <li><a href='#'>Installation</a></li>
      <li><a href='#'>Describing the UI</a></li>
      <li><a href='#'>Adding Interactivity</a></li>
      <li><a href='#'>Managing State</a></li>
      <li><a href='#'>Escape Hatches</a></li>
    </div>
    <div className={Style.APIReference}>
      <h3>API Reference</h3>
      <li><a>React APIs</a></li>
      <li><a>React DOM APIs</a></li>
    </div>
    <div className={Style.Community}>
      <h3>Community</h3>
      <li><a href='#'>Code of Conduct</a></li>
      <li><a href='#'>Meet the Team</a></li>
      <li><a href='#'>Docs Contributors</a></li>
      <li><a href='#'>Acknowledgements</a></li>
    </div>

    <div className={Style.More}>
      <h3>More</h3>
      <li><a href='#'>Quick Start</a></li>
      <li><a href='#'>Blog</a></li>
      <li><a href='#'>React Native</a></li>
      <li><a href='#'>Privacy</a></li>
      <li><a href='#'>Terms</a></li>
       <div className={Style.icons}> 
       <img href='#' className="icon"src="/images/moon.png" alt="" />
          <img href='#' className="icon"src="/images/tranlsator.png" alt="" />
            <img href='#' className="icon"src="/images/github.png" alt="" />
</div>
    </div>

  </footer> 
   )
}

export default Footer