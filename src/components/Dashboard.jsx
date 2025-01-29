import '../assets/css/dashboard.css';
// import { trend} from '../assets/images/trend.svg';

function dashboard( ) {
    return (
        <div>
            <div className="dashboard">
        <div className="user-container">
            <div className="user">
                <div className="brand-logo">
                    <img src="./images/saillogo.png" alt=""/>
                </div>
                <div className="user-image">
                    {/* <img src={trend} alt=""/> */}
                </div>
            </div>

            <div className="mobile-menu">
                <div className="search-container">
                    <input type="text" placeholder="search"/>
                </div>

                <div className="hamburger-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>

        </div>
        <div className="header">
            <div className="logo">
            <span><img src="./images/Vector.png" alt=""/></span>
            <p>Dashboard</p>
            </div>

            <div className="icon">
                <img src="./images/notice.png" alt=""/>
                <img src="./images/vector2.png" alt=""/>
            </div>

        </div>
        <div className="header2">
            <h1>Hi, Welcome Back Jude</h1>
            <div className="header-text">
                <h4>Friday,31st January 2025</h4>
               <span>
                <button className="primary"> Get Started</button>
                <button className="secondary"> Deposit</button>
                </span>
            </div>
        </div> <br /><br /><br />
        <div className="stock1">
            <div className="stock-trends">
                <img src="./assets/images/stock trend.svg" alt=""/>
                <span>
                     <h4>Explore Stock Trends</h4>
                </span>
               <div className="stock-image">
                </div>
            </div>

            <div className="price-alert">


            </div>

        </div>
        <div className="stock2">
            <span>
                <img src="./images/icon3.png" alt=""/>
                <h4>Track Your Stocks</h4>
            </span>
            <br/>
            <div className="market-trend">
             </div>

           </div>

           <div className="stock3">
            
        </div> 
    </div> 
        </div>
    );
}

export default dashboard;