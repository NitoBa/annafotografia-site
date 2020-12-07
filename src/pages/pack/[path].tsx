import Head from 'next/head';
import React from 'react';
import Footer from '../../shared/components/Footer';
import Navbar from '../../shared/components/Navbar';
import { FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import PackMemories from '../../data/pack_memories'


import { Container } from '../../../styles/pack/styles';
import { GetStaticPaths, GetStaticProps } from 'next';

const PackDetailsPage = ({ pack }) => {
    return (
        <>
            <Container>
                <Head>
                    <title>Pack - {pack.title}</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Navbar colorNav="no-home" />

                <main className="banner-pack-container">
                    <img src={pack.icon} alt="icon-pack" />
                    <h1>
                        Pacote <br />
                        {pack.title}
                        <div id="line-white" />
                    </h1>
                    <p>
                        {pack.details}
                    </p>


                </main>
                <div className="price">
                    <span>
                        Preço
                    </span>
                    <h3>
                        R${pack.price}
                    </h3>
                </div>

                <div className="contact">
                    <span>
                        Entrar em contato
                </span>
                    <div className="buttons">
                        <a href={`mailto:annacarolinnefotografia@gmail.com?subject=Contato para fotografia&body=Olá! Fiquei interessado no pacote${pack.title} gostaria de marcar um ensaio`} target="blank" className="icon-contact" id="email">
                            <FiMail color="white" size={20} />
                            <span>
                                Email
                        </span>
                        </a>
                        <a href={`https://wa.me/5586981423082?text=Olá! Fiquei interessado no pacote${pack.title} gostaria de marcar um ensaio`} target="blank" className="icon-contact" id="whatsapp">
                            <FaWhatsapp color="white" size={20} />
                            <span>
                                Whatsapp
                        </span>
                        </a>
                    </div>
                </div>
            </Container>
            <div id="contato">
                <Footer />
            </div>
        </>
    );
}

export default PackDetailsPage;


export const getStaticPaths: GetStaticPaths = async () => {
    const paths = PackMemories.map((pack) => {
        return { params: { path: pack.path } }
    });
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { path } = context.params;
    const pack = PackMemories.find(pack => path == pack.path);

    return {
        props: {
            pack
        }
    }
}

