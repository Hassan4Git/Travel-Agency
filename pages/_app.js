import '../styles/globals.scss'
import Nav from '../components/Nav'
import Footer from '../components/Footer'


export default function App({ Component, pageProps }) {
  return (
      <>
          <Nav />
          <Component {...pageProps} />
          <Footer />
      </>
  )
}
