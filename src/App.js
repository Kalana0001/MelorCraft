import React from 'react';
import { BrowserRouter, Routes,Route} from 'react-router-dom';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Service/Services';
import Songs from './pages/Songs/Songs';
import NavBar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';



const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/songs" element={<Songs/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
