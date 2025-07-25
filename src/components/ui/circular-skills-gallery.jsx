import React, { useState, useEffect, useRef } from 'react';
import './circular-skills-gallery.css';

const CircularSkillsGallery = ({ skills, radius = 200, centerSize = 120 }) => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouseX, setLastMouseX] = useState(0);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  // Auto-rotation when not dragging
  useEffect(() => {
    if (!isDragging) {
      const animate = () => {
        setRotation(prev => prev + 0.2);
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setLastMouseX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - lastMouseX;
      setRotation(prev => prev + deltaX * 0.5);
      setLastMouseX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setLastMouseX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      const deltaX = e.touches[0].clientX - lastMouseX;
      setRotation(prev => prev + deltaX * 0.5);
      setLastMouseX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Calculate responsive radius based on screen size
  const getResponsiveRadius = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return Math.min(radius * 0.6, 120); // Mobile
      if (window.innerWidth < 1024) return Math.min(radius * 0.8, 160); // Tablet
    }
    return radius; // Desktop
  };

  const responsiveRadius = getResponsiveRadius();
  const responsiveCenterSize = centerSize * (responsiveRadius / radius);

  return (
    <div className="circular-skills-gallery">
      <div 
        className="gallery-container"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          width: `${responsiveRadius * 2 + 100}px`,
          height: `${responsiveRadius * 2 + 100}px`,
        }}
      >
        {/* Center circle */}
        <div 
          className="center-circle"
          style={{
            width: `${responsiveCenterSize}px`,
            height: `${responsiveCenterSize}px`,
          }}
        >
          <span className="center-text">Skills</span>
        </div>

        {/* Skill items */}
        <div 
          className="skills-orbit"
          style={{
            transform: `rotate(${rotation}deg)`,
          }}
        >
          {skills.map((skill, index) => {
            const angle = (360 / skills.length) * index;
            const x = Math.cos((angle - 90) * (Math.PI / 180)) * responsiveRadius;
            const y = Math.sin((angle - 90) * (Math.PI / 180)) * responsiveRadius;
            
            return (
              <div
                key={skill.name}
                className="skill-item"
                style={{
                  transform: `translate(${x}px, ${y}px) rotate(${-rotation}deg)`,
                }}
              >
                <div className="skill-icon">
                  <img src={skill.image} alt={skill.name} />
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            );
          })}
        </div>

        {/* Orbit ring */}
        <div 
          className="orbit-ring"
          style={{
            width: `${responsiveRadius * 2}px`,
            height: `${responsiveRadius * 2}px`,
          }}
        />
      </div>
    </div>
  );
};

export default CircularSkillsGallery;
