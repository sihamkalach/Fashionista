import React from "react";
import { useParams } from "react-router-dom";  // Import useParams from react-router-dom
import Nav from "./Nav";
import Footer from "./Footer";
import GetProducts from "./GetProducts";

function Products() {
    const { categoryName } = useParams();  // Get categoryName from URL parameters

    return (
        <>
            <Nav />
            <GetProducts categoryId={categoryName} />  {/* Pass categoryName to GetProducts */}
            <Footer />
        </>
    );
}

export default Products;

