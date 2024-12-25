import image from '../assets/notfound-removebg-preview.png';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

export default function PageNotFound() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <div className="container text-center my-5">
        {/* Image Section */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <img 
              src={image} 
              alt="Page Not Found" 
              className="img-fluid mb-4"
              style={{ maxWidth: '400px' }}
            />
          </div>
        </div>

        {/* Message Section */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="fw-bold text-danger mb-4">
              Oops! Page Not Found.
            </h1>
            <p className="text-secondary mb-4">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
          </div>
        </div>

        {/* Button Section */}
        <div className="row justify-content-center">
          <div className="col-auto">
            <button
              onClick={handleClick}
              className="btn btn-danger rounded-pill px-4 text-uppercase"
            >
              Back To Home
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
