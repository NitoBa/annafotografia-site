import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import NavBar from '../../shared/components/Navbar'
import Footer from '../../shared/components/Footer'
import { useRouter } from 'next/router'
import { Container, ContainerRoot } from './styles';
import PhotosPortfolio from '../../data/photos_portfolio'
import Head from 'next/head';

interface Photos {
    id: string;
    title: string;
    coverImg: string;
    photosQuantity: number;
    path: string;
    photos: string[];
}

function PorfolioDetailsPage({ photosPortfolio }) {

    return (
        <ContainerRoot>
            <Head>
                <title>Anna Fotografia</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar colorNav="ho-home" />
            <Container>
                <div className="title-photos">
                    <h3>
                        {photosPortfolio.title}
                    </h3>
                </div>
                <div id="contato">
                    <Footer />
                </div>
            </Container>
        </ContainerRoot>
    );
}

export default PorfolioDetailsPage;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = PhotosPortfolio.map((photo) => {
        return { params: { path: photo.path } }
    });
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { path } = context.params;
    const photosPortfolio = PhotosPortfolio.find(photo => path == photo.path);

    return {
        props: {
            photosPortfolio
        }
    }
}