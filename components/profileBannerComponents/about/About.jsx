import React from 'react'
import styles from './About.module.css'

function About() {
    // const color = indigo[900];


    return (
        <React.Fragment>
            <div className ={styles.aboutContainer}>
                <label className={styles.label}>Previous: </label>
                <p className ={styles.content}>Feedback Analyis using NLP<h6 className={styles.orgname}>@Ugam Solutions</h6> </p>
                <label className={styles.label}>Current: </label>
                <p className ={styles.content}>Software Development with a little bit of everything <h6 className={styles.orgname}>@The Peripheral Store</h6></p>
                <label className={styles.label}>Next: </label>
                <p className ={styles.content}>kal kisne dekha hai</p>
                

            </div>
        </React.Fragment>
    )
}

export default About
