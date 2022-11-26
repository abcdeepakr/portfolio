import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Script from 'next/script'
import styles from './resume.module.css'
import TerminalUsername from './resumeComponents/terminalUsername';
function Resume() {
  const[snapshotCommands, setSnapShotCommands] = useState([])
  const createSnapShotHandler = (command)=>{
    let updatedSnapshotCommands = [...snapshotCommands]
    updatedSnapshotCommands.push(command);
  }
  const createSnapshotHTML = () =>{
    let snapshotHTML = ""
    if(snapshotCommands){
      snapshotCommands.map(snapshot =>{
        snapshotHTML+=snapshot //TODO : USE THE USECONTEXT HOOK, SO THAT WE ARE NOT USING EVERYTHING TWICE
      })
    }
  }
  return (
    <React.Fragment >
      <Head>
        <title>Deepak Rawat | Resume</title>
        <meta name="viewport" content="user-scalable=yes, initial-scale=1, maximum-scale=2, minimum-scale=0.5, width=device-width, height=device-height, target-densitydpi=device-dpi" />
        <link rel="icon" href="/profile.jpg" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-NLZM4G1DRJ" strategy="afterInteractive"></Script>
      <div className={styles.body}>
        <div id="command-snapshot" className={styles.snapshot}>
          {}
        </div>
        <TerminalUsername createSnapShot = {(command,path)=>createSnapShotHandler(command,path)}/>
      </div>
    </React.Fragment>
  );
}
export default Resume
