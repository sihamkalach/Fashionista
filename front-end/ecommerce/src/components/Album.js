import React, { useEffect, useState } from 'react';
import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image3.jpg';
import img4 from '../assets/image4.jpg';

function Album() {
  // Définir les images et leurs descriptions
  const images = [
    { src: img1, text: "Explorez l'élégance moderne d'une boutique." },
    { src: img2, text: "Un style chic et audacieux, prêt pour la caméra." },
    { src: img3, text: "L'art de la photographie, capturé en coulisses." },
    { src: img4, text: "La sophistication intemporelle avec une touche de couleur." }
  ];
  return (
    <div className="container py-5">
      <div className="row">
        {images.map((img, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3 mb-4 position-relative image-container">
            <img src={img.src} className="img-fluid rounded shadow" alt={`Image ${index + 1}`} />
            <div className="overlay d-flex align-items-center justify-content-center">
              <p className="text-center text-uppercase">{img.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Album;

