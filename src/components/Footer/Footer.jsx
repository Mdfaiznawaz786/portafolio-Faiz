import React from 'react';
import './Footer.css';

/* Multi idioma */
import {FormattedMessage} from 'react-intl';


const Footer = () =>{
    // Fecha
    let fecha = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                    <p>
                        <FormattedMessage
                            id='footer-info'
                            defaultMessage='Thanks to Esteban Nahuel Carrizo'
                        />
                    </p>
                  
                </div>
                <div className="redes-sociales">
                    <a href="https://www.linkedin.com/in/mohammed-faiz-nawaz-0b139b22b/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/Mdfaiznawaz786" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/itzme__nawaz/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                   
                </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);