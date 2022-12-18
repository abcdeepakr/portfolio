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
import Image from 'next/image';

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
        <meta name="description"
          content="Terminal based Resume" />
        <meta property="og:title" content="A terminal based resume made with NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" name="Terminal" content="/images/terminal.jpg" />
        <link rel="icon" href="/profile.jpg" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-NLZM4G1DRJ" strategy="afterInteractive"></Script>
      <div className={styles.body}>
        <p className={styles["deeminal-welcome"]}>Welcome to this smol terminal, let&apos;s get you started.<br></br>Type `help` view a list of commands.</p>
        <div id="command-snapshot" className={styles.snapshot}>
          {pathCommandSnapShot ? (
            pathCommandSnapShot.map((snapshot, index) => {
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
