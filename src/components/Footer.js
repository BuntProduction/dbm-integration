import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-footer">
                <div className="footer-top">
                    <div className="footer-contact">
                        <div className="form-group">
                            <span className="catch-phrase">Hello DBM, vous souhaitez me recruter ?</span>
                        </div>
                        <div className="footer-contact-link">
                            <a href="/contact" className="button" id="contact-button">
                                Prenons contact !
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="row">
                        <div className="footer-bottom-left">
                            <p><strong>Gatien Bigaré</strong></p>
                            <p>
                                    36 allée du hameau 19130 Objat
                            </p>
                            <p>07 82 80 22 38</p>
                        </div>
                        <div className="footer-bottom-right">
                            <ul className="ul-social-media">
                                <li><a href="https://www.linkedin.com/in/gatien-bigar%C3%A9-087901240/" rel="noopener">linkedin</a></li>
                                <li><a href="https://github.com/BuntProduction?tab=overview&from=2024-05-01&to=2024-05-29" rel="noopener">github</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
