import { useState, useContext, useEffect } from 'react';
import styles from '../resume.module.css'
import { AppContext } from '../../_app'
import TerminalUsername from './terminalUsername'
import ListDirectory from './ListDirectory'
import directory from '../../../public/directory.json'
const Terminal = (props) => {
    const applicationTerminalContext = useContext(AppContext)

    const [terminalPath, setTerminalPath] = useState(["/home"])
    const [terminalCommand, setTerminalCommand] = useState("")
    const [commandHistoryIndex, setCommandHistoryIndex] = useState(applicationTerminalContext.state.pathCommandSnapshot.length - 1)

    const updateCommandInput = (event) => {
        let updatedCommand = event.target.value;
        setTerminalCommand(updatedCommand);
    }
    const updateCurrentCommand = (event, button) => {
        let currentCommandHistoryIndex = commandHistoryIndex
        if (button == "up") {
            currentCommandHistoryIndex -= 1
        } else {
            currentCommandHistoryIndex += 1
        }
        if (currentCommandHistoryIndex == -1) {
            currentCommandHistoryIndex = applicationTerminalContext.state.pathCommandSnapshot.length - 1
        } else if (currentCommandHistoryIndex == applicationTerminalContext.state.pathCommandSnapshot.length) {
            currentCommandHistoryIndex = 0
        } else {
            setCommandHistoryIndex(currentCommandHistoryIndex)
        }

        if (applicationTerminalContext.state.pathCommandSnapshot.length > 0) {
            event.target.value = applicationTerminalContext.state.pathCommandSnapshot[currentCommandHistoryIndex].command
        }

        setCommandHistoryIndex(currentCommandHistoryIndex)

    }
    const parseCommand = (terminalCommand) => {
        terminalCommand = terminalCommand.replace(/\n| /gi, "")
        return terminalCommand
    }
    const updatePathHandler = (command) => {
        command = command.replace(/cd| /gi, "")
        if (!command.startsWith(".")) {
            let updatedTerminalPath = [...terminalPath]
            if(directory.hasOwnProperty(command) && terminalPath[terminalPath.length -1 ]!= ("/"+command)){
                updatedTerminalPath.push("/" + command)
                setTerminalPath(updatedTerminalPath)
                return command
            } else{
                return null
            }
        } 
        if(command == "../"){
            let updatedTerminalPath = [...terminalPath]
            updatedTerminalPath.pop()
            setTerminalPath(updatedTerminalPath)
            return terminalCommand
        }
    }
    
    const commandResult = (currCommand) => {
        currCommand = parseCommand(currCommand)
        if (currCommand.startsWith("cd")) {
            let dir = updatePathHandler(currCommand)    
            if(dir == null){
                currCommand = "dir-404"
            }
        }
        switch (currCommand) {
            case "clear": {
                applicationTerminalContext.dispatchState({ type: "CLEAR_SNAPSHOTS", pathCommand: {} })
                return ""
            }
            case "ls":{
                return (<ListDirectory path={terminalPath}/>)
            }
             case "dir-404":{
                return (<p className={styles.terminalCommand}>{terminalCommand}:  No such file or directory</p>)
             }
            default:
                return ""
        }
    }

    const onKeyUpValue = (event) => {
        if (event.key == "ArrowUp") {
            updateCurrentCommand(event, "up")
        }
        if (event.key == "ArrowDown") {
            updateCurrentCommand(event, "down")
        }
        if (event.key == "Enter") {
            event.target.value = ""
            event.preventDefault()
            let commandResultHTML = commandResult(terminalCommand)
            let parsedCommand = parseCommand(terminalCommand)
            if (parsedCommand != "clear" && parseCommand!="ls") {
                applicationTerminalContext.dispatchState({ type: "UPDATE_SNAPSHOTS", pathCommand: { path: terminalPath, command: terminalCommand, result: commandResultHTML } })
                setCommandHistoryIndex(applicationTerminalContext.state.pathCommandSnapshot.length)
            }
        }
    }
    return (
        <div>
            <span>
                <TerminalUsername terminalPath={terminalPath} />
            </span>
            <div className={styles.inputWrapper}>
                <p>$ </p>
                <textarea className={`${styles.commandLineInput} ${styles.scroll}`}
                    type="text"
                    rows="5"
                    maxLength="150"
                    onChange={(event) => updateCommandInput(event)}
                    onKeyUp={(event) => onKeyUpValue(event)}
                />
            </div>
        </div>
    )
}

export default Terminal