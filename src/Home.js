import React, {useState} from "react";
import "./Home.css";
import logo from "./img/logo1.png";

function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
   const [show, setShow] = useState(false);
  return (
    <div className="home" id="Home">
      <div className="home__bg" data-aos="zoom-out" data-aos-duration="500"
     data-aos-easing="ease-in-sine">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img className="logo1" src={logo} alt="" />
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15" data-aos="fade-down">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15" data-aos="fade-down">About</li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15" data-aos="fade-down">Services</li>
              </a>
              <a href="#Portfolio">
                <li className="nav__items mx__15" data-aos="fade-down">Portfolio</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15" data-aos="fade-down">Contact</li>
              </a>
            </ul>
          </div>
          {/* Toogle Menu */}
          <div className="toggle__menu">
            <svg onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ?(
          <div className="sideNavbar">
              <ul className="sidebar d__flex" >
              <li className="sideNavbar" data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="500">
              <a href="#Home">Home</a>
            </li>
            <li className="sideNavbar" data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="500" >
              <a href="#About">About</a>
            </li>
            <li className="sideNavbar" data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="500" >
              <a href="#Services">Services</a>
            </li>
            <li className="sideNavbar" data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="500" >
              <a href="#Portfolio">Portfolio</a>
            </li>
            <li className="sideNavbar" data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="500" >
              <a href="#Contact">Contact</a>
            </li>
              </ul>
          </div>
           ) : null}
        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta" >
              <h1 className="home__text pz__10 " data-aos="fade-right" data-aos-duration="1000"
     data-aos-easing="ease-in-sine">WELCOME TO MY WORLD</h1>
              <h2 className="home__text pz__10" data-aos="fade-right" data-aos-duration="1000"
     data-aos-easing="ease-in-sine">Hi, I’m Pavan Naik</h2>
              <h3 className="home__text sweet pz__10" data-aos="fade-right" data-aos-duration="1000"
     data-aos-easing="ease-in-sine">FullStack Web Developer.</h3>
{/*               <h4 className="home__text pz__10">based in USA.</h4> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
