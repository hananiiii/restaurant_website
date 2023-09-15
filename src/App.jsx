import './App.css'
import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home.jsx";
import Menu from './pages/menu_page.jsx';
import Register from './pages/register'
import Chef from './pages/chef.jsx'
import About from './pages/aboutmore.jsx'
import Waiter from './pages/waiter.jsx'
import Reservation from './pages/reservation'
function App() {

  return (
    <>
    
    <React.StrictMode>
    <BrowserRouter>
      <div className="App">
        <div className="pages">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Chef" element={<Chef />} />
            <Route path="/About" element={<About />} />
            <Route path="/Waiter" element={<Waiter />} />
            <Route path="/Reservation" element={<Reservation />} />
           
           
           
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
    </>
  )
}

export default App
