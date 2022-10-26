import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Script from 'next/script'
import styles from './index.module.css'
function Resume() {
  const [terminalPath, setTerminalPath] = useState("/path")
  return (
    <React.Fragment >
      <div className={styles.body}>
        <div>
          <span><span className={styles.username}>lameuser@lame</span> <span className={styles.terminalName}>terminal</span> <span className={styles.terminalPath}>~{terminalPath}</span>
          </span>
          <div className={styles.inputWrapper}>
            <p style={{ "width": "2%" }}>$ </p>
            <textarea className={`${styles.commandLineInput} ${styles.scroll}`} type="text" rows="10" maxLength="300" />
          </div>
        </div>
      </div>
    </React.Fragment> 
  );
}
export default Resume
