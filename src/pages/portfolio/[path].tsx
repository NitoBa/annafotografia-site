import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import NavBar from '../../shared/components/Navbar'
import Footer from '../../shared/components/Footer'
import { useState } from 'react';
import { Container, GripPhotos } from '../../../styles/portfolio/styles';
import PhotosPortfolio from '../../data/photos_portfolio'
import Head from 'next/head';
import { ContainerRoot } from '../../../styles/_styles';

interface Photos {
    id: string;
    title: string;
    coverImg: string;
    photosQuantity: number;
    path: string;
    photos: string[];
}

const PorfolioDetailsPage = ({ photosPortfolio }) => {

    const { photos }: { photos: string[] } = photosPortfolio;

    const [isViewImage, setisViewImage] = useState<boolean>(false);

    function closeImage() {
        const imageView = document.getElementById('image-view')
        if (isViewImage && imageView) {
            setisViewImage(false);
            document.getElementById("image-details").setAttribute('style', 'display:none;')
            document.getElementById("image-figure").innerHTML = ''
            document.getElementById("portfolio-container").setAttribute('style', 'transition: .2s; filter:blur(0px);');
        }
    }

    function viewImage(photoName: string) {
        setisViewImage(!isViewImage);
        if (isViewImage) {
            document.getElementById("image-details").setAttribute('style', 'display:none;')
            document.getElementById("image-figure").innerHTML = ''
            document.getElementById("portfolio-container").setAttribute('style', 'transition: .2s; filter:blur(0px);');
        } else {
            document.getElementById("image-figure").innerHTML = `<img id = "image-view" src="/${photoName}" alt="" />`
            document.getElementById("image-details").setAttribute('style', 'display:flex;');
            document.getElementById("portfolio-container").setAttribute('style', ' transition: .2s; filter:blur(10px);');

        }
    }

    return (
        <>
            <ContainerRoot>
                <NavBar colorNav="ho-home" />
                <Container onClick={closeImage}>
                    <Head>
                        <title>Portfólio - {photosPortfolio.title}</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <div className="title-photos">
                        <h3>
                            {photosPortfolio.title}
                        </h3>
                    </div>
                    <div id="image-details" style={{ display: "none" }}>
                        <figure id="image-figure" className="img">
                        </figure>
                    </div>
                    <GripPhotos id="portfolio-container">

                        {
                            photos.map((photo, index) => {
                                return (
                                    <figure key={index} className="img" onClick={() => viewImage(photo)} >
                                        <img src={`/${photo}`} alt="" />
                                    </figure>
                                )
                            })
                        }

                    </GripPhotos>
                </Container>
                <div id="contato">
                    <Footer />
                </div>
            </ContainerRoot>
        </>
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
    const photosPortfolio: Photos = PhotosPortfolio.find(photo => path == photo.path);

    return {
        props: {
            photosPortfolio
        }
    }
}