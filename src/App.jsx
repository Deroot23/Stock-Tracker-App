
import vector from "./assets/vector.png"
import bell from "./assets/bell.png"
import refresh from "./assets/refresh.png"
import sales from "./assets/sales.png"
import chart from "./assets/chart.png"
import chart1 from "./assets/chart1.png"
import prices from "./assets/prices.png"
import option from "./assets/options.png"
import './App.css'

function App() {
  

  return (
    <>
    <div id='container'>
      <section id="head">
        
        <h2><img id="vector" src={vector} alt="analytics_img" /> Analytics Integration</h2>
        <span>
          <img  src={bell} alt="alert_icon" />
          <img src={refresh} alt="refresh_icon" />
        </span>
      </section>

      <h3>Hi, Welcome back Jude!🫡 </h3>
      <div id= "subhead">
      <p>Friday,31st January 2025</p>
      <div>
      <button id="sign" type="button">Get Started</button>
      <button id="deposit" type="button">Deposit</button>
      <img  src={option} alt="" /></div>
      </div>
      <div id="container_content">
          <h2>Analytics Board</h2>
          <div id="wrapper">
          <div id="sales">
            <h4>Sales</h4>
            
              <h5>2.382</h5>
              <span>
              <p id="s_shade">3.382</p>
              <p>since last week</p></span> 
             
              <img src={sales} alt="Sales_img" />

              

          </div>
          <div id="prices">
            <h4>Prices</h4>
            
              <h5>$21.000</h5>
              <span>
              <p id="p_shade">3.382</p>
              <p >since last week</p></span>
              <img src={prices} alt="prices_img" />
              

          </div>
          </div>
          <div id="container_img">
            <img id="chart" src={chart} alt="chart_img" />
            <img id="align" src={chart1} alt="" />
          </div>
          
      </div>

    </div>
     
       
    </>
  )
}

export default App
