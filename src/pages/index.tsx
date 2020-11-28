import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../shared/components/Navbar'
import { FiInstagram, FiMail } from 'react-icons/fi';

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
            <a href="mailto:brukum2@gmail.com" target="_blank">
              <button>
                <FiMail size={35} />
              </button>
            </a>


          </div>
        </ContainerHome>
      </Container>
    </div>
  )
}

export default Home;
