import api from "./api"; // Import the Axios instance from api.js

const fetchRecommendations = async (query) => {
    try {
        const response = await api.post('/recommend-products/', {
            query: query, // Pass the search term to the backend
        });
        return response.data.recommended_products; // Extract the recommended products
    } catch (error) {
        console.error("Error fetching recommendations:", error);
        return [];
    }
};

export default fetchRecommendations;
