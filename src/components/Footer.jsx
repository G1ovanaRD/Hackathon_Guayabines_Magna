import React from 'react';
import footerDesign from '../assets/footer-design.jpg';

export default function Footer() {
  return (
    <div>
      <div style={{ 
          textAlign: 'center', 
          padding: '0px', 
          width: '100%', 
          overflow: 'hidden', 
          position: 'relative', 
      }}>
        <img 
          src={footerDesign} 
          alt="Footer Design" 
          style={{ 
              width: '100%', 
              height: 'auto', 
              maxHeight: '200px', 
              objectFit: 'cover' 
          }} 
        />
        {}
        <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 80%)'
        }} />
      </div>
    </div>
  );
}
