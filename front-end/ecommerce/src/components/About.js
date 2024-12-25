import React from "react";
import img1 from '../assets/image5.webp';
import img2 from '../assets/image6.webp';
import img3 from '../assets/image7.webp';
import logo from '../assets/logo.png';
import Footer from "./Footer";
import Nav from "./Nav";
export default function About() {
  return (
    <>
      <Nav></Nav>
      <div className="about bg-light text-center py-5">
        <div className="container">
          {/* Titre et Introduction */}
          <h2 className="mb-4 fw-bold text-dark">Empowering Your Style</h2>
          <p className="text-muted mb-5">
            At Fashionista, we believe fashion is more than just clothing—it's a
            reflection of individuality. Our mission is to help you discover
            styles that empower and inspire.
          </p>

          {/* Section Texte + Images */}
          <div className="row">
            {/* Texte explicatif */}
            {/* Texte explicatif */}
            <div className="col-md-6 px-5 text-start pt-5">
              <h3 className="fw-semibold mb-3"style={{color:'#DC143C'}}>Who We Are</h3>
              <p>
                Fashionista is more than a brand—it's a movement. A place where creativity meets style, and where every piece tells a story. Inspired by global trends and personal flair, we strive to make fashion accessible, empowering, and truly yours.
              </p>
              <h3 className="fw-semibold mb-3" style={{color:'#DC143C'}}>Join the Journey</h3>
              <p>
                Whether you're exploring new trends or redefining your personal style, Fashionista is here to inspire. Let’s create a world where fashion is for everyone, by everyone.
              </p>
            </div>

            {/* Section Images */}
            <div className="col-md-6">
              <div className="row g-3">
                <div className="col-6">
                  <img
                    src={img1}
                    alt="Fashion Inspiration 1"
                    className="img-fluid rounded shadow"
                  />
                </div>
                <div className="col-6">
                  <img
                    src={img2}
                    alt="Fashion Inspiration 2"
                    className="img-fluid rounded shadow"
                  />
                </div>
                <div className="col-6 mt-5">
                
                </div>
                <div className="col-6 mt-3">
                  <img
                    src={img3}
                    alt="Fashion Inspiration 3"
                    className="img-fluid rounded shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
