import React, { useContext } from 'react'
import directory from '../../../public/directory.json'
import { AppContext } from '../../../pages/_app'
import styles from './file.module.css'
export function FileContent(props) {
  const applicationTerminalContext = useContext(AppContext)
  let currentPath = applicationTerminalContext.state.currentPath
  console.log(props.file)
  if (props.file == "help") {
    return (
      <div>I've always wanted to create a terminal of this style, and hence this is what i decided to create</div>
    )
  }
  if (props.file == "about") {
    return (
      <div className={styles.sentence}>
        Hello, I am Deepak Rawat.<br></br>
        Developer by profession,<br></br>
        Photographer by hobby,<br></br>
        Hungry since birth<br></br>
      </div>
    )
  }
  if (props.file == "why") {
    return (
      <div>I wanted to implement useContext for state management of this website, and hence thought that this terminal resume might be a good place to implement that, as this will require some context switching between previous commands, path and command outputs</div>
    )
  }
  if (props.file == "interests") {
    return (
      <div>
        <ul className={styles.list}>
          <li title="ctrl+click to open link in new tab"><a href="https://www.pexels.com/@deepakrawat/">Photograph Stuff</a></li>
          <li title="ctrl+click to open link in new tab"><a href="https://hashnode.com/@deepakr28">Blog Stuff</a></li>
          <li title="ctrl+click to open link in new tab"><a href="https://github.com/DeepakR-28">Build Stuff</a></li>
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
        <span><span className={styles.sentence}>Javascript</span>: Written Clean JS code on production Web apps which serves more than a million users per month</span><br />
        <span><span className={styles.sentence}>NodeJs : </span>Written Backend services in Nodejs that perfomed critical tasks related to customers after sale journey.</span><br />
        <span><span className={styles.sentence}>ReactJS : </span>Written production applications used internally for in house logistics</span><br />
        <span><span className={styles.sentence}>Shopify Ecosystem : </span>Gained control over Shopify's templating language liquid and developed multiple features for our organization on top of Shopify.</span><br />
        <span><span className={styles.sentence}>Python : </span>Used python to make CLI apps and problem solving assignments</span><br />
        <span><span className={styles.sentence}>Azure : </span>Created deployments, Database services, Static Web Apps deployment, pipelines etc.</span><br />
        <span><span className={styles.sentence}>Golang : </span>Created a simple REST API which communicated with MongoDB to perform CRUD operations</span><br />
      </div>
    )
  }

  return (
    <div>

    </div>
  )

}