import React from 'react';

const ContactSection = () => {
  return (
    <section style={styles.container} id="contact-section">
      <div style={styles.content}>
        <h2 style={styles.title}>Get in touch.</h2>
        <p style={styles.subtitle}>Interested in collaborating? Send a message.</p>
        
        <form style={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
          <div style={styles.inputGroup}>
            <input type="text" placeholder="Name" className="form-input" />
            <input type="email" placeholder="Email" className="form-input" />
          </div>
          <textarea placeholder="Message..." className="form-input" rows="6" style={{resize: 'vertical'}}></textarea>
          <button style={styles.submitBtn} className="action-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

const styles = {
  container: {
    width: '100%',
    padding: '120px 8vw',
    backgroundColor: 'var(--bg-dark)',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    borderTop: '1px solid rgba(255,255,255,0.05)'
  },
  content: {
    width: '100%',
    maxWidth: '560px', /* Más compacto y minimalista */
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', /* Centrado para un look moderno */
    textAlign: 'center',
    zIndex: 2,
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '600',
    marginBottom: '8px',
    letterSpacing: '-1px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
    color: '#fff',
  },
  subtitle: {
    color: '#a1a1a6',
    fontSize: '1.1rem',
    marginBottom: '48px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
    fontWeight: '400',
  },
  formContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  inputGroup: {
    display: 'flex',
    gap: '16px',
    width: '100%'
  },
  submitBtn: {
    alignSelf: 'center',
    background: '#fff',
    border: 'none',
    color: '#000',
    borderRadius: '30px',
    padding: '12px 32px',
    fontSize: '15px',
    fontWeight: '500',
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    cursor: 'pointer',
    marginTop: '24px',
    transition: 'all 0.2s ease',
  }
};

export default ContactSection;
