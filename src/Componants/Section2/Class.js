import React from 'react';
import './Class.css';
import activites from '../Images/activites.png';
import hiking from '../Images/hiking.png';
import mountain from '../Images/mountain.png';
import backgroundImage from '../Images/backgroundImage.png'; 

const Class = () => {
  return (
    <div className="class-background my-5">
      <div className="section-heading">
        <h1>HIKING AND CAMPING</h1>
        <h1 className="fw-bold">CLASSES</h1>
        <div className="hr-line"></div>
      </div>

      <div className="container">
        <div className="row text-center justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card" style={{ width: "18rem", border: 'none' }}>
              <img style={{ height: '9rem', width: '9rem' }} src={activites} className="card-img-top rounded mx-auto d-block" alt="activities img" />
              <div className="card-body">
                <h5 className="card-title fw-bold">ACTIVITIES</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab velit doloribus dolores placeat quod omnis?</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card" style={{ width: "18rem", border: 'none' }}>
              <img style={{ height: '9rem', width: '9rem' }} src={hiking} className="card-img-top rounded mx-auto d-block" alt="hiking img" />
              <div className="card-body">
                <h5 className="card-title fw-bold">HIKING</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab velit doloribus dolores placeat quod omnis?</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card" style={{ width: "18rem", border: 'none' }}>
              <img style={{ height: '9rem', width: '9rem' }} src={mountain} className="card-img-top rounded mx-auto d-block" alt="mountains img" />
              <div className="card-body">
                <h5 className="card-title fw-bold">MOUNTAINS</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab velit doloribus dolores placeat quod omnis?</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img src={backgroundImage} alt="Bottom right img" className="bottom-right-image" />
    </div>
  );
}

export default Class;
