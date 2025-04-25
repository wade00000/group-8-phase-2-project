import { Facebook, Twitter, Instagram, BookOpen } from 'lucide-react';
import React from 'react';
import '../Styles/Footer.css'; 
import logo from '../assets/logo.jpg';



const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container">
        <div className="row">

          {/* Branding */}
          <div className="col-md-4 mb-4 d-flex align-items-center">
            {/* Branding - Logo on top of Open Library text */}
            <div className="d-flex flex-column align-items-center">
              <img src={logo} alt="openlibrary Logo" className="footer-logo" />
              
              <div>
                <h5 className="mb-1">Open Library</h5>
                <p className="footer-description">
                  Discover and share your favorite reads with the world.
                </p>
              </div>
            </div>
          </div>


          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/home" className="text-decoration-none text-light">Home</a></li>
              <li><a href="/about" className="text-decoration-none text-light">About Us</a></li>
              <li><a href="/" className="text-decoration-none text-light">Browse Books</a></li>
              <li><a href="/favourites" className="text-decoration-none text-light">Favourites</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4 contact-section">
            <h6 className="mb-3">Contact</h6>
            <p className="mb-1 small">Email: support@openlibrary.com</p>
            <p className="mb-0 small-2">Phone: +254 (000) 123-4567</p>
          </div>


          {/* Social Media */}
          <div className="col-md-3 mb-4 follow-us-section">
            <h6 className="mb-3">Follow Us</h6>
            <div className="d-flex gap-1">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <Facebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <Twitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <Instagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
  &copy; {new Date().getFullYear()} Open Library. All rights reserved.
</div>

      </div>
    </footer>
  );
};

export default Footer;
