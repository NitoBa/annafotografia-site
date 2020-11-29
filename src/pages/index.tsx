import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../shared/components/Navbar'
import { FiInstagram, FiMail, FiArrowDown } from 'react-icons/fi';

import { Container, ContainerHome } from './_styles';



const Home: React.FC = () => {
  return (
    <div >
      <Head>
        <title>Anna Fotografia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Container>
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
      </Container>
    </div>
  )
}

export default Home;
