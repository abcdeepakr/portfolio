import React from 'react'
import styles from '../resume.module.css'
function HelpCommands() {
  return (
    <>
    <table className={styles.helpTable}>
      <thead>
        <tr className={styles.tableRow}>
          <th className={styles.tableHead}>Command</th>
          <th className={styles.tableHead}>Description</th>
          <th className={styles.tableHead}>example</th>
      </tr>
      </thead>
      <tbody>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>cd</td>
          <td className={styles.tableData}>change directory</td>
          <td className={styles.tableData}>`cd home`</td>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>ls</td>
          <td className={styles.tableData}>list all the files and folders in that path</td>
          <td className={styles.tableData}>ls</td>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>cat</td>
          <td className={styles.tableData}>open a file</td>
          <td className={styles.tableData}>`cat about`</td>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>help</td>
          <td className={styles.tableData}>open a list of commands available</td>
          <td className={styles.tableData}>help</td>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>Tab Key</td>
          <td className={styles.tableData}>AutoComplete</td>
          <td className={styles.tableData} style={{ "display": "flex", "justifyContent": "center" }} ><div style={{ "border": "1px solid white", "textAlign": "center", "margin": "5px", "width": "50px" }}>Tab</div></td>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>up arrow</td>
          <td className={styles.tableData}>older commands</td>
          <td className={styles.tableData}>&#8593;</td>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>down arrow</td>
          <td className={styles.tableData}>newer commands</td>
          <td className={styles.tableData}>&#8595;</td>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>../</td>
          <td className={styles.tableData}>Navigate across folders</td>
          <td className={styles.tableData}>`cd ../`</td>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>exit</td>
          <td className={styles.tableData}>Exit terminal</td>
          <td className={styles.tableData}>`exit`</td>
        </tr>
      </tbody>
    </table>
    </>
  )
}

export default HelpCommands