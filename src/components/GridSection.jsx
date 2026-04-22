import React from 'react';
import GridCell from './GridCell';
import { gridData } from '../data/projects';

const GridSection = () => {
  return (
    <section style={styles.sectionContainer} id="archive-section">
      <h2 style={styles.sectionTitle}>Selected Works.</h2>
      <div style={styles.gridContainer}>
        {gridData.map(item => (
          <GridCell key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

const styles = {
  sectionContainer: {
    width: '100%',
    minHeight: '100vh',
    padding: '80px 8vw 120px 8vw', // Bottom padding accounts for the DockBar
    backgroundColor: '#050705', // Deep black-green specifically for this section
    position: 'relative',
    zIndex: 10,
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '600',
    marginBottom: '2.5rem',
    letterSpacing: '-1px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
    color: '#fff',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '10px', // Creates the thick black separation lines
    maxWidth: '1000px', // Centered block width
    margin: '0 auto', // Center it horizontally
    backgroundColor: '#050705', // Acts as the thick border background
    border: '10px solid #050705', // Outer frame
  }
};

export default GridSection;
