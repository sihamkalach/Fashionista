import React from "react";
import imagenotfound from "../assets/imagenotfound.jpg"
import { Link } from "react-router-dom";
function ProductItem({id,title, description, price, rating, image , reviews}) {
  // Fonction pour afficher les étoiles du rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {"★".repeat(fullStars)}
        {halfStar && "☆"}
        {"☆".repeat(emptyStars)}
      </>
    );
  };

  return (
    <div className="card shadow-sm h-100">
      {/* Image avec badge "New" */}
      <div className="position-relative">
        <img
          src={image || imagenotfound}
          className="card-img-top"
          style={{ height: "250px", width:'150px' }}
        />
      </div>

      {/* Détails du produit */}
      <div className="card-body">
        <h5 className="card-title text-truncate">{title}</h5>
        <p className="card-text text-muted text-truncate">{description}</p>
        <p className="card-text">
          <strong>${price}</strong>
        </p>
        <p className="card-text text-warning mb-2" style={{ fontSize: "1.2rem" }}>
          {renderStars(rating)}
        </p>
        <Link to={`/product/${id}`} className="btn btn-primary">
                    View Details
                </Link>
      </div>

      {/* Section des avis */}
      {reviews && reviews.length > 0 && (
        <div className="card-footer">
          <h6>Reviews:</h6>
          {reviews.slice(0, 2).map((review, index) => (
            <blockquote
              key={index}
              className="blockquote mb-2"
              style={{ fontSize: "0.9rem" }}
            >
              <p className="mb-3">"{review.comment}"</p>
              <footer className="blockquote-footer">
                {review.reviewerName}
              </footer>
            </blockquote>
          ))}
        </div>
      )}
    </div>
  );
}
export default ProductItem;
