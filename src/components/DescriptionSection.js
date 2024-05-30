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
            }}>
                Contactez-moi
            </div>
            <h2 className="section-title">Qui suis-je ?</h2>
            <hr className="title-underline" />
            <div className="paragraphs-container">
                <p className="left-paragraph">
                    Je suis actuellement en alternance en tant que <strong>Développeur Concepteur en BAC +3</strong>. J'ai auparavant obtenu un BAC +2 développeur Web & Web Mobile que j'ai effectué en alternance dans la même entreprise. 
                </p>
                <p className="right-paragraph">
                    <strong>Le développement web a toujours été ma passion</strong> mais j'ai décidé d'en faire mon métier il y a 2 ans. Aujourd'hui je me sens donc capable d'apporter une vraie plus-value à une entreprise comme la votre, tant sur le côté développement que sur le côté créatif. Awwwards et dribbble sont mes plaisirs quotidiens et j'essaie de le faire transparaître dans mon travail.
                </p>
            </div>

            <h2 className="section-title">Mes compétences</h2>
            <hr className="title-underline" />
            <div className="paragraphs-container">
                <ul className="left-paragraph list">
                    <li>HTML/CSS</li>
                    <li>JS</li>
                    <li>ReactJs</li>
                    <li>PHP / MySQL</li>
                    <li>React Native</li>
                    <li>Wordpress</li>
                    <li>Figma</li>
                    <li>Anglais</li>

                    
                </ul>
                <p className="right-paragraph">
                    Je gère actuellement dans mon entreprise 2 sites web WP (avec Divi). J'y développe également une application connectée à un IoT en React Native et reliée aux API du serveur que j'ai développée en PHP avec une base de données en MySQL. 
                    J'ai réalisé le webdesign sur Figma, fait un cahier des charges, géré le suivi de l'application avec Trello et réalisé des points réguliers avec mon responsable.
                    J'aime gérer des projets, être en autonomie et apprécier le résultat final.
                    <br/>
                    <br/>
                    <strong>Les bonus : </strong>
                    <br/>
                    Je suis quelqu'un d'agréable et joyeux au quotidien. Je suis passionné par l'high-tech en général et je suis toujours à l'écoute des autres.

                </p>
            </div>
        </section>
    );
};

export default TextSection;
