import React from 'react';
function HeroScection() {
    return ( 
        <div className='container mb-5 p-5'>
            <div className='row text-center'>
               
                    <img src='/Media/homeHero.png' className='mb-5'/>
                    <h1 className='mt-5 mb-3'>Invest in everything</h1>
                    <p className='fs-4'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button className='mt-3 mb-5 btn btn-primary fs-5' style={{width:"20%",margin:"0 Auto"}}>Sign Up</button>

            </div>

        </div>
     );
}

export default HeroScection;