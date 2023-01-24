import React, { useContext } from 'react'
import directory from '../../../public/directory.json'
import { AppContext } from '../../../pages/_app'
import styles from './file.module.css'
import { ProjectFile } from '../ProjectFiles'
import { Profiles } from '../profiles'
import { WorkExperience } from '../work_experience'
export function FileContent(props) {
  // console.log("indise file content")
  const applicationTerminalContext = useContext(AppContext)
  let currentPath = applicationTerminalContext.state.currentPath
  // console.log("path", currentPath)
  if (props.file == "help") {
    return (
      <div>I&apos;ve always wanted to create a terminal of this style, and hence this is what i decided to create</div>
    )
  }
  if (props.file == "about") {
    return (
      <div className={styles.sentence}>
        Hello, I am Deepak Rawat.<br></br>
        Developer by profession,<br></br>
        Photographer by hobby,<br></br>
        lame by choice.<br></br>
      </div>
    )
  }
  if (props.file == "why") {
    return (
      <div>I wanted to implement useContext for state management of this website, and hence thought that this terminal resume might be a good place to implement that, as this will require some context switching between previous commands, path and command outputs</div>
    )
  }
  if (props.file == "work_experience") {
    return (
      <WorkExperience />
    )
  }
  if (props.file == "interests") {
    return (
      <div>
        <ul className={styles.list}>
          <li title="ctrl+click to open link in new tab"><a target="_blank" rel="noreferrer" className={styles.link} href="https://www.pexels.com/@deepakrawat/">Photograph Stuff</a></li>
          <li title="ctrl+click to open link in new tab"><a target="_blank" rel="noreferrer" className={styles.link} href="https://deepakr28.com/blogs">Blog Stuff</a></li>
          <li title="ctrl+click to open link in new tab"><a target="_blank" rel="noreferrer" className={styles.link} href="https://github.com/deepakr-28">Build Stuff</a></li>
        </ul>
      </div>
    )
  }
  if (props.file == "education") {
    return (
      <div>
        <p className={styles.institution}>
          B.E Computer Science and Engineering<br></br>
          KGISL Institute of Technology, 2017-21 <br></br>
        </p>
        <hr></hr>
        <p className={styles.institution}>
          Senior Secondary<br></br>
          Kendriya Vidyalaya Wellington, 2015-17 <br></br>
        </p>
        <hr></hr>
        <p className={styles.institution}>
          High School<br></br>
          Kendriya Vidyalaya Delhi Cantt, 2005-15 <br></br>
        </p>
      </div>
    )
  }
  if (props.file == "skills") {
    return (
      <div className={styles.skillsContainer}>
        <table >
          <tr className={styles.skillCol}>
            <th style={{ "padding": "5px 10px 0px 10px" }}></th>
            <th style={{ "padding": "5px 10px 0px 10px" }}></th>
          </tr>
          <tr className={styles.skillCol}>
            <td className={styles.skillName} style={{ "color": "#f1ce05" }} >JavaScript</td>
            <td className={styles.skillDesc} >Written multiple features <a target="_blank" rel="noreferrer" className={styles.link} href="https://tpstech.in">@TPS Technologies</a> to improve the capabilities of the Ecommerce platform. Created multiple <a target="_blank" rel="noreferrer" className={styles.link} href="https://github.com/deepakr-28?tab=repositories&q=&type=public&language=javascript&sort=">personal projects</a> using Vanilla JS and Reactjs </td>
          </tr>
          <tr className={styles.skillCol}>
            <td className={styles.skillName} style={{ "color": "#73ab60" }}>NodeJs</td>
            <td className={styles.skillDesc}>Written Backend services that perfomed critical tasks related to customers after sale journey. Wrote multiple cron jobs which synced data between different services</td>
          </tr>
          <tr className={styles.skillCol}>
            <td className={styles.skillName} style={{ "color": "#5ed3f3" }}>ReactJS</td>
            <td className={styles.skillDesc}>Written complex React Application for the logistics operation of TPS Technologies which used multiple 3P APIs</td>
          </tr>
          <tr className={styles.skillCol}>
            <td className={styles.skillName} style={{ "color": "#95bf47" }}>Shopify <br></br>Ecosystem</td>
            <td className={styles.skillDesc}>Used the Shopify Templating Language <a target="_blank" rel="noreferrer" className={styles.link} href="https://shopify.dev/api/liquid">Liquid</a> to develop, improve and maintain features on TPS Technologies</td>
          </tr>
          <tr className={styles.skillCol}>
            <td className={styles.skillName} style={{ "color": "yellow" }}>Python</td>
            <td className={styles.skillDesc}>Used python to make CLI apps, to improve my problem solving skills and make <a target="_blank" rel="noreferrer" className={styles.link} href="https://github.com/deepakr-28/projects">fun projects</a> like movie guessing game and a voice calculator. </td>
          </tr>
          <tr className={styles.skillCol}>
            <td className={styles.skillName} style={{ "color": "#35b4e9" }}>Azure</td>
            <td className={styles.skillDesc}>Setup deployment pipelines, Database services, Static Web Apps deployment, Serverless functions, API Uptime Monitoring, RCA, Authentication using Azure AD</td>
          </tr>
          <tr className={styles.skillCol}>
            <td className={styles.skillName} style={{ "color": "#00a7d0" }}>Golang</td>
            <td className={styles.skillDesc}>Created small <a target="_blank" rel="noreferrer" className={styles.link} href="https://github.com/deepakr-28?tab=repositories&q=&type=&language=golang&sort=">backend services </a>which serve data using REST APIs</td>
          </tr>
        </table>
      </div>
    )
  }
  if (currentPath[0] == "/projects") {
    return <ProjectFile projectName={props.file} />
  }
  if (currentPath[0] == "/profiles") {
    // console.log("opening profile")
    return <Profiles profileName={props.file} />
  }

  return (
    <div>

    </div>
  )

}