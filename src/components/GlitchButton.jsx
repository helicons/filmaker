import React, { useState } from 'react';

const GlitchButton = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button 
      style={{
        ...styles.button,
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        boxShadow: isHovered ? '0 0 20px rgba(50, 255, 122, 0.4)' : '0 0 10px rgba(50, 255, 122, 0.2)'
      }}
      className={`mono-font ${isHovered ? 'glitch-hover neon-text' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
      <span style={styles.bracket}> _</span>
    </button>
  );
};

const styles = {
  button: {
    background: 'rgba(50, 255, 122, 0.1)',
    border: '1px solid var(--neon-green)',
    color: 'var(--neon-green)',
    padding: '12px 24px',
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: '4px',
    backdropFilter: 'blur(5px)',
    transition: 'all 0.2s ease',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    display: 'flex',
    alignItems: 'center',
  },
  bracket: {
    animation: 'blink 1s step-end infinite',
    marginLeft: '5px'
  }
};

export default GlitchButton;
