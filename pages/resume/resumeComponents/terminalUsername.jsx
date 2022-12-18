import React,{useContext} from 'react'
import styles from '../resume.module.css'
import {AppContext} from '../../../pages/_app'
function TerminalUsername(props) {
  const applicationTerminalContext = useContext(AppContext)
  let userName = applicationTerminalContext.state.userName
  if (props.terminalPath) {
    return (
      <>
        <span className={styles.username}>{userName}@Derminal {" "}</span>
        <span className={styles.terminalName}>terminal</span>
        <span className={styles.terminalPath}>~{props.terminalPath.reduce((fp, p) => { return fp += p }, "")}</span>
      </>
    )
  } else {
    return <></>
  }

}

export default TerminalUsername