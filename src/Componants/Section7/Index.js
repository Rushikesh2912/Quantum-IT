import React from 'react';
import './section7.css'; 
import logo from '../Images/logo.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h1 className="fw-bold text-start">About</h1>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="footer-logo text-start">
              <img src={logo} alt="logo" className="logo" />
              <span className="company-name">Hiking Life</span>
            </div>
            <p className="company-description text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eligendi id laborum eum, eos atque consequatur aliquam nemo, quisquam eius corrupti voluptatem sapiente vitae odio!
            </p>
          </div>
          <div className="col-md-6 col-sm-6 d-flex justify-content-between">
            <div className="footer-links-group">
              <h5 className="footer-title">About</h5>
              <ul className="footer-links">
                <li><a href="/">Team</a></li>
                <li><a href="/">Join us</a></li>
                <li><a href="/">Ethic</a></li>
                <li><a href="/">Goals</a></li>
              </ul>
            </div>
            <div className="footer-links-group">
              <h5 className="footer-title">About</h5>
              <ul className="footer-links">
                <li><a href="/">Team</a></li>
                <li><a href="/">Join us</a></li>
                <li><a href="/">Ethic</a></li>
                <li><a href="/">Goals</a></li>
              </ul>
            </div>
            <div className="footer-links-group">
              <h5 className="footer-title">About</h5>
              <ul className="footer-links">
                <li><a href="/">Team</a></li>
                <li><a href="/">Join us</a></li>
                <li><a href="/">Ethic</a></li>
                <li><a href="/">Goals</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className='hee-lines' />
    </footer>
  );
};

export default Footer;
