import React, { Component } from "react";
import './Nav.css';
import logo from '../images/brain.png';
class Navbar extends React.Component {

  render() {
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');
        
        
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        // Burger Animation
        burger.classList.toggle('toggle');
      
    }

    return (
      <div className="container">
        <link rel="stylesheet" href="styles/Nav.css" />
        <nav>
          <div className="logo">
              <a href="index.html">
                {/* <img class="myLogo" src="Project/images/LOGO.png" alt="logo"> */}
                <h1 className="h1-logo">BrainGYM <i className="fas fa-brain"></i></h1>
              </a> 
            
          </div>
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">My Statistics</a>
            </li>
            <li>
              <a href="#">Account Settings</a>
            </li>
          </ul>
          <div className="burger" onClick={navSlide}>
            <div className="lin1"></div>
            <div className="lin2"></div>
            <div className="lin3"></div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
