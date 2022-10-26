import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Script from 'next/script'
import styles from './resume.module.css'
function Resume() {
  const [terminalPath, setTerminalPath] = useState("/path")
  return (
    <React.Fragment >
      <Head>
        <title>Deepak Rawat | Resume</title>
        <meta name="viewport" content="user-scalable=yes, initial-scale=1, maximum-scale=2, minimum-scale=0.5, width=device-width, height=device-height, target-densitydpi=device-dpi" />
        <link rel="icon" href="/profile.jpg" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-NLZM4G1DRJ" strategy="afterInteractive"></Script>
      <div className={styles.body}>
        <div>
          <span><span className={styles.username}>lameuser@lame</span> <span className={styles.terminalName}>terminal</span> <span className={styles.terminalPath}>~{terminalPath}</span> 
          </span>
          <div className={styles.inputWrapper}>
            <p style={{"width": "2%"}}>$ </p>
            <textarea className={`${styles.commandLineInput} ${styles.scroll}`} type="text" rows="10" maxLength="300"/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Resume
