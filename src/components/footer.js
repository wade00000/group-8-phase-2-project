import React from 'react';
// components/Footer.js
import { Facebook, Twitter, Instagram, BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-muted text-decoration-none">About Us</a></li>
              <li><a href="/browse" className="text-muted text-decoration-none">Browse Books</a></li>
              <li><a href="/contact" className="text-muted text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="col-md-4 mb-4">
            <h6 className="mb-3">Follow Us</h6>
            <div className="d-flex gap-3">
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
        <div className="text-center mt-4 border-top pt-3 text-muted small">
          &copy; {new Date().getFullYear()} BookShare. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
