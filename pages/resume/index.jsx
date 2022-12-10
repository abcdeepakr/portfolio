// * Resume Route
/**
 * File is responsible for the following components
 * Intial view of the file
 * command line input
 * Inserting other the <Terminal /> component which processes all the user inputs
 */

import React, { useEffect, useState, useContext } from 'react';
import Head from 'next/head'
import Script from 'next/script'
import styles from './resume.module.css'
import Terminal from './resumeComponents/terminal';
import TerminalUsername from './resumeComponents/terminalUsername';
import { AppContext } from '../_app'

function Resume() {
  const applicationTerminalContext = useContext(AppContext)
  const pathCommandSnapShot = applicationTerminalContext.state.pathCommandSnapshot

  const createSnapshotHTML = (snapshot) => {
    let path = (
      <span key={snapshot.id}>
        <span className={styles.username}>lameuser@lame {" "}</span>
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
        <meta name="viewport"
          content="user-scalable=yes, initial-scale=1, maximum-scale=2, minimum-scale=0.5, width=device-width, height=device-height, target-densitydpi=device-dpi" />
        <link rel="icon" href="/profile.jpg" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-NLZM4G1DRJ" strategy="afterInteractive"></Script>
      <div className={styles.body}>
        <p className={styles["deeminal-welcome"]}>Welcome to Deeminal, let&apos;s get you started.<br></br> `help`</p>
        <div id="command-snapshot" className={styles.snapshot}>
          {pathCommandSnapShot ? (
            pathCommandSnapShot.map(snapshot => {
              return createSnapshotHTML(snapshot)
            })
          ) : null}
        </div>
        <Terminal />
      </div>
    </React.Fragment>
  );
}
export default Resume
