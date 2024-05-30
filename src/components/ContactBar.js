import React from 'react';
import './ContactBar.css';
import ContactImage from '../img/contacticon.png';

const ContactBar = () => {
    return (
        <div className="contact-container">
            <a href="/contact">
                <img src={ContactImage} className="contact-bar" alt="Contactez-moi" />
            </a>
        </div>
    );
};

export default ContactBar;
