import React, {useState, useContext } from 'react';
import styles from './index.module.css'
import {AppContext} from '../../../pages/_app'
function Resume() {
  const [terminalPath, setTerminalPath] = useState("/path")
  const applicationTerminalContext = useContext(AppContext)
  let userName = applicationTerminalContext.state.userName
  return (
    <React.Fragment >
      <div className={styles.body}>
        <div>
          <span><span className={styles.username}>{userName}@derminal</span> <span className={styles.terminalName}>terminal</span> <span className={styles.terminalPath}>~{terminalPath}</span>
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
