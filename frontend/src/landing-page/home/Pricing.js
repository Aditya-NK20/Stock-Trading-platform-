import React from 'react';
function Pricing() {
    return (
    <div className='container mb-5'>
        <div className='row'>
            <div className='col-4 ms-5'>
                <h1 className='mt-5 ms-4 '>Unbeatable pricing</h1>
                <p className='ms-4'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges</p>
                <a href=''className="ms-4" style={{textDecoration:"none"}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>

            <div className='col'></div>

            <div className='col-6 '>
                <div className='row'>
                    <div className='col-6 border p-5'>
                        <h1>$ 0</h1>
                        <p>Free equity delivery<br/>
                            and direct mutual fund</p>
                        </div>
                    <div className='col-6 border p-5'>
                        <h1>$ 20</h1>
                        <p>ntraday and
                        F&O</p>
                    </div>
                </div>
            </div>

        </div>
    </div> );
}

export default Pricing;