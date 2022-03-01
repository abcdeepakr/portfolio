import React from 'react'
import styles from './About.module.css'

function About() {
    // const color = indigo[900];


    return (
        <React.Fragment>
            <div className ={styles.aboutContainer}>
                <label className={styles.label}>Previous: </label>
                <p className ={styles.content}>Feedback analyis & NLP<h6 className={styles.orgname}>@Ugam Solutions</h6> </p>
                <label className={styles.label}>Current: </label>
                <p className ={styles.content}>Writing e-commerce solutions <h6 className={styles.orgname}>@The Peripheral Store</h6></p>
                <label className={styles.label}>Next: </label>
                <p className ={styles.content}>Your wedding photographer</p>
            </div>
        </React.Fragment>
    )
}

export default About
