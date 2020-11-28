import React from 'react';
import { Container } from './styles';

const Navbar: React.FC = () => {
    return (
        <Container>
            <img
                className="logo"
                src="/butterfly-alt1.svg"
                alt="logo"
            />
            <ul className="container-nav-options">
                <li>
                    <button>
                        Sobre
                    </button>
                </li>
                <li>
                    <button>
                        Portfólio
                    </button>

                </li>
                <li>
                    <button>
                        Pacotes de memórias
                    </button>

                </li>
                <li>
                    <button>
                        Contato
                    </button>

                </li>
            </ul>


        </Container>
    );
}

export default Navbar;