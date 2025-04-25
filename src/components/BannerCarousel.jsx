import { useState, useEffect } from 'react';
import '../Styles/BannerCarousel.css';  // Import your styles

const BannerCarousel = ({ image }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgError, setImgError] = useState(false); // State for image error handling

  // Set up the automatic sliding with a 3-second interval, even though it's a single image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(0); // Keeps the current index at 0 as there is only one image
    }, 3000);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  const handleError = () => {
    setImgError(true); // Set to true if the image fails to load
  };

  return (
    <div className="banner-carousel">
      {!imgError && image && (
        <div className="banner-slide">
          <img
            src={image}
            alt="Banner"
            className="banner-image"
            onError={handleError} // Call handleError if image fails to load
          />
        </div>
      )}
      {imgError && <p>Failed to load image</p>} {/* Show error message if image fails */}
    </div>
  );
};

export default BannerCarousel;
