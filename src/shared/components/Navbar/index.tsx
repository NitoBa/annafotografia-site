import Link from 'next/link';
import React from 'react';
import { Container, SideaBar } from './styles';
import { FiAlignJustify, FiArrowLeft } from 'react-icons/fi';
import { useState } from "react"

interface NavProps {
    color?: string;
}


const Navbar: React.FC<NavProps> = (props: NavProps) => {

    const [isHiddenSidebar, setIsHiddenSidebar] = useState<boolean>(true);

    function toggleSideBar() {
        setIsHiddenSidebar(!isHiddenSidebar);
    }

    function scroll(id: string) {
        const element = document.getElementById(id);
        if (!isHiddenSidebar) {
            element.scrollIntoView({ behavior: 'smooth' });
            toggleSideBar();
            return;
        }
        element.scrollIntoView({ behavior: 'smooth' });

    }

    return (
        <Container>
            <Link href="/">
                <img
                    className="logo"
                    src="/icon-pack-2.svg"
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
                    <button onClick={() => scroll('portfolio')}>
                        Portfólio
                    </button>

                </li>
                <li>
                    <button onClick={() => scroll('pack-memories')}>
                        Pacotes de memórias
                    </button>

                </li>
                <li>
                    <button onClick={() => scroll('contato')}  >
                        Contato
                    </button>

                </li>
            </ul>
            <SideaBar id={isHiddenSidebar ? "hidden-sidebar" : "sidebar"}>
                <FiArrowLeft size={35} color="white" className="icon-back" id={isHiddenSidebar ? "hidden-icon" : "icon-back"} onClick={toggleSideBar} />
                <div id="nav">
                    <ul className="container-nav-options-mobile">
                        <li>
                            <button onClick={() => scroll('about')} >
                                Sobre
                    </button>
                        </li>
                        <li>
                            <button onClick={() => scroll('portfolio')}>
                                Portfólio
                    </button>

                        </li>
                        <li>
                            <button onClick={() => scroll('pack-memories')}>
                                Pacotes de memórias
                    </button>

                        </li>
                        <li>
                            <button onClick={() => scroll('contato')}>
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