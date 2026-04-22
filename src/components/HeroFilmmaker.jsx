import React from 'react';

const HeroFilmmaker = () => {
  return (
    <div style={styles.container} className="animate-fade-in">
      {/* Widget 1: Weather / Date (Mac style) */}
      <div style={styles.weatherWidget}>
        <div style={styles.widgetHeader}>
          <span style={{color: '#ff3b30', fontSize: '11px', fontWeight: 'bold'}}>ABRIL</span>
          <br/>
          <h2 style={{margin: '0', fontSize: '26px', letterSpacing: '-1px'}}>17 Mié</h2>
        </div>
        <div style={styles.weatherInfo}>
          <h1 style={{margin: '5px 0 0 0', fontSize: '38px', fontWeight: 'normal'}}>22°</h1>
          <p style={{margin: '0', fontSize: '12px', color: '#c0c0c0', lineHeight: 1.4}}>Nublado<br/>Máx. 26° Mín. 13°</p>
        </div>
      </div>

      {/* Widget 2: Photo / Profile */}
      <div style={styles.photoWidget}>
        <img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
          alt="Filmmaker Profile" 
          style={styles.profileImage}
          className="vhs-blue"
        />
        <div style={styles.overlayText}>
          <h2 style={{margin: 0, fontSize: '1.2rem', textShadow: '0 2px 4px rgba(0,0,0,0.8)'}}>Lo mejor de las</h2>
          <h2 style={{margin: 0, fontSize: '1.2rem', textShadow: '0 2px 4px rgba(0,0,0,0.8)'}}>últimas semanas</h2>
          <p style={{margin: '5px 0 0 0', fontSize: '10px', color: '#eaeaea'}}>30 DIC 2025 - 8 ENE 2026</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'absolute',
    top: '40px',
    left: '40px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    zIndex: 5,
  },
  weatherWidget: {
    width: '160px',
    height: '160px',
    borderRadius: '24px',
    backgroundColor: 'rgba(40,40,45,0.7)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.1)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    padding: '16px 20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  photoWidget: {
    width: '280px',
    height: '160px',
    borderRadius: '24px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    border: '1px solid rgba(255,255,255,0.1)',
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlayText: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: '16px',
    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
    color: '#fff',
  }
};

export default HeroFilmmaker;
