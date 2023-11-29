import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import styles from './logs.module.css'


import Script from 'next/script'

function Logs() {

 
  return (
    <React.Fragment>
      <Head>
        <title>Deepak Rawat | Logs</title>
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
      <iframe src="https://docs.google.com/document/d/e/2PACX-1vQhIKtd4x4gcSbOvhhyvTi1P8PVTXIdc8uIdEs-d-eAWv1Sfdpp-p7u68yz54CxmklAj7rI0FpheDRa/pub?embedded=true" className={styles.iframeContainer}></iframe>

    </React.Fragment>
  );
}
export default Logs
