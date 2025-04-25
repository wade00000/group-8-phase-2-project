import React from 'react';
import '../Styles/About.css';  // Import your updated CSS file
import reactImage from '../assets/React.png';
import nodeImage from '../assets/Node.png';
import cssImage from '../assets/Css.png';

const About = () => {
  return (
    <div className="about-page">
      {/* Header Section */}
      <section className="about-header">
        <div className="about-header-content">
          <h1 className="about-title">Welcome to Open Library</h1>
          <p className="about-description">
            Discover and share your favorite books with the world. Join us in exploring the world of literature and building a global reading community.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-mission">
        <div className="mission-item">
          <h2>Our Mission</h2>
          <p>
            At Open Library, we aim to provide access to a vast collection of books from around the world. We want to make reading accessible to everyone and build a global library community.
          </p>
        </div>
        <div className="mission-item">
          <h2>Our Vision</h2>
          <p>
            Our vision is to build the largest online library that connects readers, authors, and enthusiasts from every corner of the globe, sharing knowledge and fostering creativity.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="about-features">
        <div className="feature">
          <h3>Explore Books</h3>
          <p>Browse thousands of books across all genres and discover your next favorite read.</p>
        </div>
        <div className="feature">
          <h3>Share Your Favourites</h3>
          <p>Save and share your favorite books with others. Create your own personal library.</p>
        </div>
        <div className="feature">
          <h3>Join the Community</h3>
          <p>Interact with fellow book lovers, share reviews, and recommendations.</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2 className="team-title">Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="path/to/image1.jpg" alt="Team Member" />
            <h3>Esther Mutua</h3>
            <p>Team Member</p>
          </div>
          <div className="team-member">
            <img src="path/to/image2.jpg" alt="Team Member" />
            <h3>Ian Wafula</h3>
            <p>Team Member</p>
          </div>
          <div className="team-member">
            <img src="path/to/image3.jpg" alt="Team Member" />
            <h3>Wade Namada</h3>
            <p>Team Member</p>
          </div>
          <div className="team-member">
            <img src="path/to/image3.jpg" alt="Team Member" />
            <h3>Golda Atemba</h3>
            <p>Team Member</p>
          </div>
          <div className="team-member">
            <img src="path/to/image3.jpg" alt="Team Member" />
            <h3>Patrick Kamau</h3>
            <p>Team Member</p>
          </div>
        </div>
      </section>

      {/* Technologies Used Section */}
      <section className="about-tech">
        <h2 className="tech-title">Technologies We Use</h2>
        <div className="tech-list">
          <div className="tech-item">
            <img src={reactImage} alt="React" />
            <p>React.js</p>
          </div>
          <div className="tech-item">
            <img src={nodeImage} alt="Node.js" />
            <p>Node.js</p>
          </div>
          <div className="tech-item">
            <img src={cssImage} alt="CSS" />
            <p>CSS3</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Start Your Reading Journey?</h2>
        <button className="cta-button">Get Started</button>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default About;
