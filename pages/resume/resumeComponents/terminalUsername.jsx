import { useState } from 'react';
import styles from '../resume.module.css'
const TerminalUsername = (props) =>{
    const [terminalPath, setTerminalPath] = useState("")
    const [terminalCommand, setTerminalCommand] = useState("")

    const updateCommandInput = (event) =>{
        let updatedCommand = event.target.value;
        setTerminalCommand(updatedCommand,setTerminalPath);
    }
    const onKeyUpValue = (event) => {
        
        if(event.key == "Enter"){
            event.target.value = ""
            event.preventDefault()
            props.createSnapShot(terminalCommand)
        }
    }
    return(
        <div>
          <span>
            <span className={styles.username}>lameuser@lame</span> 
            <span className={styles.terminalName}>terminal</span> 
            <span className={styles.terminalPath}>~{terminalPath}</span> 
          </span>
          <div className={styles.inputWrapper}>
            <p>$ </p>
            <textarea className={`${styles.commandLineInput} ${styles.scroll}`} 
                type="text" 
                rows="10" 
                maxLength="300"
                onChange={(event)=>updateCommandInput(event)}
                onKeyUp={(event)=>onKeyUpValue(event)}
                />
          </div>
        </div>
    )
}

export default TerminalUsername