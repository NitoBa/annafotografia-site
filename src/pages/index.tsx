import Head from 'next/head'
import NavBar from '../shared/components/Navbar'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Anna Fotografia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
    </div>
  )
}
