import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { TypeAnimation } from 'react-type-animation';

function LandingPage() {
  const sequences = [
    { text: '"Success is not final; failure is not fatal: It is the courage to continue that counts." —Winston Churchill', wait: 1500 },
    { text: '“Don’t let yesterday take up too much of today.” —Will Rogers', wait: 1500 },
    { text: '“Setting goals is the first step in turning the invisible into the visible.” —Tony Robbins', wait: 1500 },
    { text: '“Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.” —Helen Keller', wait: 1500 }
  ];

  return (
    <>
      <div>
      <div className="Landing-Page hero-section" style={{ paddingLeft: '1em', paddingTop: '16em', flexDirection: 'column', alignItems: 'flex-top'}}>
      <h1 className="hero-text">
      <TypeAnimation
            sequence={sequences.flatMap(({ text, wait }) => [text, wait])}
            wrapper="span"
            speed={50}
            omitDeletionAnimation={true}
            style={{ fontSize: '80px', display: 'inline-block' }}
            repeat={Infinity}
          />
          </h1>
          </div>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active truncate-image">
              <img src="../../src/assets/happykids2.jpg" className="d-block w-100 " alt="Career"/>
            </div>
            <div className="carousel-item truncate-image">
              <img src="../../src/assets/recball.jpg" className="d-block w-100" alt="Finance"/>
            </div>
            <div className="carousel-item truncate-image">
              <img src="../../src/assets/class.webp" className="d-block w-100" alt="Career"/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='d-flex flex-column justify-content-center text-blue'>
        <h1 className="text-center m-5">Your one stop shop for. . .</h1>
        <div class="card w-75 text-end m-2">
          <div class="card-body p-3">
            <h5 class="card-title text-blue">Learning something new</h5>
            <p class="card-text text-blue">Want to pick up some new life skills? Our coursework covers everything
              from cooking breakfast, to practicing for an interview. Follow any of our roadmaps to earn points
              and collect badges, all while learning useful skills.
            </p>
          </div>
        </div>
        <div class="card w-75 m-2">
          <div class="card-body p-3">
            <h5 class="card-title text-blue">Need a place to stay?</h5>
            <p class="card-text text-blue">If you are currently homeless and in need of shelter, sign in or sign up 
              for our portal to communicate with our organization. Someone will be able to help you find shelter or redirect
              you to somewhere you can recieve assitance.</p>
          </div>
        </div>
        <div class="card w-75 text-end m-2">
          <div class="card-body p-3">
            <h5 class="card-title text-blue">Looking for a mentor?</h5>
            <p class="card-text text-blue">For an opportunity to speak with someone who may have been in a similar situation to
              you, you can potentially enroll in our mentorship program. We will connect you to an individual
              you can ask for advice, or just talk to when you need someone to listen. Safety is our number one priority
              and all mentors are carefully vetted before they can participate in our program.</p>
          </div>
        </div>
        <div class="card w-75 m-2">
          <div class="card-body p-3">
            <h5 class="card-title text-blue">Connect with your community</h5>
            <p class="card-text text-blue">Distances don't mean so much in the modern day and our virtual communities will allow
              you to connect with peers with similar interests in a safe and anonymous environment.</p>
          </div>
        </div>
        

      </div>
    </>
  );
}

export default LandingPage;
