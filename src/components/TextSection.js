import React, { useState } from 'react';
import './TextSection.css';

const TextSection = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0, visible: false });

    const handleMouseMove = (event) => {
        setCursorPos({ x: event.clientX, y: event.clientY, visible: true });
    };

    const handleMouseLeave = () => {
        setCursorPos(pos => ({ ...pos, visible: false }));
    };
    const handleClick = () => {
        window.location.href = '/contact';
    };
  return (
    <section className="qualities-section" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}  onClick={handleClick} >
            <div className="cursor-follower"style={{
                left: cursorPos.x,
                top: cursorPos.y,
                opacity: cursorPos.visible ? 1 : 0
            }}>Contactez-moi</div>
      <h2 className="section-title">Pourquoi me recruter ?</h2>
      <hr className="title-underline" />
      <ul className="qualities-list">
        <li>Créatif et innovant</li>
        <li>Passionné</li>
        <li>Attentif aux détails</li>
        <li>2 ans d'alternance en tant que Développeur Web</li>
        <li>J'apporte de la bonne humeur et parfois même des chocolatines...</li>
      </ul>
    </section>
  );
};

export default TextSection;
