import Dashboard from './components/Dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Brokage from './components/Brokage'
import Team from './components/team'
import Layout from './Layout';
import Analytics from './components/Analytics';
import About from './components/About';



function App() {
  return (
    <> 
  <BrowserRouter>
     <Layout>
 <Routes>
      <Route index element={<Dashboard />} />
     <Route path="Brokage" element={<Brokage />} />
     <Route path="Team" element={<Team />} />
     <Route path="Analytics" element={<Analytics/>} />
     <Route path="About" element={<About/>} />
     {/* <Route path="*" element={<NoPage />} /> */}
  </Routes>
</Layout>
</BrowserRouter> 
         </>
 )
 
}

export default App
