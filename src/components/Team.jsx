 import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "../assets/css/dashboard.css";
import "../assets/css/brokage.css";
 
import menu from "../assets/images/menu.svg";
import notificate from "../assets/images/notificate.svg";
import hambegr from "../assets/images/hambegr.svg";
import setting from "../assets/images/setting.svg";
 import forum from "../assets/images/Forum.svg";
  import Hagbazz from "../assets/images/Hagbazz.svg";
  import pere from "../assets/images/pere.svg";
  import isaac1 from "../assets/images/isaac1.svg";
import Unice from "../assets/images/Unice.svg";
import Rahman from "../assets/images/Rahman.svg";
import benson from "../assets/images/benson.svg"
import micheal from "../assets/images/micheal.svg";
import mariam from "../assets/images/mariam.svg";
  import abbas from "../assets/images/abbas.svg";
  import lateef from "../assets/images/lateef.svg";
  import Zakarayyah from "../assets/images/Zakarayyah.svg";
    import ifeeayin from "../assets/images/ifeeayin.svg";



function Team() {
  
  const TeamMember = ({ imgSrc, name, role }) => {
    return (
      <div className='team-member'>
        <img src={imgSrc} alt={name}  />
        <p style={{textAlign:"center"}}>{name}</p>
        <p style={{textAlign:"center"}}>{role}</p>
      </div>
    );
  };
  
  TeamMember.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
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

   return (
 < >

    <div className="dashboard">
      <div className="sail-header">
        <div className="sail">
          <img
            src={forum}
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
           Forum
          </span>
        </div>
        <img src={hambegr} alt="" id="hamg" />
      </div>
      <div className="mobile-menu"></div>
      <div className="header">
        <div className="logo">
          <img src={forum} alt="" />
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
             
          Forum
          </p>
        </div>

        <div className="icon">
          <img src={notificate} alt=""  className="not" />
          <img src={setting} alt=""  className="setting" />
        </div>
      </div>
      <div className="header2">
        <div className="">
          <h1>Hi, Welcome Back Jude</h1>

          <h4 className="header-text">{getCurrentDate()}</h4>
        </div>
        <div id="buttons">
        <Link to="/signup">           <button className="primary">Get Started</button>
        </Link>          <button className="secondary">Deposit</button>
          <img src={menu} alt="hsd" id="menu" />
        </div>
      </div>
      <br /> <br />
   <div className="team">
    <p className='team-para'>MEET OUR TEAM</p>
    <p>Meet our team of professionals to serve you</p>
    <div className='window'>
      <div className='team-div'>
        <TeamMember imgSrc={pere} name="Peremobowei Edi" role="Frontend Developer" />
        <TeamMember imgSrc={Unice} name="Eunice Osarugue Ogbemudia" role="Frontend Developer" />
        <TeamMember imgSrc={Hagbazz} name="Agbabiaka Owolabi" role="Frontend Developer" />
        <TeamMember imgSrc={Rahman} name="Adeoye Abdulrahman Akanni" role="Frontend Developer" />
      </div>
      <div className='team-div'>
      <TeamMember imgSrc={micheal} name="Michael Ogunleye" role="Frontend Developer" />
        <TeamMember imgSrc={isaac1} name="Saduwa Isaac Onome" role="Frontend Developer" />
        <TeamMember imgSrc={benson} name="Benson Edidiong Friday" role="Frontend Developer" />
        <TeamMember imgSrc={mariam} name="Mariam Modupe Idrees" role="Frontend Developer" />
      </div>
      <div className='team-div'>
        <TeamMember imgSrc={abbas} name="Abbas Salaudeen" role="Frontend Developer" />
        <TeamMember imgSrc={Zakarayyah} name="Zakariyyah Olayiwola" role="Frontend Developer" />
        <TeamMember imgSrc={lateef} name="Abidemi Abullateef" role="Frontend Developer" />
        <TeamMember imgSrc={ifeeayin} name="Okoro Oghenefejiro Ifeanyichukwu" role="Frontend Developer" />
      </div>
    </div>
    <div className='mobile team-mobile'>
      <div className='team-div'>
        <TeamMember imgSrc={pere} name="Peremobowei Edi" role="Frontend Developer" />
        <TeamMember imgSrc={Unice} name="Eunice Osarugue  " role="Frontend Developer" />
     
      </div>
      <div  className='team-div'>
      <TeamMember imgSrc={Hagbazz} name="Agbabiaka Owolabi" role="Frontend Developer" />
      <TeamMember imgSrc={Rahman} name="Adeoye Abdulrahman  " role="Frontend Developer" />
      </div>
      <div className='team-div'>
      <TeamMember imgSrc={micheal} name="Michael Ogunleye" role="Frontend Developer" />
     
        <TeamMember imgSrc={mariam} name="Mariam Modupe Idrees" role="Frontend Developer" />
      </div>
      <div className='team-div'>
      <TeamMember imgSrc={isaac1} name="Saduwa Isaac  " role="Frontend Developer" />
      <TeamMember imgSrc={benson} name="Benson Edidiong  " role="Frontend Developer" />
      </div>
      <div className='team-div'>
        <TeamMember imgSrc={abbas} name="Abbas Salaudeen" role="Frontend Developer" />
        <TeamMember imgSrc={Zakarayyah} name="Zakariyyah Olayiwola" role="Frontend Developer" />
       
      </div>
      <div className='team-div'>
      <TeamMember imgSrc={lateef} name="Abidemi Abullateef" role="Frontend Developer" />
      <TeamMember imgSrc={ifeeayin} name="Okoro Oghenefejiro  " role="Frontend Developer" />
      </div>
    </div>
     </div>
    </div>
     </ >

  );
}

export default Team;

