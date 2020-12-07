import Head from 'next/head';
import React from 'react';
import Footer from '../../shared/components/Footer';
import Navbar from '../../shared/components/Navbar';

import { Container } from './styles';

export default function PackDetailsPage() {
    return (
        <Container>
            <Head>
                <title>Pack - Fotografia</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar colorNav="no-home" />
            <div id="contato">
                <Footer />
            </div>
        </Container>
    );
}