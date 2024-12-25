import React, { useState, useEffect } from "react";
import api from "../api"; // Adapter en fonction de votre configuration
import ProductItem from "./ProductItem";

function GetProducts({ categoryId }) {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    useEffect(() => {
        async function fetchData() {
            try {
                const response = categoryId
                    ? await api.get(`/categories/${categoryId}/products/`)  // Filter by category
                    : await api.get("/products", { timeout: 15000 }); // Fetch all products
                setProducts(response.data);
            } catch (error) {
                console.error("Erreur lors du fetch des produits :", error);
            }
        }
        fetchData();
    }, [categoryId]); // Trigger fetch when categoryId changes

    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <>
            <div className="bg-light text-center py-5">
                <div className="container">
                    <h2 className="mb-4 text-center fw-bold text-dark">Explore Our Exclusive Collection</h2>
                    <p className="text-muted text-center mb-4 px-5">
                        Discover +{products.length - 2} handpicked products, carefully curated to bring the finest quality and style right to your doorstep.
                    </p>
                </div>

                <div className="row g-4 mx-5 my-1">
                    {currentProducts.map((product) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
                            <ProductItem
                                id={product.id}
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

                <div className="pagination-container m-4 p-4">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                <button
                                    className="page-link"
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    Previous
                                </button>
                            </li>

                            {Array.from({ length: totalPages }, (_, index) => (
                                <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                                    <button
                                        className="page-link"
                                        onClick={() => handlePageChange(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                </li>
                            ))}

                            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                <button
                                    className="page-link"
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                >
                                    Next
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default GetProducts;
