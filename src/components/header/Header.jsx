import React from 'react';

import './Header.css';

import Button from '../button/Button';

const scrollToId = (id) => () => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Header = () => {
    return (
            <>
                <a
                    href="https://github.com/bortolettojoaog/landing-page_mountain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="template-badge"
                >
                    Template Demo &bull; View Source
                </a>

                <div className="header-container" id="inicio">
                    <div className="overlay"></div>

                    <div className="header-center">
                        <div className="header-logo">
                            <a href="#inicio"><img src="/images/logo.png" alt="Mountain" title="Mountain" /></a>
                        </div>

                        <nav className="header-navbar">
                            <ul>
                                <li><a href="#inicio">Início</a></li>
                                <li><a href="#diferenciais">Diferenciais</a></li>
                                <li><a href="#contato">Contato</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="body-container">
                    <div className="body-center">
                        <div className="body-text">
                            <h2>Explore as Montanhas</h2>
                            <p>Expedições guiadas para quem busca trilhas de alta montanha, paisagens intactas e uma equipe que conhece cada rota palmo a palmo. Planejamos cada etapa da sua jornada, da logística ao topo.</p>
                            <div className="body-button">
                                <Button onClick={ scrollToId('diferenciais') }>Ver Expedições</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    );
}
 
export default Header;