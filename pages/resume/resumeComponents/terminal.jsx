import { useState, useContext, useEffect } from 'react';
import styles from '../resume.module.css'
import { AppContext } from '../../_app'
import TerminalUsername from './terminalUsername'
const Terminal = (props) => {

    const applicationTerminalContext = useContext(AppContext)

    const [terminalPath, setTerminalPath] = useState("")
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
        terminalCommand = terminalCommand.replace("dee", "")
        terminalCommand = terminalCommand.replace("\n", "")
        terminalCommand.trim(" ")
        return terminalCommand
    }
    const updatePathHandler = (terminalCommand) => {
        terminalCommand = terminalCommand.replace("cd", "")
        terminalCommand = terminalCommand.trim()
        if (!terminalCommand.startsWith(".")) {
            terminalPath += "/" + terminalCommand
            setTerminalPath(terminalPath)
        }
    }
    const commandResult = (terminalCommand) => {
        terminalCommand = parseCommand(terminalCommand)
        if (terminalCommand.startsWith("cd")) {
            updatePathHandler(terminalCommand)
        }
        switch (terminalCommand) {
            case "help": {
                return (<p className={styles.terminalCommand}>You can use the following list of commands</p>)
            }
            case "clear": {
                applicationTerminalContext.dispatchState({ type: "CLEAR_SNAPSHOTS", pathCommand: {} })
                return ""
            }
            default:
                return (<p className={styles.terminalCommand}></p>)
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
            if (parseCommand(terminalCommand) != "clear") {
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