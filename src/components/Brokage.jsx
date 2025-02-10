// import "../assets/css/dashboard.css";
import "../assets/css/brokage.css";
import "../assets/css/sidebar.css";

import menu from "../assets/images/menu.svg";
import notificate from "../assets/images/notificate.svg";
import setting from "../assets/images/setting.svg";
import co2 from "../assets/images/co2.svg";
import exness from "../assets/images/exness.svg";
import rate from "../assets/images/rate.svg";
import PropTypes from "prop-types";
import arrow from "../assets/images/arrow.svg";
import vatage from "../assets/images/vatage.svg";
import xm from "../assets/images/xm.svg";
import pepperstone from "../assets/images/pepperstone.svg";
import fxpro from "../assets/images/fxpro.svg";
import mindmoney from "../assets/images/mindmoney.svg";
import swiss from "../assets/images/swiss.svg";
import FPMarketsLog from "../assets/images/FPMarketsLog.svg";
import capex from "../assets/images/capex.svg";
import { Link } from "react-router-dom";
import  { Hamg } from '../components/Sidebar'; // Adjust the path if necess
 
function Brokage() {
 
  const RateSection = ({ rating, href }) => {
    return (
      <>
        <main
          className="rate-section"
          style={{ padding: "0", display: "flex" }}
        >
          {[...Array(5)].map((_, index) => (
            <img key={index} src={rate} alt="rate" />
          ))}
          <p>{rating}</p>
        </main>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="visit-site-button"
        >
          visit site
          <span>
            <img src={arrow} alt="arrow" />
          </span>
        </a>
      </>
    );
  };

  RateSection.propTypes = {
    rating: PropTypes.number.isRequired,
    href: PropTypes.string.isRequired,
  };

  const getCurrentDate = () => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date().toLocaleDateString("en-US", options);
  };

  // Capitalized component name
  return (
    <>
      <div className="dashboard">
        <div className="sail-header">
          <div className="sail">
            <img
              src={co2}
              alt="Sail Logo"
              style={{ width: "35px", marginRight: "10px" }}
            />
            <span
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Brokerage Account
            </span>
          </div>
          <div>
          <Hamg />
             {/* <img src={hambegr} alt="" id="hambeger-mobile" onClick={hambeger} /> */}
          </div>
        </div>
        <div className="mobile-menu"></div>
        <div className="header">
          <div className="logo">
            <img src={co2} alt="" />
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {" "}
              Brokerage Account
            </p>
          </div>

          <div className="icon">
            <img src={notificate} alt="" className="not" />
            <img src={setting} alt="" className="setting" />
          </div>
        </div>
        <div className="header2">
          <div className="">
            <h1>Hi, Welcome Back Jude</h1>

            <h4 className="header-text">{getCurrentDate()}</h4>
          </div>
          <div id="buttons">
            <Link to="/signup">
               <button className="primary">Get Started</button>
            </Link>
            <button className="secondary">Deposit</button>
            <img src={menu} alt="hsd" id="menu" />
          </div>
        </div>
        <br /> <br />
        <div className="trusted-partners">
          <p className="text">Trusted Partners</p>
          <div className="trusted-partners-section window">
            <div>
              <div>
                <img src={exness} alt="exnesslogo" className="yellow" />

                <RateSection rating={4.5} href="http://example.com" />
              </div>
              <div>
                <img src={FPMarketsLog} alt="exnesslogo" className="blue" />
                <RateSection rating={4.7} href="http://example.com" />
              </div>
              <div>
                <img src={fxpro} alt="exnesslogo" className="red" />
                <RateSection rating={4.5} href="http://example.com" />
              </div>
            </div>
            <div>
              <div>
                <img
                  src={pepperstone}
                  alt="exnesslogo"
                  className="white-background"
                />
                <RateSection rating={4.5} href="http://example.com" />
              </div>
              <div>
                <img
                  src={vatage}
                  alt="exnesslogo"
                  className="white-background"
                />
                <RateSection rating={4.5} href="http://example.com" />
              </div>
              <div>
                <img
                  src={swiss}
                  alt="exnesslogo"
                  className="white-background"
                />
                <RateSection rating={4.5} href="http://example.com" />
              </div>
            </div>
            <div>
              <div>
                <img
                  src={mindmoney}
                  alt="exnesslogo"
                  className="white-background"
                />
                <RateSection rating={4.5} href="http://example.com" />
              </div>
              <div>
                <img src={xm} alt="exnesslogo" className="white-background" />
                <RateSection rating={4.5} href="http://example.com" />
              </div>
              <div>
                <img
                  src={capex}
                  alt="exnesslogo"
                  className="white-background"
                />
                <RateSection rating={4.5} href="http://example.com" />
              </div>
            </div>
          </div>

          {/* for mobile view */}
          <div className="trusted-partners-section mobile">
            <div>
              <div>
                <img
                  src={exness}
                  alt="exnesslogo"
                  className="yellow icon-width"
                />
                <RateSection rating={4.9} href="http://example.com" />
              </div>
              <div>
                <img
                  src={FPMarketsLog}
                  alt="exnesslogo"
                  className="blue icon-width"
                />
                <RateSection rating={4.7} href="http://example.com" />
              </div>
            </div>
            <div>
              <div>
                <img
                  src={pepperstone}
                  alt="exnesslogo"
                  className="white-background icon-width"
                />
                <RateSection rating={4.5} href="http://example.com" />
              </div>
              <div>
                <img
                  src={vatage}
                  alt="exnesslogo"
                  className="white-background icon-width"
                />
                <RateSection rating={4.5} href="http://example.com" />
              </div>
            </div>
            <div>
              <div>
                <img src={xm} alt="exnesslogo" className="white-background" />
                <RateSection rating={4.5} href="http://example.com" />
              </div>

              <div>
                <img
                  src={capex}
                  alt="exnesslogo"
                  className="white-background"
                />
                <RateSection rating={4.5} href="http://example.com" />
              </div>
            </div>
            <div>
              <div>
                <img src={fxpro} alt="exnesslogo" className="red" />
                <RateSection rating={4.5} href="http://example.com" />
              </div>
              <div>
                <img
                  src={swiss}
                  alt="exnesslogo"
                  className="white-background"
                />
                <RateSection rating={4.5} href="http://example.com" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brokage;
