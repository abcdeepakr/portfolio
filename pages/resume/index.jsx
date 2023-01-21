// * Resume Route
/**
 * File is responsible for the following components
 * Intial view of the file
 * command line input
 * Inserting other the <Terminal /> component which processes all the user inputs
 */

import React, { useEffect, useContext } from 'react';
import Link from 'next/dist/client/link';
import Head from 'next/head'
import Script from 'next/script'
import styles from './resume.module.css'
import Terminal from './resumeComponents/terminal';
import {AppContext} from '../../pages/_app'
import {adjective} from '../../public/adjective.js'


function Resume() {
  const applicationTerminalContext = useContext(AppContext)
  useEffect(()=>{
    let userName = adjective()
    applicationTerminalContext.dispatchState({ type: "UPDATE_USERNAME", name: userName })
  },[])
  const pathCommandSnapShot = applicationTerminalContext.state.pathCommandSnapshot
  let userName = applicationTerminalContext.state.userName
  const createSnapshotHTML = (snapshot) => {

    let path = (
      <span key={snapshot.id}>
        <span className={styles.username}>{userName}@Derminal {" "}</span>
        <span className={styles.terminalName}>terminal</span>
        <span className={styles.terminalPath}>~{snapshot.path}{" "}</span>
        <span className={styles.terminalCommand}>{snapshot.command}</span>
        <br></br>
        <span className={styles.terminalCommand}>{snapshot.result}</span>
      </span>)
    return path
  }

  return (
    
    <React.Fragment >
      <Head>
        <title>Deepak Rawat | Resume</title>
        <meta name="description"
          content="Terminal based Resume" />
        <meta property="og:title" content="A terminal based resume made with NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" name="Terminal" content="/images/terminal.jpg" />
        <link rel="icon" href="/profile.jpg" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-NLZM4G1DRJ" strategy="afterInteractive"></Script>
      <>
      <div className={styles.resumeBody}>
        <p className={styles["deeminal-welcome"]}>
          Welcome to this smol terminal, let&apos;s get you started.<br></br>
          Get the PDF version <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1_D0cJxDRGyjMsGNvU9loWU71JmNoKDP1/view?usp=sharing">Here</a><br></br>
          Type `help` view a list of commands.</p>
        <div id="command-snapshot" className={styles.snapshot}>
          {pathCommandSnapShot ? (
            pathCommandSnapShot.map((snapshot, index) => {
              return createSnapshotHTML(snapshot)
            })
          ) : null}
        </div>
        <Terminal />
      </div>  
      </>
      
    </React.Fragment>
  );
}
export default Resume
