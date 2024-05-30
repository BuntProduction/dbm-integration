import React from 'react';
import './ThreeColumnSection.css';

const ThreeColumnSection = () => {
    return (
        <div className="three-column-section">
            <div className="column left-column">
                <p><strong>Je m'appelle Gatien Bigaré, j'ai 22 ans et je suis un développeur web passionné par le développement front-end.</strong></p>
            </div>
            <div className="column center-column">
                <p>Pour postuler à votre offre d'emploi j'ai décidé de faire une intégration de votre site web en ReactJs. Mais j'aurais pu faire de même en HTML/CSS/JS ou même Wordpress. Je l'ai réalisé en une journée (et une petite nuit) et j'espère que le résultat vous plait.</p>
            </div>
            <div className="column right-column">
                <p>Je vous invite à me découvrir à travers ce site et mes différentes réalisations.</p>
            </div>
        </div>
    );
};

export default ThreeColumnSection;
