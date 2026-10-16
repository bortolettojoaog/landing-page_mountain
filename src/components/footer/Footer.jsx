import { FaGithub, FaLinkedin } from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer className="footer1" id="contato">
                <div className="text">
                    <div className="title">
                        <h1>Mountain</h1>
                    </div>

                    <div className="content">
                        <p>
                            Expedições guiadas em alta montanha, para todos os
                            níveis de experiência.
                        </p>
                        <p>+XX (XX) XXXXX-XXXX</p>
                    </div>
                </div>

                <div className="text">
                    <div className="title">
                        <h1>Navegação</h1>
                    </div>

                    <div className="content">
                        <p>
                            <a href="#inicio">Início</a>
                        </p>
                        <p>
                            <a href="#diferenciais">Diferenciais</a>
                        </p>
                        <p>
                            <a href="#contato">Contato</a>
                        </p>
                    </div>
                </div>

                <div className="text">
                    <div className="title">
                        <h1>Redes Sociais</h1>
                    </div>

                    <div className="content social-content">
                        <a
                            href="https://github.com/bortolettojoaog/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/bortolettotech/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </footer>

            <footer className="footer2">
                &copy; 2018 Mountain — Template demo by{' '}
                <a
                    href="https://github.com/bortolettojoaog/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    BortolettoTech
                </a>
            </footer>
        </>
    );
};

export default Footer;
