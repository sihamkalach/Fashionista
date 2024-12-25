import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  // Use useNavigate from react-router-dom
import Nav from "./Nav";
import Footer from "./Footer";
import { Row, Col, Card, Badge } from 'react-bootstrap';
import api from "../api";

function Collections() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();  // Use useNavigate instead of useHistory

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get("/categories");
                setCategories(response.data); // Load categories
            } catch (error) {
                console.error("Erreur lors du fetch des catégories :", error);
            }
        }
        fetchData();
    }, []);

    const handleCategoryClick = (categoryName) => {
        navigate(`/products/${categoryName}`); // Use navigate to redirect
    };

    return (
        <div>
            <Nav />
            <div className="bg-light text-center py-5">
                <div className="container">
                    <h2 className="mb-4 text-center fw-bold text-dark">Latest Collections</h2>
                    <p className="text-muted text-center mb-5 px-5">
                        Discover the latest additions to our collection, designed with a focus
                        on elegance, comfort, and style.
                    </p>
                </div>
                <div className="categories m-5">
                    <Row className="g-4">
                        {categories.map((category) => (
                            <Col key={category.id} lg={3} md={6} sm={12}>
                                <Card
                                    className="shadow-sm border-0 h-100 position-relative"
                                    style={{ overflow: "hidden", borderRadius: "15px", cursor: "pointer" }}
                                    onClick={() => handleCategoryClick(category.name)}
                                >
                                    <Card.Img className="p-5"
                                        src={category.image}
                                        alt={category.name}
                                        style={{ height: "300px"}}
                                    />
                                    <Card.Body className="text-center">
                                        <Badge bg="dark" className="mb-2">{category.name}</Badge>
                                        <Card.Title className="fw-bold text-dark">
                                            {category.name}
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Collections;
