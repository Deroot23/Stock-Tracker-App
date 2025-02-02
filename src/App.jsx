//  import Dashboard from './components/Dashboard'
//  import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Brokage from './components/Brokage'
import Team from './components/team'

function App() {
  return (
    <> 
      {/* <BrowserRouter>
 <Routes>
      <Route index element={<Dashboard />} />
     <Route path="blogs" element={<Brokage />} />
     <Route path="contact" element={<Team />} />
     <Route path="*" element={<NoPage />} />
  </Routes>
</BrowserRouter> */}
<Team />
         </>
 )
 
}

export default App
