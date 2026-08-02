// react bits style card: a soft light follows the mouse over the card.
// pure css var + mousemove, no extra libraries needed.

import { useRef } from 'react';

const SpotlightCard = ({ children, className = '', spotlightColor = 'rgba(215, 255, 63, 0.15)' }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    card.style.setProperty('--spotlight-color', spotlightColor);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`spotlight-card relative overflow-hidden rounded-xl border border-white/10 bg-[#0f0f0f] flex flex-col ${className}`}
    >
      <div className="spotlight-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300" />
      {children}
    </div>
  );
};

export default SpotlightCard;
