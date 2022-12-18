
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../components/layout/layout';


export default function Home() {
  
  return (
    < >
      <Head>
        <title>Deepak Rawat</title>
        <meta name="description" content="I write blogs, bugs and take photos"
        />
        <meta name="viewport" content="user-scalable=yes, initial-scale=1, maximum-scale=2, minimum-scale=0.5, width=device-width, height=device-height, target-densitydpi=device-dpi" />

        <link rel="icon" href="/profile.jpg" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-NLZM4G1DRJ" strategy="afterInteractive"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {
          `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config', 'G-NLZM4G1DRJ');
          `
        }
      </Script>
      <Layout />

    </>
  )
}
