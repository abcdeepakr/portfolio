import { useRouter } from 'next/dist/client/router';
import '../styles/globals.css'
import NavbarComponent from '../components/navbar/navbar'
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showHeader = router.pathname === '/resume' ? false : true;
  return (
    <>
        {showHeader ? <NavbarComponent/> : null}
        <Component {...pageProps} />
    </>
  )
}

export default MyApp
