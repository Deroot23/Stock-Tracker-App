import Toggle from "./assets/toggle.png"
import Logo from "./assets/logo.png"
import Profile from "./assets/profile.png"
import Dash from "./assets/dash.png"
import Broker from "./assets/broker.png"
import Analytics from "./assets/analytics.png"
import team from "./assets/team.png"
import dropDown from "./assets/dropdown.png"
import options from "./assets/options.png"
import tesla from "./assets/icons1.png"
import apple from "./assets/ICONS2.png"
import tempus from "./assets/icons3.png"
import amazon from "./assets/icons4.png"
import './App.css'

function App() {
 

  return (
    <>
      <div id='sideBar'>
      <img id="toggle" src={Toggle} alt="togglebar" />
      <section>
        <img id="logo" src={Logo} alt="logo" />
        <h1>Stock Tracker</h1>
        <img id="profile" src={Profile} alt="profilePicture" />
      </section>
      <form action="https://www.coingecko.com/en/coins/" name="data-action">
      <input id="searchBar" type="text"  placeholder="search"/>
      </form>
      <div id="content">
        <div className="sideBarContent">
          <img src={Dash} alt="" />
          <h3>Dashboard</h3>
        </div>
        <div className="sideBarContent">
          <img src={Broker} alt="" />
          <h3>Brokerage Account</h3>
        </div>
        <div className="sideBarContent">
          <img src={Analytics} alt="" />
          <h3>Analytics Integration</h3>
        </div>
        <div className="sideBarContent">
          <img src={team} alt="" />
          <h3>The Team</h3>
        </div>
        

      </div>

      <div className="watchListContent">
        <div id="watchListHeader"   >
          <img id="dropDownImg" src={dropDown} alt="" />
          <h3>My Watch List</h3>
          <img src={options} alt="" />
        </div>
        <div className="sideBarContent"  >
          <img src={tesla} alt="" />
          <h3>Tesla</h3>
          <span>411.70 <sub className="green">411.70</sub></span>
        </div>
        <div className="sideBarContent"  >
          <img src={apple} alt="" />
          <h3>Apple</h3>
          <span>411.70 <sub className="green">411.70</sub></span>
        </div>
        <div className="sideBarContent"  >
          <img src={tempus} alt="" />
          <h3>Tempus AI</h3>
          <span>411.70 <sub>411.70</sub></span>
        </div>
        <div className="sideBarContent"   >
          <img src={amazon} alt="" />
          <h3>Amazon.com</h3>
          <span>411.70 <sub>411.70</sub></span>
        </div>
       
        </div>


    

         
      </div>
      
    </>
  )
}

export default App
