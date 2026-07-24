import React from 'react';
function Stats() {
    return (
    <div className='container mt-5 p-5'>
        <div className='row'>
            <div className='col-6 p-5'>
                <h1 className='mb-5'>Trust with confidence</h1>
                <h2 className='mt-4' >Customer-first always</h2>
                <p className='text-muted'>That's why 1.6+ crore customers trust Ze*odha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                <h2 className='mt-4' >No spam or gimmickss</h2>
                <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

                <h2 className='mt-4' >The Ze*odha universe</h2>
                <p className='text-muted'>TNot just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                <h2 className='mt-4' >Do better with money</h2>
                <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                
            </div>

             <div className='col-6 text-center'>
                <img src='/Media/ecosystem.png' style={{width:"95%"}} className='p-5 mb-2' />
                <a href='' className='p-5 fs-5' style={{textDecoration:"none"}}> Explore <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <a href=''className='p-5 fs-5' style={{textDecoration:"none"}}> Try Kite Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>  </a>
               
             </div>
        </div>
    </div>);
}

export default Stats;