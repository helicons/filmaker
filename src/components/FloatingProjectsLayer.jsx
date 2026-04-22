import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { gridData } from '../data/projects';

// Show a limited number of items right on the desktop mock
const extraData = gridData.map((item, index) => ({
  ...item,
  title: item.title + (index % 2 === 0 ? '_FINAL' : '_v3_DRAFT'),
}));

const desktopProjects = [...gridData, ...extraData].slice(0, 15);

const FloatingProjectsLayer = () => {
  return (
    <div style={styles.layerContainer}>
      <div style={styles.desktopGrid}>
        {desktopProjects.map((project, index) => (
          <DesktopIcon key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

const scatterPositions = [
  { top: '15%', left: '25%' },
  { top: '40%', left: '22%' },
  { top: '12%', left: '55%' },
  { top: '55%', left: '68%' },
  { top: '75%', left: '30%' },
  { top: '65%', left: '20%' },
  { top: '80%', left: '50%' },
  { top: '8%', left: '40%' },
  { top: '22%', left: '48%' },
  { top: '38%', left: '65%' },
  { top: '52%', left: '18%' },
  { top: '85%', left: '70%' },
  { top: '88%', left: '45%' },
  { top: '8%', left: '70%' },
  { top: '60%', left: '42%' },
];

const DesktopIcon = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Get the scattered position mapping safely
  const pos = scatterPositions[index % scatterPositions.length];
  
  // Start from scattered position
  const iconStyle = {
    ...styles.iconWrapper,
    left: pos.left,
    top: pos.top,
    backgroundColor: 'transparent',
  };

  return (
    <Link 
      to={`/project/${project.id}`}
      style={iconStyle} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.imageWrapper}>
        <img src={project.image} alt={project.title} style={{
          ...styles.image, 
          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
        }} />
      </div>
      
      <div style={styles.textWrapper}>
        <p style={styles.title}>
          {project.title.toUpperCase()}
        </p>
      </div>
    </Link>
  );
};

const styles = {
  layerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    pointerEvents: 'none',
    zIndex: 6,
  },
  desktopGrid: {
    position: 'absolute',
    top: 0, right: 0, bottom: 0, width: '100%',
  },
  iconWrapper: {
    position: 'absolute',
    width: '70px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    pointerEvents: 'auto', 
    cursor: 'pointer',
    textDecoration: 'none',
  },
  imageWrapper: {
    width: '54px',
    height: '54px', // Más pequeños
    overflow: 'hidden',
    marginBottom: '6px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.15)', // Sombra súper suave
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s ease',
  },
  textWrapper: {
    width: '100%',
    textAlign: 'center',
  },
  title: {
    margin: 0,
    fontSize: '8px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
    color: '#fff', // Texto claro nuevamente para acoplarse al fondo oscuro
    fontWeight: '600',
    letterSpacing: '0.5px',
    display: 'inline-block',
    lineHeight: '1.2',
    wordBreak: 'break-word',
    opacity: 0.8,
  }
};

export default FloatingProjectsLayer;
