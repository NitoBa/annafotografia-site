import Link from 'next/link';
import React from 'react';
import { Container, SideaBar } from './styles';
import { FiAlignJustify, FiArrowLeft } from 'react-icons/fi';
import { useState } from "react"


const Navbar: React.FC = () => {

    const [isHiddenSidebar, setIsHiddenSidebar] = useState<boolean>(true);

    function toggleSideBar() {
        setIsHiddenSidebar(!isHiddenSidebar);
    }

    function scroll(id: string) {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Container>
            <Link href="/">
                <img
                    className="logo"
                    src="/butterfly-alt1.svg"
                    alt="logo"
                />
            </Link>
            <FiAlignJustify size={35} id="icon" onClick={toggleSideBar} />
            <ul className="container-nav-options">
                <li>
                    <button onClick={() => scroll('about')}>
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
            <SideaBar id={isHiddenSidebar ? "hidden-sidebar" : "sidebar"}>
                <FiArrowLeft size={35} color="white" className="icon-back" id={isHiddenSidebar ? "hidden-icon" : "icon-back"} onClick={toggleSideBar} />
                <div id="nav">
                    <ul className="container-nav-options-mobile">
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
                </div>
            </SideaBar>

        </Container>
    );
}

export default Navbar;