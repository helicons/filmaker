import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <p style={styles.text}>© {new Date().getFullYear()} Digital Canvas. All rights reserved.</p>
        <div style={styles.links}>
          <a href="#" className="footer-link">Instagram</a>
          <a href="#" className="footer-link">Twitter / X</a>
          <a href="#" className="footer-link">Vimeo</a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    width: '100%',
    backgroundColor: '#07090b',
    padding: '30px 8vw',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    position: 'relative',
    zIndex: 10,
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  text: {
    color: '#86868b',
    fontSize: '12px',
    margin: 0,
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
  },
  links: {
    display: 'flex',
    gap: '24px',
  }
};

export default Footer;
