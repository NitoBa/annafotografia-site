import React from 'react';

import { Container } from './styles';
import { FiInstagram, FiMail, FiShoppingCart } from 'react-icons/fi';


const Footer: React.FC = () => {
    return <Container>
        <div className="content-footer-desktop">
            <div className="side-left-desktop">
                <div id="title-footer">
                    <img src="/icon-pack-2.svg" alt="logo-footer" />
                    <h2>
                        Anna Fotografia
                    </h2>
                </div>
                <div className="social-links">
                    <h2>
                        Links Sociais
                </h2>
                    <a className="link" href="https://www.instagram.com/annafotografia.s/" target="_blank">
                        <FiInstagram className="icon" color="white" />
                    @annafotografia.s
                </a>

                    <a className="link" href="mailto:annacarolinnefotografia@gmail.com?subject=Contato para fotografia&body='Olá tudo bem, fiquei interessado(a) pelo seu trabalho e gostaria de fazer algumas fotos com você'" target="_blank">
                        <FiMail className="icon" color="white" />
                    annacarolinnefotografia@gmail.com
                </a>
                </div>

            </div>
            <div className="side-right-desktop">
                <h3>
                    Formas de pagamento
                    <FiShoppingCart color="white" />
                </h3>
                <p>
                    a vista <br />
                    transferência bancária <br />
                    cartão de crédito (exceto credshop)
                </p>
            </div>

        </div>

        <div className="content-footer-mobile">
            <div id="title-footer">
                <img src="/icon-pack-2.svg" alt="logo-footer" />
                <h2>
                    Anna Fotografia
                    </h2>
            </div>

            <div className="payment">
                <h3>
                    Formas de pagamento
                    <FiShoppingCart color="white" />
                </h3>
                <p>
                    a vista <br />
                    transferência bancária <br />
                    cartão de crédito (exceto credshop)
                </p>
            </div>

            <div className="social-links">
                <h2>
                    Links Sociais
                </h2>
                <a className="link" href="https://www.instagram.com/annafotografia.s/" target="_blank">
                    <FiInstagram className="icon" color="white" />
                    @annafotografia.s
                </a>

                <a className="link" href="mailto:annacarolinnefotografia@gmail.com?subject=Contato para fotografia&body='Olá tudo bem, fiquei interessado(a) pelo seu trabalho e gostaria de fazer algumas fotos com você'" target="_blank">
                    <FiMail className="icon" color="white" />
                    annacarolinnefotografia@gmail.com
                </a>
            </div>
        </div>
        <div className="copyright">
            <img src="/icon-pack-2.svg" alt="logo-footer" />
            <p>
                Copyright ©2020 All rights reserved
            </p>
        </div>
    </Container>
}

export default Footer;