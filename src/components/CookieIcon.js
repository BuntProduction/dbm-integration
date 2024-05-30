import React, { useState } from 'react';
import './CookieComponent.css';

const CookieIcon = () => {
    const [showCookies, setShowCookies] = useState(false);

    const toggleCookies = () => {
        setShowCookies(!showCookies);
    };

    const handleClose = () => {
        setShowCookies(false);
    };

    return (
        <div className="cookie-icon-container">
            <svg
                onClick={toggleCookies}
                width="48" 
                height="48" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: 'fixed', bottom: '10px', left: '15px', cursor: 'pointer' }}
            >
                <path
                    d="M21.662 2.821C18.866.025 11.663-.252 5.124 5.422-.987 10.725-.89 17.107 3.87 20.613c4.443 3.272 10.542 3.802 15.191-1.256 5.648-6.144 5.399-13.74 2.601-16.536z"
                    fill="#FFE400"
                />
                <path fill="#FFF" d="M8.104 14.644a.567.567 0 01-.804 0h-.001l-2.53-2.529a.57.57 0 01.805-.807l2.128 2.127 6.186-6.185a.57.57 0 01.805.805l-6.589 6.589zm4.895-1.92a.546.546 0 01-.387-.93l4.047-4.047a.549.549 0 01.774 0 .549.549 0 010 .774l-4.046 4.047a.545.545 0 01-.388.156zm4.964 1.236l-1.593 1.591a.544.544 0 01-.773 0 .549.549 0 010-.774l1.594-1.594a.547.547 0 11.79.755l-.016.017-.002.005zm0-2.985l-3.085 3.084a.549.549 0 01-.774-.775l3.087-3.087a.549.549 0 01.774.775l-.002.003z"></path>
            </svg>
            {showCookies && (
                <div className="cookie-container">
                    <h2 className="cookie-title">Oups il n'y a pas de cookies ici</h2>
                    <p className="cookie-text">Mais c'est sympa d'avoir cliqué</p>
                    <span className="cookie-close-text" onClick={handleClose}>A bientôt</span>
                </div>
            )}
        </div>
    );
};
export default CookieIcon;
