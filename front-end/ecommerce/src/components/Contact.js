import { useState } from "react";
import Navbar from "./Nav";
import Footer from "./Footer";
import image_form from "../assets/form_image.jpeg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message from ${formData.name} has been submitted!`);
  };

  return (
    <>
      <Navbar />
      
      <div className="bg-light p-5">
        <div className="container bg-white p-5 d-flex align-items-center w-75">
          {/* Form Section */}
          <div className="col-lg-7">
            {/* Section Title */}
            <h2 className="text-center ">Contact Us</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill px-4"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control rounded-pill px-4"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control rounded-3 px-3"
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary rounded-pill w-100">
                  Submit
                </button>
              </form>
            </div>
            {/* Image Section */}
        <div className="col-lg-5 text-center">
          <img
            src={image_form}
            alt="Contact Us"
            className="img-fluid"
            style={{ maxHeight: "400px" }}
          />
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
