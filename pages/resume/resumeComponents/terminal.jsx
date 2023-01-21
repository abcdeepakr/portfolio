/**
 * File is responsible for the following components
 * User inputs
 * filtering inputs
 * directory view
 * 
 */

import { useState, useContext, useEffect } from 'react';
import styles from '../resume.module.css'
import Router , {useRouter}  from 'next/router';
import { AppContext } from '../../_app'
import TerminalUsername from './terminalUsername'
import ListDirectory from './ListDirectory'
import directory from '../../../public/directory.json'
import { FileContent } from '../../../components/ResumeComponents/FileContent/FileContent'
import NotFound from './NotFound';
import HelpCommands from './HelpCommands'
const Terminal = (props) => {
    const applicationTerminalContext = useContext(AppContext)
    const router = useRouter()
    const [terminalPath, setTerminalPath] = useState(["/home"])
    const [terminalCommand, setTerminalCommand] = useState("")
    const [commandHistoryIndex, setCommandHistoryIndex] = useState(applicationTerminalContext.state.pathCommandSnapshot.length - 1)

    const updateCommandInput = (event) => {
        let newCommand = event.target.value;
        setTerminalCommand(newCommand);
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
    const parseCommand = (commandInput) => {
        commandInput = commandInput.replace(/\n| /gi, "")
        return commandInput // returns parsed command
    }
    const updatePathHandler = (command) => {
        // console.log("inside update path handler")
        command = command.replace(/cd| /gi, "")
        let updatedTerminalPath;
        if (!command.startsWith(".")) {
            updatedTerminalPath = [...terminalPath]
            if(directory.hasOwnProperty(command) && terminalPath[terminalPath.length -1 ]!= ("/"+command)){
                updatedTerminalPath.push("/" + command)
                setTerminalPath(updatedTerminalPath)
                applicationTerminalContext.dispatchState({ type: "UPDATE_PATH", path: updatedTerminalPath })
                return command
            } else{
                return null
            }
        }
        if(command == "../"){
            updatedTerminalPath = [...terminalPath]
            updatedTerminalPath.pop()
            setTerminalPath(updatedTerminalPath)   
            applicationTerminalContext.dispatchState({ type: "UPDATE_PATH", path: updatedTerminalPath })
            return terminalCommand
        }
    }
    
    const commandResult = (currCommand) => {
        function findFile(directoryPathObject) {
            let found = Object.keys(directoryPathObject).filter((fileName) => {
                return directoryPathObject[fileName].type == "file" && fileName == currCommand.replace("cat", "")
            })
            if (found.length > 0) {
                return true
            } else {
                return false
            }
        }
        currCommand = parseCommand(currCommand)

        // finds the directory
        currCommand = currCommand.toLowerCase()
        if (currCommand.startsWith("cd")) {
            let dir = updatePathHandler(currCommand)    
            if(dir == null){
                currCommand = "dir-404"
            }
        } else if (currCommand.startsWith("cat")) {
            let fileFound;
            if (applicationTerminalContext.state.currentPath.length == 0) {
                fileFound = findFile(directory)
            } else {
                let currPath = applicationTerminalContext.state.currentPath
                currPath = currPath[currPath.length - 1]
                currPath = currPath.replaceAll("/", "")
                fileFound = findFile(directory[currPath])
            }
            if (fileFound) {
                // console.log("found")
                return <FileContent file={currCommand.replace("cat", "")} />
            } else {
                return <NotFound command={terminalCommand} />
            }
        }
        console.log("curr", currCommand)
        switch (currCommand) {
            case "clear": {
                applicationTerminalContext.dispatchState({ type: "CLEAR_SNAPSHOTS", pathCommand: {} })
                return ""
            }
            case "ls":{
                return (<ListDirectory path={terminalPath}/>)
            }
            case "dir-404": {
                return (<p style={{ "color": "red" }} className={styles.terminalCommand}>{terminalCommand}:  No such directory, make sure to use &quot;cd _filename_&quot; to view folder content </p>)
            }
            case "help": {
                return (<HelpCommands />)
            }
            case "exit":{
                router.push('/')
            }
            default:
                // console.log("serving")
                return ""
        }
    }
    // this function reads the command and executes
    const onKeyDownValue = async (event) => {
        // autofill using tab key

        // console.log(event.target.value)
        if (event.which == 9) {
            event.preventDefault()
            let responses = []
            let currpath = terminalPath[0] ? terminalPath[0].replace("/", "") : ""
            let input = event.target.value.split(" ")
            if (currpath == "") {
                Object.keys(directory).map(file => {
                    if (file.startsWith(input[input.length - 1])) {
                        responses.push(file)
                    }
                })
            } else {
                Object.keys(directory[currpath]).map(file => {
                    if (file.startsWith(input[input.length - 1])) {
                        responses.push(file)
                    }
                })
            }


            if (responses.length > 0) {
                event.target.value = input[0] + " " + responses[0]
            }


        }
    }
    const onKeyUpValue = async (event) => {


        if (event.key == "ArrowUp") {
            updateCurrentCommand(event, "up")
        }
        if (event.key == "ArrowDown") {
            updateCurrentCommand(event, "down")
        }
        if (event.key == "Enter") {
            event.target.value = "";
            event.preventDefault();
            let commandResultHTML = commandResult(terminalCommand);
            let parsedCommand = parseCommand(terminalCommand);
            let currpath = terminalPath[0]
            if (parsedCommand != "clear") {
                applicationTerminalContext.dispatchState({ type: "UPDATE_SNAPSHOTS", pathCommand: { path: terminalPath, command: terminalCommand, result: commandResultHTML } });
                setCommandHistoryIndex(applicationTerminalContext.state.pathCommandSnapshot.length);
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
                    onKeyDown={(event) => onKeyDownValue(event)}
                />
            </div>
        </div>
    )
}

export default Terminal