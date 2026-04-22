import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gridData } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when navigation occurs
    const p = gridData.find(item => item.id === parseInt(id));
    setProject(p || { 
      title: 'FILE_NOT_FOUND', 
      description: 'The requested mission log is corrupted or unavailable.', 
      image: '', 
      reels: [] 
    });
  }, [id]);

  if (!project) return null;

  return (
    <div style={styles.container} className="vhs-bg-tint">
      <div className="noise-overlay" style={{ opacity: 0.1 }}></div>
      
      <div style={styles.header}>
        <Link to="/" style={styles.backButton}>
          <span style={{marginRight: '6px'}}>‹</span> Back
        </Link>
        <h1 style={styles.title}>
          {project.title}
        </h1>
      </div>

      <div style={styles.contentGrid}>
        {/* Info Column */}
        <div style={styles.infoCol}>
          <div style={styles.dataBlock}>
            <p style={styles.label}>Client</p>
            <p style={styles.value}>{project.client || 'Classified'}</p>
          </div>
          <div style={styles.dataBlock}>
            <p style={styles.label}>Role</p>
            <p style={styles.value}>{project.role || 'Unknown'}</p>
          </div>
          <div style={styles.dataBlock}>
            <p style={styles.label}>Description</p>
            <p style={styles.value}>{project.description || 'No description available for this work.'}</p>
          </div>
        </div>

        {/* Media Column */}
        <div style={styles.mediaCol}>
          {/* Main Video */}
          <div style={styles.videoWrapper}>
            <iframe 
              width="100%" 
              height="100%" 
              src={`https://www.youtube.com/embed/${project.youtubeId || 'dQw4w9WgXcQ'}?controls=0&modestbranding=1`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>

          {/* Reels Section */}
          {project.reels && project.reels.length > 0 && (
            <div style={styles.reelsSection}>
              <h3 style={styles.reelsTitle}>Vertical Formats</h3>
              <div style={styles.reelsGrid}>
                {project.reels.map((reelImg, idx) => (
                  <div key={idx} style={styles.reelCard}>
                    <img src={reelImg} alt={`Reel ${idx}`} style={styles.reelImage} />
                    <div style={styles.playIcon}>▶</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    width: '100%',
    padding: '80px 8vw 120px 8vw',
    backgroundColor: '#050705',
    position: 'relative',
    color: 'var(--text-main)',
    zIndex: 10,
  },
  header: {
    marginBottom: '2rem',
  },
  backButton: {
    display: 'inline-block',
    textDecoration: 'none',
    marginBottom: '32px',
    fontSize: '15px',
    background: 'transparent',
    cursor: 'pointer',
    color: '#86868b',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
    transition: 'color 0.2s',
  },
  title: {
    fontSize: '3rem',
    fontWeight: '700',
    margin: '0 0 10px 0',
    paddingBottom: '15px',
    letterSpacing: '-1px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
    color: '#fff',
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr', // Mobile first
    gap: '40px',
    marginTop: '30px',
  },
  infoCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  dataBlock: {
    padding: '0',
  },
  label: {
    color: '#86868b',
    margin: '0 0 8px 0',
    fontSize: '13px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
    fontWeight: '600',
  },
  value: {
    margin: 0,
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#e5e5e5',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
  },
  mediaCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
  },
  videoWrapper: {
    width: '100%',
    aspectRatio: '16/9',
    position: 'relative',
    backgroundColor: '#000',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
  },
  reelsSection: {
    marginTop: '10px',
  },
  reelsTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
    marginBottom: '20px',
    color: '#fff',
  },
  reelsGrid: {
    display: 'flex',
    gap: '20px',
    overflowX: 'auto',
    paddingBottom: '20px',
  },
  reelCard: {
    flex: '0 0 200px',
    aspectRatio: '9/16',
    backgroundColor: '#000',
    position: 'relative',
    borderRadius: '12px',
    overflow: 'hidden',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
  },
  reelImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s ease',
  },
  playIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '2rem',
    color: '#fff',
    opacity: 0.9,
    background: 'rgba(0,0,0,0.3)',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(5px)',
  }
};

// adding simple media query injects via document or inline style isn't fully supported so let's rely on base flex layout that wraps since gridTemplateColumns is 1fr setup right now for simplicity. Let's make it more responsive.
styles.contentGrid = {
  ...styles.contentGrid,
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
}

export default ProjectDetail;
