import React from 'react';
import { Film, Video, MonitorPlay, Tv, Layers, Cloud } from 'lucide-react';

const DockBar = () => {
  const icons = [
    { name: 'Finder', Component: Cloud },
    { name: 'Premiere Pro', Component: Film },
    { name: 'After Effects', Component: Layers },
    { name: 'DaVinci Resolve', Component: MonitorPlay },
    { name: 'Final Cut', Component: Video },
    { name: 'Edit Suite', Component: Tv },
  ];

  return (
    <div style={styles.dockContainer}>
      <div style={styles.dock} className="animate-fade-in">
        {icons.map((item, index) => (
          <div key={index} style={styles.iconWrapper} className="dock-icon" title={item.name}>
            <div style={styles.iconBg}>
              <item.Component size={28} style={styles.icon} />
            </div>
            {/* The little dot native to mac showing it's open */}
            <div style={styles.activeDot}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  dockContainer: {
    position: 'fixed',
    bottom: '10px', // closer to edge like mac
    left: '0',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 40,
  },
  dock: {
    display: 'flex',
    gap: '12px',
    background: 'rgba(255, 255, 255, 0.2)', // brighter glass for apple dock
    backdropFilter: 'blur(30px)',
    padding: '10px 14px',
    borderRadius: '24px',
    border: '1px solid rgba(255,255,255,0.3)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
  },
  iconWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
  },
  iconBg: {
    width: '56px',
    height: '56px',
    borderRadius: '14px',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
  },
  icon: {
    color: '#009cff',
  },
  activeDot: {
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    marginTop: '4px',
    opacity: 0.8,
  }
};

export default DockBar;
