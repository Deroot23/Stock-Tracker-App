 


import   { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'react-router-dom';
 import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import G6 from "../assets/images/G6.svg"
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
import hambegr from "../assets/images/hambegr.svg";

import  arrowcircleleft from "../assets/images/arrowcircleleft.svg"
// import expandcircleright from "../assets/images/expandcircleright.svg"
 import '../assets/css/sidebar.css'
import { Link } from "react-router-dom";

export const hamg=()=>{
  const hambeger = () => {
    const mobile = document.getElementById("mobile");
    if (mobile) {
      mobile.classList.toggle("show");
    }
  };
  return(
    <div>
<img src={hambegr} alt=""  onClick={hambeger} />
    </div>
  )
}
 
const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isWatchListVisible, setIsWatchListVisible] = useState(true);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleWatchList = () => {
    setIsWatchListVisible(!isWatchListVisible);
  };

 
  
//  useEffect(() => {
//     // console.log("Updating theme", isDarkMode ? "Dark" : "Light");
//     if (isDarkMode) {
//       document.body.classList.add("dark-mode");
//       document.body.classList.remove("light-mode");
//     } else {
//       document.body.classList.add("light-mode");
//       document.body.classList.remove("dark-mode");
//     }
//   }, [isDarkMode]);
useEffect(() => {
  document.body.classList.toggle("dark-mode", isDarkMode);
  document.body.classList.toggle("light-mode", !isDarkMode);
}, [isDarkMode]);
  // const menu = () => {
  //   // const sideBar = document.getElementById('sideBar');
  //   // if (sideBar) {
  //   //   sideBar.classList.toggle('block');
  //   // }
  //   const toClosed = document.getElementsByClassName('toClosed');
  //    if (toClosed) {
  //   toClosed.classList.toggle('block');
  //   }
  // };
  const menu = () => {
    const toClosedElements = document.getElementsByClassName('toClosed');
    Array.from(toClosedElements).forEach(element => {
      element.classList.toggle('block');
    });
  };

  return (
    <>
      <div style={{ position: "relative" }} id="mobile">
        <img
          src={arrowcircleleft}
          alt="arrow"
          style={{
            position: "absolute",
            right: "-15px",
            top: "25px",
            background: "black",
            padding: "2px",
            borderRadius: "50%",
          }}
          onClick={menu}
          id="arrow-mobile"
        />
        <div id="sideBar" className="sidebar  ">
        <div id="font">
        <FontAwesomeIcon
            icon={isDarkMode ? faToggleOff : faToggleOn}
            aria-hidden="true"
            id="toggle"
            onClick={toggleTheme} className=" "   
          />
        </div>
          <section >
            <img id="logo" src={G6} alt="logo" />
            <h1 className="toClosed">Stock Tracker</h1>
            <img id="profile" src={Profile} alt="profilePicture" className="toClosed" />
          </section>
          <form action="https://www.coingecko.com/en/coins/" name="data-action" className="toClosed">
            <input id="searchBar" type="text" placeholder="search" />
          </form>
          <div id="content">
            <div >
              {/* <img src={Dash} alt="" id="icons" />  */}
              <Link to="/"className="sideBarContent" >
              <img src={Dash} alt="" id="icons" /> 
                <h3  className="toClosed" >Dashboard</h3>
              </Link>
            </div>
            <div >
              {/* <img src={Broker} alt="" id="icons" /> */}
              <Link to="/brokage" className="sideBarContent">
              <img src={Broker} alt="" id="icons" />

                <h3  className="toClosed" >Brokerage Account</h3>
              </Link>
            </div>
            <div  >
              {/* <img src={Analytics} alt="" id="icons" /> */}
              <Link to="/analytics" className="sideBarContent"  >
              <img src={Analytics} alt="" id="icons" />

                <h3 className="toClosed">Analytics Integration</h3>
              </Link>
            </div>
            <div  >
              {/* <img src={team} alt="" id="icons" /> */}
              <Link to="/team" className="sideBarContent">
              <img src={team} alt="" id="icons" />

                <h3 className="toClosed" >The Team</h3>
              </Link>     
                     </div>
                     <div >
              {/* <img src={about} alt="" id="icons" /> */}
              <Link to="/About" className="sideBarContent"  >
              <img src={about} alt="" id="icons" />

                <h3 className="toClosed" >About Us</h3>

              </Link>     
                     </div>
          </div>
          <div className="watchListContent toClosed" >
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
// import   { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faToggleOn, faToggleOff, faChevronDown, faEllipsisVertical, faAppleAlt } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
// import Logo from "../assets/images/logo.png";
// import Profile from "../assets/images/profile.png";
// import Dash from "../assets/images/dash.png";
// import Broker from "../assets/images/broker.png";
// import Analytics from "../assets/images/analytics.svg";
// import team from "../assets/images/team.png";
// import tesla from "../assets/images/icons1.png";
// import tempus from "../assets/images/icons3.png";
// import amazon from "../assets/images/icons4.png";
// import about from "../assets/images/Abouti.svg";
// import hambegr from "../assets/images/hambegr.svg";
// import arrowcircleleft from "../assets/images/arrowcircleleft.svg";
// import '../assets/css/sidebar.css';

// export const Hamg = () => {
//   const hambeger = () => {
//     const mobile = document.getElementById("mobile");
//     if (mobile) {
//       mobile.classList.toggle("show");
//     }
//   };

//   return (
//     <div>
//       <img src={hambegr} alt="hambeger" onClick={hambeger} />
//     </div>
//   );
// };

// const Sidebar = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [isWatchListVisible, setIsWatchListVisible] = useState(true);

//   useEffect(() => {
//     document.body.classList.toggle("dark-mode", isDarkMode);
//     document.body.classList.toggle("light-mode", !isDarkMode);
//   }, [isDarkMode]);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   const toggleWatchList = () => {
//     setIsWatchListVisible(!isWatchListVisible);
//   };

//   const menu = () => {
//     const toClosedElements = document.getElementsByClassName('toClosed');
//     Array.from(toClosedElements).forEach(element => {
//       element.classList.toggle('block');
//     });
//   };

//   return (
//     <>
//        <div style={{ position: "relative" }} id="mobile">
//         <img
//           src={arrowcircleleft}
//           alt="arrow"
//           style={{
//             position: "absolute",
//             right: "-15px",
//             top: "25px",
//             background: "black",
//             padding: "2px",
//             borderRadius: "50%",
//           }}
//           onClick={menu}
//           id="arrow-mobile"
//         />
//         <div id="sideBar" className="sidebar">
//           <div id="font">
//             <FontAwesomeIcon
//               icon={isDarkMode ? faToggleOff : faToggleOn}
//               aria-hidden="true"
//               id="toggle"
//               onClick={toggleTheme}
//             />
//           </div>
//           <section>
//             <img id="logo" src={Logo} alt="logo" />
//             <h1 className="toClosed">Stock Tracker</h1>
//             <img id="profile" src={Profile} alt="profilePicture" className="toClosed" />
//           </section>
//           <form action="https://www.coingecko.com/en/coins/" name="data-action" className="toClosed">
//             <input id="searchBar" type="text" placeholder="search" />
//           </form>
//           <div id="content">
//             <div className="sideBarContent">
//               <img src={Dash} alt="" id="icons" />
//               <Link to="/">
//                 <h3 className="toClosed">Dashboard</h3>
//               </Link>
//             </div>
//             <div className="sideBarContent">
//               <img src={Broker} alt="" id="icons" />
//               <Link to="/brokage">
//                 <h3 className="toClosed">Brokerage Account</h3>
//               </Link>
//             </div>
//             <div className="sideBarContent">
//               <img src={Analytics} alt="" id="icons" />
//               <Link to="/analytics">
//                 <h3 className="toClosed">Analytics Integration</h3>
//               </Link>
//             </div>
//             <div className="sideBarContent">
//               <img src={team} alt="" id="icons" />
//               <Link to="/team">
//                 <h3 className="toClosed">The Team</h3>
//               </Link>
//             </div>
//             <div className="sideBarContent">
//               <img src={about} alt="" id="icons" />
//               <Link to="/About">
//                 <h3 className="toClosed">About Us</h3>
//               </Link>
//             </div>
//           </div>
//           <div className="watchListContent toClosed">
//             <div id="watchListHeader" onClick={toggleWatchList}>
//               <FontAwesomeIcon
//                 icon={faChevronDown}
//                 id="dropDownImg"
//                 style={{
//                   transform: isWatchListVisible ? 'rotate(0deg)' : 'rotate(180deg)',
//                   transition: 'transform 0.3s ease',
//                 }}
//               />
//               <h2>My Watch List</h2>
//               <FontAwesomeIcon icon={faEllipsisVertical} />
//             </div>
//             {isWatchListVisible && (
//               <div>
//                 <div className="sideBarContent">
//                   <img src={tesla} alt="" />
//                   <h3>Tesla</h3>
//                   <span>
//                     411.70 <sub className="green">411.70</sub>
//                   </span>
//                 </div>
//                 <div className="sideBarContent">
//                   <FontAwesomeIcon icon={faAppleAlt} />
//                   <h3>Apple</h3>
//                   <span>
//                     411.70 <sub className="green">411.70</sub>
//                   </span>
//                 </div>
//                 <div className="sideBarContent">
//                   <img src={tempus} alt="" />
//                   <h3>Tempus AI</h3>
//                   <span>
//                     411.70 <sub>411.70</sub>
//                   </span>
//                 </div>
//                 <div className="sideBarContent">
//                   <img src={amazon} alt="" />
//                   <h3>Amazon.com</h3>
//                   <span>
//                     411.70 <sub>411.70</sub>
//                   </span>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;