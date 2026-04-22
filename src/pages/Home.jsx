import React from 'react';
import { Link } from 'react-router-dom';
import FloatingProjectsLayer from '../components/FloatingProjectsLayer';
import GridSection from '../components/GridSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import heroDarkProfile from '../assets/hero-black-profile.png';

const Home = () => {
  return (
    <>
      {/* Main Content Area - Represents the Desktop */}
      <div className="main-content" style={styles.mainContent}>
        
        {/* Floating About Button */}
        <Link to="/about" style={styles.aboutButton}>
          About Me
        </Link>
        
        {/* Background Vintage Hero Image */}
        <div style={styles.heroBackgroundContainer}>
          <img 
            src={heroDarkProfile} 
            alt="Cinematic Identity" 
            style={styles.heroImage} 
          />
        </div>

        {/* Layer: Apple Desktop Icons Scattered */}
        <FloatingProjectsLayer />

      </div>

      {/* Below the fold: Vintage VHS Grid Archive Section */}
      <GridSection />

      {/* Connectivity & Outreach */}
      <ContactSection />
      
      {/* Site Terminus */}
      <Footer />
    </>
  );
};

const styles = {
  mainContent: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    zIndex: 10,
    background: 'transparent',
    overflow: 'hidden',
  },
  heroBackgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    overflow: 'hidden',
    backgroundColor: '#07090b',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain', // Ahora al ser "contain", no se corta nunca, y como los bordes son negros se funden con el contenedor.
    objectPosition: 'center',
    filter: 'blur(3px)', 
    opacity: 0.75, // Difuminado sutil contra el fondo oscuro
  },
  aboutButton: {
    position: 'absolute',
    top: '30px',
    right: '40px',
    padding: '8px 20px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
    fontWeight: '500',
    zIndex: 100,
    transition: 'background 0.2s',
  },
  blueOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 156, 255, 0.25)', // Filtro azul sutil transparente
    mixBlendMode: 'color', // Aplica el tono azul a todo lo que está detrás de forma nativa e integrada sin perder la imagen
    pointerEvents: 'none'
  }
};

export default Home;
