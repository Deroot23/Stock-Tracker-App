//  import Dashboard from './components/Dashboard'
//  import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Brokage from './components/Brokage'
// import Team from './components/team'
 
import Sidebar from "./components/Sidebar";
import Footer from "./components/footer";
// import Analytics from "./components/Analytics";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <div style={{ display: "flex", height: "fit-content" }}>
        <Sidebar />
        <div style={{ width: "100%" }}>{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
