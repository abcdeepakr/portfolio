import React from 'react'
import directory from '../../../public/directory.json'
import styles from '../resume.module.css'
function ListDirectory(props) {

const currentDirectory = () =>{
    if (props.path) {
    let lastItem = props.path[props.path.length-1];
    let files = null
        if (lastItem) {
            lastItem = lastItem.replace("/", "")
            if (directory.hasOwnProperty(lastItem)) {
                let items = Object.keys(directory[lastItem])

                return (
                    <ul className={styles.ul}>
                        {items.map(item => {
                            return (
                                <li key={item} className={styles.files}>
                                    {item != "type" ? item : null}
                                </li>)
                        })}
                    </ul>

                )
            }
        } else if (props.path.length == 0) {
            return (
                <ul className={styles.ul}>
                    {Object.keys(directory).map(item => {
                        let fileClass = ""
                        if (directory[item].hasOwnProperty("type")) {
                            fileClass = directory[item].type == "directory" ? "folders" : "files"
                        }
                        return (
                            <li key={item} className={styles[fileClass]}>
                                {item != "type" ? item : null}
                            </li>)
                    })}
                </ul>

            )
        }
    }


}
  return (
    <div>{currentDirectory()}</div>
  )
}

export default ListDirectory