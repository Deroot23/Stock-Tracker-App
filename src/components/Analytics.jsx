import "../assets/css/dashboard.css";
import "../assets/css/brokage.css";
import '../assets/css/Analytics.css'

import menu from "../assets/images/menu.svg";
import notificate from "../assets/images/notificate.svg";
import hambegr from "../assets/images/hambegr.svg";
import setting from "../assets/images/setting.svg";
 
import analytics from '../assets/images/analytics.svg';
import trendind  from  '../assets/images/trendind.svg'
import { Link } from 'react-router-dom';

function Analytics() {
  

  const getCurrentDate = () => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date().toLocaleDateString("en-US", options);
  };

   return (
    <>
      <div className="dashboard">
        <div className="sail-header">
          <div className="sail">
            <img
              src={analytics}
              alt="AnalyticsLogo"
              style={{ width: "35px", marginRight: "10px" }}
            />
            <span
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Analytics integration
            </span>
          </div>
          <img src={hambegr} alt="" id="hamg" />
        </div>
        <div className="mobile-menu"></div>
        <div className="header">
          <div className="logo">
            <img src={analytics} alt="" />
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {" "}
             Analytics integration
            </p>
          </div>

          <div className="icon">
            <img src={notificate} alt="" />
            <img src={setting} alt="" />
          </div>
        </div>
        <div className="header2">
          <div className="">
            <h1>Hi, Welcome Back Jude</h1>
            <h4 className="header-text">{getCurrentDate()}</h4>
          </div>
          <div id="buttons">
          <Link to="/signup">           <button className="primary">Get Started</button>
          </Link>            <button className="secondary">Deposit</button>
            <img src={menu} alt="hsd" id="menu" />
          </div>
        </div>
        <br /> <br />
        <div className="trusted-partners">
          <p className="text">Analytics Board</p>
               <div className="analytics-content">
                <div>
                </div>
                <div >   
                     <section>
                          <img src={trendind} alt=""  id="trendind"/>
                     </section>
                     <section>
                      <p>

                      </p>
                     </section>
                </div>
               </div>
        </div>
      </div>
     </>
  );
}

export default Analytics;
