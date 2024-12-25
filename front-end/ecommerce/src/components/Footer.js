import React from 'react';
import { assets } from '../assets/assets';

function Footer() {
  return (
    <>
      <div className="mt-3">
        <div className="d-flex justify-content-center container m-auto py-4 border-bottom">
          <div className="row gy-4 gx-5">
            {/* Section Logo et Description */}
            <div className="col-12 col-sm-6 col-md-6 d-flex flex-column align-items-start">
              <img src={assets.logo} className="img-fluid mb-3" alt="Logo" width={120} />
              <p className="text-secondary small w-75 ">
                Welcome to <strong>Fashionista</strong>, your go-to destination for timeless style and modern elegance.
                Discover quality pieces designed to make every moment fashionable.
              </p>
            </div>

            {/* Section Company */}
            <div className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-start">
              <h5 className="mb-4">COMPANY</h5>
              <ul className="list-unstyled text-secondary small">
                <li className="mb-2">Home</li>
                <li className="mb-2">About us</li>
                <li className="mb-2">Privacy policy</li>
              </ul>
            </div>

            {/* Section Get in Touch */}
            <div className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-start">
              <h5 className="mb-4 text-uppercase">Get in Touch</h5>
              <ul className="list-unstyled text-secondary small">
                <li className="mb-2">+212 621356867</li>
                <li className="mb-2">sihamkalach3@gmail.com</li>
                <li className="mb-2">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-secondary"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Section Footer Bas */}
        <div className="text-center text-secondary small py-3">
          <p className="m-0">
            Copyright &copy; 2024 @ <strong>Fashionista</strong> - All Right Reserved.
          </p>
          <p className="m-0">
            Developed By <strong>Siham Kalach</strong>
          </p>
        </div>
      </div >
    </>
  );
}

export default Footer;
