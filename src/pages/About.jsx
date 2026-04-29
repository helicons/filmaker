import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.container}>
      {/* Floating Back Button */}
      <Link to="/" style={styles.backButton}>
        <span style={{marginRight: '6px'}}>‹</span> Home
      </Link>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>¿QUIEN C*ÑO ES<br/><span style={{color: '#fff'}}>ABRAHAMHERE?</span></h1>
          <h2 style={styles.heroSub}>ESTE TIO?</h2>
          <h2 style={styles.heroQ}>¿POR QUÉ ESTOY EN ESTA WEB?</h2>
          <p style={styles.scrollText}>VAAALE, YA TE LO EXPLICO, DESLIZA ↓</p>
        </div>
      </section>

      {/* Bio Section */}
      <section style={styles.bioSection}>
        <h3 style={styles.sectionHeader}>Software Skills & Bio</h3>
        <p style={styles.paragraph}>
          Ahora que te he hecho deslizar, me presento. <br/><br/>
          Me llamo Abraham, tengo 18 años y soy de Madrid.
        </p>
        <p style={styles.paragraph}>
          Desde pequeño siempre supe que iba a dedicarme a crear, no sabía qué, dónde y cómo, pero a día de hoy me dedico a eso.
        </p>
        <p style={styles.paragraph}>
          Siempre he tenido claro que voy a vivir la vida que yo quiero y no la que los demás me dicen que viva, y aunque a veces sea difícil, lo estoy consiguiendo.
        </p>
        <p style={styles.paragraph}>
          Actualmente estoy enfocado en mi desarrollo profesional como Filmmaker, en busca de nuevos proyectos, aprendizaje y desarrollo de nuevas habilidades y creación de contenido.
        </p>
      </section>

      {/* Skills Section */}
      <section style={styles.skillsSection}>
        <h3 style={styles.sectionHeader}>¿Y tus habilidades?</h3>
        
        <div style={styles.skillsGrid}>
          <div style={styles.skillCard}>Filmmaking</div>
          <div style={styles.skillCard}>Edición de Video</div>
          <div style={styles.skillCard}>Branding</div>
          <div style={styles.skillCard}>Marca Personal</div>
          <div style={styles.skillCard}>Diseño Gráfico</div>
          <div style={styles.skillCard}>Redes Sociales</div>
        </div>

        <p style={styles.paragraph}>
          Me dedico a la creación de contenido audiovisual y gráfico desde hace 6 años, aún así, me sigo formando a día de hoy tanto de manera autodidacta como profesional sobre los programas, equipo y tendencias actuales.
        </p>
        <p style={styles.paragraph}>
          He cursado el Bachillerato de Sociales y actualmente estoy realizando el Curso de Edición y Postproducción de Video + Aplicaciones de Inteligencia Artificial Generativa.
        </p>
        <p style={styles.subtext}>(Y bastantes cosas más)</p>
      </section>

      {/* Footer / Contact */}
      <section style={styles.footerSection}>
        <div style={styles.footerContent}>
          <div style={styles.contactBlock}>
            <h4 style={styles.contactHeader}>Contacto</h4>
            <a href="tel:+34682407232" style={styles.link}>+34 682 40 72 32</a>
            <a href="mailto:abrxhxmhere@gmail.com" style={styles.link}>abrxhxmhere@gmail.com</a>
            <a href="https://instagram.com/abrahamheree" target="_blank" rel="noreferrer" style={styles.link}>@abrahamheree</a>
          </div>
          <div style={styles.contactBlock}>
            <h4 style={styles.contactHeader}>Perfiles</h4>
            <p style={styles.profilesText}>
              @anasandaloussii @udia.es @sleeepyxx @Iift.es @ivmatas @caerloscgv
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#07090b',
    color: '#f5f5f7',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif',
    overflowX: 'hidden',
    boxSizing: 'border-box',
  },
  backButton: {
    position: 'fixed',
    top: '30px',
    left: '40px',
    textDecoration: 'none',
    fontSize: '15px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    backdropFilter: 'blur(10px)',
    padding: '8px 16px',
    borderRadius: '20px',
    color: '#fff',
    zIndex: 100,
    transition: 'background 0.2s',
  },
  heroSection: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 20px',
  },
  heroContent: {
    maxWidth: '800px',
    animation: 'fadeIn 1s ease-out forwards',
  },
  heroTitle: {
    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
    fontWeight: '700',
    letterSpacing: '-2px',
    color: '#a1a1a6',
    margin: '0 0 20px 0',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
    lineHeight: '1.1',
  },
  heroSub: {
    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
    fontWeight: '600',
    color: '#a1a1a6',
    margin: '0 0 10px 0',
    opacity: 0.8,
  },
  heroQ: {
    fontSize: 'clamp(1rem, 2vw, 1.5rem)',
    fontWeight: '500',
    color: '#fff',
    margin: '0 0 60px 0',
    opacity: 0.6,
  },
  scrollText: {
    fontSize: '14px',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    opacity: 0.5,
    animation: 'bounce 2s infinite',
  },
  bioSection: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '100px 20px',
  },
  sectionHeader: {
    fontSize: '2rem',
    fontWeight: '600',
    marginBottom: '40px',
    color: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
    letterSpacing: '-0.5px',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#a1a1a6',
    marginBottom: '24px',
  },
  skillsSection: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '50px 20px 100px 20px',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '16px',
    marginBottom: '50px',
  },
  skillCard: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    padding: '20px 15px',
    borderRadius: '16px',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: '500',
    color: '#fff',
  },
  subtext: {
    fontSize: '14px',
    color: '#555',
    marginTop: '20px',
    fontStyle: 'italic',
  },
  footerSection: {
    borderTop: '1px solid rgba(255,255,255,0.05)',
    padding: '80px 20px',
    background: '#050708',
  },
  footerContent: {
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '40px',
  },
  contactBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    flex: 1,
    minWidth: '250px',
  },
  contactHeader: {
    color: '#fff',
    fontSize: '18px',
    marginBottom: '10px',
    fontWeight: '600',
  },
  link: {
    color: '#a1a1a6',
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'color 0.2s',
  },
  profilesText: {
    color: '#a1a1a6',
    fontSize: '16px',
    lineHeight: '1.6',
    margin: 0,
  }
};

export default About;
