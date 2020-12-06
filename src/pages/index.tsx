import Head from 'next/head'
import NavBar from '../shared/components/Navbar'
import Footer from '../shared/components/Footer'
import { FiInstagram, FiMail, FiArrowDown } from 'react-icons/fi';
import CardPortfolio from './_components/CardPortfolio'
import CardPackMemories from './_components/CardPackMemories'
import { ContainerRoot, Container, ContainerHome, ContainerAbout, ContainerPortfolio, ContainerPackMemories } from './_styles';

import PhotosPortfolio from '../data/photos_portfolio'
import PackMemories from '../data/pack_memories'

const Home: React.FC = () => {
  return (
    <ContainerRoot id="div-home">
      <Head>
        <title>Anna Fotografia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Container id="home">
        <img className="bg-profile" src="/profile.jpg" alt="profile" />
        <ContainerHome>
          <div className="container-icons">
            <a href="https://www.instagram.com/annafotografia.s/" target="_blank">
              <button>
                <FiInstagram size={35} />

              </button>
            </a>
            <a href="mailto:annacarolinnefotografia@gmail.com?subject=Contato para fotografia&body='Olá tudo bem, fiquei interessado(a) pelo seu trabalho e gostaria de fazer algumas fotos com você'" target="_blank">
              <button>
                <FiMail size={35} />
              </button>
            </a>
          </div>
          <div className="container-texts-home">
            <h2>FOTÓGRAFA</h2>
            <h1>Anna Carolinne Fotografia</h1>
            <div className="role-down">
              <p>role para baixo</p>
              <FiArrowDown />
            </div>
          </div>
        </ContainerHome>
        <ContainerAbout id="about">
          <div className="container-text-about">
            <div id="title-container">
              <p>Quem sou eu?</p>
            </div >
            <div id="title-content">
              <p>
                Sou uma fotógrafa amante de borboletas que buscar transformar a vida das pessoas através das lentes realizando registros de momentos especiais
            </p>
            </div>
          </div>
          <div className="container-photo">
            <div id="container-image">
              <img src="/retrato.jpg" alt="image-sobre" />
            </div>
          </div>
        </ContainerAbout>
        <ContainerPortfolio id="portfolio">
          <div className="title-portfolio">
            <h1>
              Portfólio
              <div id="line-blue-portfolio" />
            </h1>
          </div>
          <div className="content-portfolio">
            <div className="sidebar-left" />
            <div id="content-div">
              {
                PhotosPortfolio.map((photos) => <CardPortfolio key={photos.id} coverImg={photos.coverImg} title={photos.title} photosQuantity={photos.photosQuantity} path={photos.path} />)
              }
            </div>
            <div className="sidebar-right" />

          </div>
        </ContainerPortfolio>
        <ContainerPackMemories id="pack-memories">
          <div className="title-pack-memories">
            <h1>
              Pacotes de memórias
              <div id="line-blue-pack-memories" />
            </h1>
          </div>
          <div className="pack-container">
            <div className="pack-memories-content">
              {
                PackMemories.map((pack) => <CardPackMemories
                  key={pack.id}
                  title={pack.title}
                  icon={pack.icon}
                  price={pack.price}
                  path={pack.path}
                />
                )
              }

            </div>
          </div>
        </ContainerPackMemories>
        <Footer />
      </Container>
    </ContainerRoot>
  )
}

export default Home;
