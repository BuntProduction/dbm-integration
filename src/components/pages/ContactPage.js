import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <h1>N'hésitez pas à me contacter si ma candidature vous intéresse !</h1>
            
            <div className="contact-info">
                <h2>Gatien Bigaré</h2>
                <p><strong>Adresse :</strong> 36 allée du hameau, 19130 Objat, France</p>
                <p>
                    <strong>Téléphone :</strong>{" "}
                    <a href="tel:0782802238" className="link-contact">07 82 80 22 38</a>
                </p>
                <p>
                <strong>Email :</strong>{" "}
                <a href="mailto:gatien.big@hotmail.fr" className="link-contact">
                    gatien.big@hotmail.fr
                </a>
                </p>

                
                <a href={`https://drive.google.com/file/d/1Ockck7zYL8Sm3RMRhNO1Mwv_cHx1SMDG/view?usp=sharing`} className="cv-download-link" target="_blank">
                    Voir mon CV
                </a>
            </div>
        </div>
    );
};

export default ContactPage;
