import Head from 'next/head';
import Logo from '../images/logo.svg';
import Iframe from 'react-iframe'

export default function Home() {
  return (
    <div id='wrapper'>
      <Head>
        <title>Khilafat</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <header className='header'>
        <div className='logo-holder'>
          <a href="/">
            <Logo className='logo' />
          </a>
        </div>
      </header>
      <main>
    
    <Iframe url="https://timesprayer.com/widgets.php?frame=2&amp;lang=en&amp;name=salt&amp;sound=true&amp;fcolor=1B646A&amp;tcolor=26A2B5&amp;frcolor=113030"
        width="100%"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </footer>
    </div>
  )
}
