import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing-page/home/HomePage';
import {BrowserRouter ,Routes ,Route} from "react-router-dom";
import AboutPage from './landing-page/about/AboutPage';
import PricingPage from './landing-page/pricing/PricingPage';
import ProducPage from './landing-page/product/ProducPage';
import SupportPage from './landing-page/support/SupportPage';
import SignUp from './landing-page/signup/SignUp';
import NavBar from './landing-page/Navbar';
import Footer from './landing-page/Footer';
;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>} ></Route>
        <Route path='/About' element={<AboutPage/>} ></Route>
        <Route path='/Pricing' element={<PricingPage/>} ></Route>
        <Route path='/Product' element={<ProducPage/>} ></Route>
        <Route path='/Support' element={<SupportPage/>} ></Route>
        <Route path='/Signup' element={<SignUp/>} ></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>

  </React.StrictMode>
);
