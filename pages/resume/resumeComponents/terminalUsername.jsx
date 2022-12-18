import React from 'react'
import styles from '../resume.module.css'

function TerminalUsername(props) {
  return (
    <>
      <span className={styles.username}>lameuser@lame {" "}</span>
      <span className={styles.terminalName}>terminal</span>
      <span className={styles.terminalPath}>~{props.terminalPath.reduce((fp,p)=>{return fp+=p},"")}</span>
    </>


  )
}

export default TerminalUsername