import React, { useState, useEffect } from "react";
import api from "../api"; // Replace with your API config
import ProductItem from "./ProductItem";

function HighestRatedProducts() {
    const [highestRatedProducts, setHighestRatedProducts] = useState([]);

    useEffect(() => {
        async function fetchHighestRatedProducts() {
            try {
                const response = await api.get("/highest-rated-products/");
                setHighestRatedProducts(response.data);
            } catch (error) {
                console.error("Error fetching highest rated products:", error);
            }
        }
        fetchHighestRatedProducts();
    }, []);

    return (
        <div className="bg-light text-center py-5">
            <div className="container">
                <h2 className="mb-4 text-center fw-bold text-dark">
                    Top-Rated Products
                </h2>
                <p className="text-muted text-center mb-4 px-5">
                    Check out our highest-rated products, handpicked for you!
                </p>

                <div className="row g-4 mx-5 my-1">
                    {highestRatedProducts.map((product) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
                            <ProductItem
                                id = {product.id}
                                title={product.title}
                                description={product.description}
                                price={product.price}
                                rating={product.rating}
                                image={product.image}
                                reviews={product.reviews}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HighestRatedProducts;
