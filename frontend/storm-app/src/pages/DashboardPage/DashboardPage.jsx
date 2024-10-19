import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import EmergencyButton from '../../components/EmergencyButton/EmergencyButton';

function DashboardPage() {
    let points = 3215;  //placeholder
    let streak = 5;  //placeholder
    let user = "John";  //placeholder
    return (
        <>
            <h1 className="text-white d-flex justify-content-center dash-bg p-3 mb-5">DASHBOARD</h1>
            <h3 className='d-flex justify-content-center'>{user}'s awards</h3>
            <div className='d-flex justify-content-center'>
                {/*<h3 className='p-3 mb-2 custom-bg-color text-white rounded ' style={{ display: 'inline-block' }}>1234</h3>*/}
                <div class="alert alert-warning m-2" role="alert">points: {points}</div>
                <div class="alert alert-warning m-2" role="alert">streak: {streak}</div>
            </div>
            <div className='m-5 text-white'> q</div>
            {/* Shelves */}
            <div className="container mt-4">
                {/* Shelf 1 */}
                <div className="shelf-container mb-4 d-flex flex-column justify-content-center">
                <div className="icon-container d-flex justify-content-center">
                    <img width="50" height="50" src="https://img.icons8.com/fluency/48/bread-loaf.png" alt="bread-loaf" className='mx-5'/>
                    <img width="50" height="50" src="https://img.icons8.com/fluency/48/cash-in-hand.png" alt="cash-in-hand" className='mx-5'/>
                    <img width="50" height="50" src="https://img.icons8.com/ios/50/resume.png" alt="resume" className='mx-5'/>
                    </div>
                    <img src="../../src/assets/shelves.png" alt="Shelf" className="shelf-image" />
                    
                </div>
                {/* Shelf 2 */}
                <div className="shelf-container mb-4 d-flex flex-column justify-content-center">
                <div className="icon-container d-flex justify-content-center">
                    <img width="50" height="50" src="https://img.icons8.com/ios/50/diploma.png" alt="diploma" className='mx-5'/>
                        <img width="50" height="50" src="https://img.icons8.com/fluency/48/sunny-side-up-eggs.png" alt="sunny-side-up-eggs" className='mx-5'/>
                        <img width="50" height="50" src="https://img.icons8.com/ios/50/credit-card-front.png" alt="credit-card-front" className='mx-5'/>
                    </div>
                    <img src="../../src/assets/shelves.png" alt="Shelf" className="shelf-image" />
                    
                </div>
                {/* Shelf 3 */}
                <div className="shelf-container mb-4 d-flex flex-column justify-content-center">
                <div className="icon-container d-flex justify-content-center">
                    <img width="50" height="50" src="https://img.icons8.com/ios/50/total-sales-1.png" alt="total-sales-1" className='mx-5'/>
                    <img width="50" height="50" src="https://img.icons8.com/ios/50/permanent-job.png" alt="permanent-job" className='mx-5'/>
                        <img width="50" height="50" src="https://img.icons8.com/ios/50/hamburger.png" alt="hamburger" className='mx-5'/>
                    </div>
                    <img src="../../src/assets/shelves.png" alt="Shelf" className="shelf-image" />
                {/* Emergency Button */}
                <div className="container mt-4">
                <div className="row">
                    <div className="col-12 d-flex justify-content-left">
                    <EmergencyButton />
                    </div>
                </div>
                </div>

                </div>
                
            </div>            
            
        </>
    );
}

export default DashboardPage;
