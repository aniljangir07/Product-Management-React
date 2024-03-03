import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-light">
      <div className="container m-0">
        <div className="row">
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>Your company description goes here.</p>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <address>
              1234 Street Name<br />
              City, State ZIP<br />
              <i className="fa fa-phone"></i> 123-456-7890<br />
              <i className="fa fa-envelope"></i> info@example.com
            </address>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <div className="container">
          <p className="text-muted">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
