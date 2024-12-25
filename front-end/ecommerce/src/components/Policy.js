import React from "react";
import { assets } from "../assets/assets";

function Policy() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      {/* Policies Section */}
      <div className="bg-white py-5">
        <div className="row text-center text-secondary">
          <div className="col-12 col-sm-4 mb-4 mb-sm-0">
            <img
              src={assets.exchange_icon}
              className="img-fluid mb-3"
              alt="Exchange Icon"
              width="50"
            />
            <p className="fw-bold text-dark">Easy Exchange Policy</p>
            <p>We offer hassle-free exchange policy.</p>
          </div>
          <div className="col-12 col-sm-4 mb-4 mb-sm-0">
            <img
              src={assets.quality_icon}
              className="img-fluid mb-3"
              alt="Quality Icon"
              width="50"
            />
            <p className="fw-bold text-dark">7 Days Return Policy</p>
            <p>We provide a 7-day free return policy.</p>
          </div>
          <div className="col-12 col-sm-4">
            <img
              src={assets.support_img}
              className="img-fluid mb-3"
              alt="Support Icon"
              width="50"
            />
            <p className="fw-bold text-dark">Best Customer Support</p>
            <p>We provide 24/7 customer support.</p>
          </div>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="container text-center py-5">
        <h1 className="mb-3 fw-semibold text-dark">
          Subscribe now & get 20% off
        </h1>
        <p className="text-secondary mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <form
          onSubmit={handleSubmit}
          className="row justify-content-center align-items-center g-3"
        >
          <div className="col-auto">
            <input
              required
              type="email"
              className="form-control rounded-pill px-4"
              placeholder="Enter your email"
            />
          </div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-dark rounded-pill px-4 text-uppercase"
              style={{
                backgroundColor: "#DC143C",
                border:'none'
              }}
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Policy;
