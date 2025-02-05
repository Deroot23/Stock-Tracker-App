 


import   { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'react-router-dom';
 import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import Logo from "../assets/images/logo.png"
import Profile from "../assets/images/profile.png"
import Dash from "../assets/images/dash.png"
import Broker from "../assets/images/broker.png"
import Analytics from "../assets/images/analytics.svg"
import team from "../assets/images/team.png"
 import {faChevronDown} from "@fortawesome/free-solid-svg-icons"
 import {faEllipsisVertical} from "@fortawesome/free-solid-svg-icons"
import tesla from "../assets/images/icons1.png"
 import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import tempus from "../assets/images/icons3.png"
import amazon from "../assets/images/icons4.png"
import about from "../assets/images/Abouti.svg";

import  arrowcircleleft from "../assets/images/arrowcircleleft.svg"
// import expandcircleright from "../assets/images/expandcircleright.svg"
 import '../assets/css/sidebar.css'
import { Link } from "react-router-dom";
 
const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isWatchListVisible, setIsWatchListVisible] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleWatchList = () => {
    setIsWatchListVisible(!isWatchListVisible);
  };

 
  
 useEffect(() => {
    console.log("Updating theme", isDarkMode ? "Dark" : "Light");
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const menu = () => {
    const sideBar = document.getElementById('sideBar');
    if (sideBar) {
      sideBar.classList.toggle('block');
    }
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <img
          src={arrowcircleleft}
          alt="arrow"
          style={{
            position: "absolute",
            right: "-15px",
            top: "110px",
            background: "black",
            padding: "2px",
            borderRadius: "50%",
          }}
          onClick={menu}
        />
        <div id="sideBar" className="sidebar">
          <FontAwesomeIcon
            icon={isDarkMode ? faToggleOff : faToggleOn}
            aria-hidden="true"
            id="toggle"
            onClick={toggleTheme}
          />
          <section>
            <img id="logo" src={Logo} alt="logo" />
            <h1>Stock Tracker</h1>
            <img id="profile" src={Profile} alt="profilePicture" />
          </section>
          <form action="https://www.coingecko.com/en/coins/" name="data-action">
            <input id="searchBar" type="text" placeholder="search" />
          </form>
          <div id="content">
            <div className="sideBarContent">
              <img src={Dash} alt="" id="icons" />
              <Link to="/"  >
                <h3 >Dashboard</h3>
              </Link>
            </div>
            <div className="sideBarContent">
              <img src={Broker} alt="" id="icons" />
              <Link to="/brokage" >
                <h3>Brokerage Account</h3>
              </Link>
            </div>
            <div className="sideBarContent">
              <img src={Analytics} alt="" id="icons" />
              <Link to="/analytics"  >
                <h3>Analytics Integration</h3>
              </Link>
            </div>
            <div className="sideBarContent">
              <img src={team} alt="" id="icons" />
              <Link to="/team">
                <h3>The Team</h3>
              </Link>     
                     </div>
                     <div className="sideBarContent">
              <img src={about} alt="" id="icons" />
              <Link to="/About">
                <h3>About Us</h3>
              </Link>     
                     </div>
          </div>
          <div className="watchListContent">
            <div id="watchListHeader" onClick={toggleWatchList}>
              <FontAwesomeIcon
                icon={faChevronDown}
                id="dropDownImg"
                style={{
                  transform: isWatchListVisible ? 'rotate(0deg)' : 'rotate(180deg)',
                  transition: 'transform 0.3s ease',
                }}
              />
              <h2>My Watch List</h2>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
            {isWatchListVisible && (
              <div>
                <div className="sideBarContent">
                  <img src={tesla} alt="" />
                  <h3>Tesla</h3>
                  <span>
                    411.70 <sub className="green">411.70</sub>
                  </span>
                </div>
                <div className="sideBarContent">
                  <FontAwesomeIcon icon={faAppleAlt} />
                  <h3>Apple</h3>
                  <span>
                    411.70 <sub className="green">411.70</sub>
                  </span>
                </div>
                <div className="sideBarContent">
                  <img src={tempus} alt="" />
                  <h3>Tempus AI</h3>
                  <span>
                    411.70 <sub>411.70</sub>
                  </span>
                </div>
                <div className="sideBarContent">
                  <img src={amazon} alt="" />
                  <h3>Amazon.com</h3>
                  <span>
                    411.70 <sub>411.70</sub>
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;