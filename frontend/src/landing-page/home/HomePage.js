import React from 'react';
import Awards from './Awards';
import HeroScection from './HeroScection';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAcc from '../OpenAcc';


function HomePage() {
    return (
        <>
       
        <HeroScection/>
        <br></br>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAcc/>
        
       
        </>
      );
}

export default HomePage 
;