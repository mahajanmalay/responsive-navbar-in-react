import React, { useState } from 'react'
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"
import "./navbar.css";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons]= useState(false);
  return (
    <>
        <nav className='main-nav'>
        {/* logo part */}
            <div className="logo">
                <h2>
                <span>C</span>k
                <span>T</span>echnologies
                </h2>
            </div>
        {/* menu part */}
            <div className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Home</a></li>
                    <li><a href="">Home</a></li>
                </ul>
            </div>

            {/* social media links */}
            <div className="social-media">
                <ul className="social-media-desktop">
                    <li><a href="https://github.com/mahajanmalay/" target="_malay"><FaGithub className='github'/></a></li>
                    <li><a href="https://www.linkedin.com/in/malay-mahajan-2889301a5/" target="_malay"><FaLinkedin className='linkedin'/></a></li>
                    <li><a href="https://www.youtube.com/@malaymahajan2492/" target="_malay"><FaYoutube className='youtube'/></a></li>
                </ul>
                {/* hamburger menu start */}
                <div className="hamburger-menu">
                    <a href="#" onClick={()=> setShowMediaIcons(!showMediaIcons)}>
                        <GiHamburgerMenu />
                    </a>
                </div>
            </div>
        </nav>

        {/* home section */}
        <section className="home-section">
            <p>Welcome to <h2>CkTechnologies</h2> </p>
        </section>
    </>
  )
}

export default Navbar;
