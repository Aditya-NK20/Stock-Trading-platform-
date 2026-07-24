import React from 'react';

function Awards () {
    return (  
        <div className='container mt-5 mb-5 p-5'>
            <div className='row '>
                <div className='col-lg-6 col-sm-12 '>
                <img src='/Media/largestBroker.svg'></img>
                </div>
                <div className='col-lg-6 col-sm-12 p-5'>
                    <h1 className='mb-5'>Largest Broker in India</h1>
                    <p className='fs-4'>2+ million Ze*odha clients contribute to over 15% of all retail oreder volume in Inida by trading and investing in: </p>
                    <div className='row fs-4 mt-5 '>
                        <div className='col-6 '>
                            <ul>
                                <li>Futures and Options </li>
                                
                                <li>Commodity derivatives </li>
                                <li>Currency derivatives </li>
                            </ul>
                        </div>
                        <div className='col-6 '>
                            <ul>
                                <li>Stocks & IPO </li>
                                <li>Direct mutual funds </li>
                                <li>Bonds and Government Securities</li>
                            </ul>
                        </div>
                        <img src='/Media/pressLogos.png' className='p-2'/>
                    </div>
                   

                </div>
            </div>
        </div>
    );
}

export default Awards ;