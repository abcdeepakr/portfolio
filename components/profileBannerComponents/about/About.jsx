import React from 'react'
import styles from './About.module.css'
import Link from 'next/link'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
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
                <br></br>
                <br></br>
                <h3 className={styles.message}>Hello anon | 
                    <a  href="https://secret.evenjust.com/c85ae4a8c" 
                                    target="_blank" rel="noreferrer">
                        <MailOutlineIcon fontSize='medium' color="primary" style={{paddingLeft:"2px"}} /> 
                    </a>
                </h3>
                
            </div>
        </React.Fragment>
    )
}

export default About
