import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GridCell = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={`/project/${data.id}`}
      style={styles.cellWrapper}
      className={`grid-cell-glitch ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.frame} className="grid-frame">
        <div style={styles.imageContainer}>
          <img src={data.image} alt={data.title} style={styles.image} className="target-image vhs-blue" />
          
          {/* SVG Noise Layer and internal scanlines explicitly for inside the frame */}
          <div className="noise-overlay"></div>
          <div style={styles.cellCrts}></div>
          
          {/* Text Overlay inside the image container now */}
          <div style={{ ...styles.infoBox, opacity: isHovered ? 1 : 0 }}>
            <p className="vhs-text mono-font" style={styles.titleText}>
              {isHovered ? `> CONNECTING...` : `[ ${data.title} ]`}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const styles = {
  cellWrapper: {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    position: 'relative',
  },
  frame: {
    backgroundColor: '#000',
    position: 'relative',
    transition: 'all 0.3s ease',
  },
  imageContainer: {
    overflow: 'hidden',
    position: 'relative',
    aspectRatio: '1/1', // Square like the pure grid reference
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  cellCrts: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'linear-gradient(transparent 50%, rgba(0,0,0,0.6) 50%)',
    backgroundSize: '100% 4px',
    pointerEvents: 'none',
    mixBlendMode: 'overlay',
  },
  infoBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: '15px 10px',
    background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
    transition: 'opacity 0.3s ease',
    textAlign: 'center',
    zIndex: 5,
  },
  titleText: {
    margin: 0,
    fontSize: '0.85rem',
    letterSpacing: '1px',
    textShadow: '0 0 4px var(--neon-blue)',
    fontWeight: 'bold',
  }
};

export default GridCell;
