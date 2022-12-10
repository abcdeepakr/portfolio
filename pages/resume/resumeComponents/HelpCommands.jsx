import React from 'react'
import styles from '../resume.module.css'
function HelpCommands() {
  return (
    <table className={styles.helpTable}>
      <tr>
        <th>Command</th>
        <th>Description</th>
        <th>example</th>
      </tr>
      <tr>
        <td>cd</td>
        <td>change directory</td>
        <td>`cd home`</td>
      </tr>
      <tr>
        <td>ls</td>
        <td>list all the files and folders in that path</td>
        <td>ls</td>
      </tr>
      <tr>
        <td>cat</td>
        <td>open a file</td>
        <td>`cat about`</td>
      </tr>
      <tr>
        <td>help</td>
        <td>open a list of commands available</td>
        <td>help</td>
      </tr>
      <tr>
        <td>up arrow</td>
        <td>older commands</td>
        <td>&#8593;</td>
      </tr>
      <tr>
        <td>down arrow</td>
        <td>newer commands</td>
        <td>&#8595;</td>
      </tr>
      <tr>
        <td>../</td>
        <td>Navigate across folders</td>
        <td>`cd ../`</td>
      </tr>
    </table>
  )
}

export default HelpCommands