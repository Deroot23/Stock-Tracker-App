import "../assets/css/dashboard.css";
import "../assets/css/brokage.css";
import "../assets/css/Analytics.css";
import menu from "../assets/images/menu.svg";
import notificate from "../assets/images/notificate.svg";
 import setting from "../assets/images/setting.svg";
import about from "../assets/images/Abouti.svg";
import hambegr from "../assets/images/hambegr.svg";
 import '../assets/css/about.css'
 import { Link } from 'react-router-dom';
 

 
function About() {
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
              src={about}
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
About Us            </span>
          </div>
          <img src={hambegr} alt="" id="hamg" />
        </div>
        <div className="mobile-menu"></div>
        <div className="header">
          <div className="logo">
            <img src={about} alt="" />
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              
              About Us                        </p>
          </div>

          <div className="icon">
            <img src={notificate} alt=""  className="not" />
            <img src={setting} alt="" className="setting" />
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
          <p className="about-us">About Us</p>
          <div className="paragraph">
            <p> Real-Time Tracking:  <br /> <span className="trend">
            Stay updated with the latest market data and trends, ensuring you never miss an opportunity.
                </span></p> 
                <br /><br />
                <p> Portfolio Management: <br /> <span>
                Easily monitor your investments and track performance over time with our intuitive interface.                </span></p><br /><br />
                <p> User-Focused Design:  <br /> <span>
                Enjoy a clean, simple, and efficient experience that prioritizes clarity and usability.  
                <br /><br /> At G6 Stock Market Tracker, we believe that financial tools should be accessible and uncomplicated. Whether you&apos;re just starting your investment journey or you&apos;re looking to streamline your current strategy, our platform is here to help you navigate the dynamic world of stock markets with confidence and ease.
                <br /><br />     Join us as we simplify stock tracking—making market insights available at your fingertips!      
                   </span></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
