import React from 'react';
import Awards from './Awards';
import HeroScection from './HeroScection';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAcc from '../OpenAcc';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return (
        <>
        <Navbar/>
        <HeroScection/>
        <br></br>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAcc/>
        <Footer/>
       
        </>
      );
}

export default HomePage 
;