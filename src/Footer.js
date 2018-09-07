import React, { Component } from "react";
const Footer = () => {
  return (
    <footer className="page-footer font-small ">
      <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
        <div className="col-md-8 mt-5 center">
          <p className="footer-para text-center">
            We are leaders in 8 countries:
            <a href="">Poland</a> , <a href="">Turkey</a> ,<a href="">Spain</a>{" "}
            ,<a href="">Italy</a> ,<a href="">Turkey</a> Mexico,
            <a href="">Brazil</a> ,<a href="">Argentina</a> en{" "}
            <a href="">Chile</a>.
          </p>

          <p className="footer-para text-center">
            This site uses cookies to deliver services in accordance with this
            Privacy Policy. You can specify the conditions for storing or
            accessing cookies on your browser.
          </p>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        www.docplanner.com © 2018
      </div>
    </footer>
  );
};

export default Footer;
