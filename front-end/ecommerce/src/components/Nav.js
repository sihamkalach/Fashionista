import { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import fetchRecommendations from "../fetchRecommendations";

export default function Nav() {
  // Menu items
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/collections' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Search input state
  const [recommendations, setRecommendations] = useState([]); // Recommendations state

  const searchHandler = () => {
    setShowSearch(!showSearch);
  };

  const handleSearch = async () => {
    if (searchTerm.trim()) {
      const results = await fetchRecommendations(searchTerm);
      setRecommendations(results);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light py-3 border-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo on the left */}
          <Link to="/" className="navbar-brand">
            <img src={assets.logo} alt="Fashionista Logo" width="120" />
          </Link>

          {/* Centered Navigation Links */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav text-uppercase gap-3">
              {menuItems.map((item, index) => (
                <li
                  className="nav-item position-relative"
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)} // Activer la ligne
                  onMouseLeave={() => setHoveredIndex(null)} // Désactiver la ligne
                >
                  <Link
                    to={item.path}
                    className="nav-link"
                    style={{
                      position: 'relative',
                      paddingBottom: '10px', // Légère marge en dessous
                    }}
                  >
                    {item.name}
                    {/* Ligne en dessous */}
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0, // Ligne au bas
                        left: 0,
                        height: '3px',
                        width: hoveredIndex === index ? '100%' : '0',
                        backgroundColor: '#DC143C', // Couleur de la ligne
                        transition: 'width 0.2s ease-in-out',
                      }}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right-side Icons */}
          <div className="d-flex align-items-center gap-4 ms-3">
            <Link>
              <img
                src={assets.search_icon}
                alt="Search Icon"
                width="20"
                onClick={searchHandler}
              />
            </Link>
            <Link to="/profile">
              <img src={assets.profile_icon} alt="Profile Icon" width="20" />
            </Link>
            <Link to="/basket">
              <img src={assets.cart_icon} alt="Cart Icon" width="20" />
            </Link>
          </div>
        </div>
      </nav>
      
      {/* Search bar with recommendations */}
      {showSearch && (
        <div className="container-fluid m-3">
          <form 
            className="d-flex justify-content-center" 
            role="search" 
            onSubmit={(e) => { e.preventDefault(); handleSearch(); }}
          >
            <input
              className="form-control me-2 rounded-pill shadow-sm border-1 p-3"
              type="search"
              placeholder="Search for products, collections, or brands..."
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>

          {/* Display Recommendations */}
          {recommendations.length > 0 && (
            <div className="container mt-3">
              <h5>Recommended Products:</h5>
              <ul>
                {recommendations.map((product, index) => (
                  <li key={index} className="mb-2">
                    <Link to={`/product/${product.id}`} className="text-decoration-none">
                      <strong>{product.title}</strong> - {product.category}
                    </Link>
                    <p>{product.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
}
