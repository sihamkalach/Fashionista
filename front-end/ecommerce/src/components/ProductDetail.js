import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import Nav from "./Nav";
import Footer from "./Footer";

function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchProductDetails() {
            try {
                const response = await api.get(`/product/${productId}/`);
                setProduct(response.data[0]);
                console.log(response.data[0])
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        }
        fetchProductDetails();
    }, [productId]);

    if (!product) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <>
            <Nav />
            <div className="container py-5">
                <div className="row align-items-center">
                    {/* Image Section */}
                    <div className="col-lg-6 text-center mb-4">
                        {product.image ? (
                            <img
                                src={product.image}
                                alt={product.title}
                                className="img-fluid rounded shadow-lg"
                                style={{ maxHeight: "400px", objectFit: "cover" }}
                            />
                        ) : (
                            <div className="placeholder bg-light rounded p-5">
                                <p>No Image Available</p>
                            </div>
                        )}
                    </div>

                    {/* Details Section */}
                    <div className="col-lg-6">
                        <h2 className="fw-bold text-dark">{product.title}</h2>
                        <div className="d-flex align-items-center my-2">
                            <span className="badge bg-warning me-2">
                                {product.rating} ★
                            </span>
                            <span className="text-muted">
                                {product.reviews.length || 0} Reviews
                            </span>
                        </div>
                        <p className="text-muted my-3">{product.description}</p>
                        <h3 className="text-danger fw-bold">${product.price}</h3>

                        <div className="my-4">
                            <button className="btn btn-primary me-2 px-4 py-2">
                                <i className="bi bi-cart-plus me-2"></i>Add to Cart
                            </button>
                            <button className="btn btn-danger px-4 py-2">
                                <i className="bi bi-bag-check me-2"></i>Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProductDetail;
