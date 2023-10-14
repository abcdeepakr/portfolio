import React from 'react'

import styles from './Footer.module.css'


import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';


function Footer() {
    return (
        <div className ={styles.iconContainer}>
            <div className ={styles.icon}><Link href="https://www.instagram.com/abcdeepakr" target="_blank"><InstagramIcon className={styles.iconStyling}/></Link></div>
            <div className ={styles.icon}><Link href="https://twitter.com/abcdeepakr" target="_blank"><TwitterIcon className={styles.iconStyling}/></Link></div>
            <div className ={styles.icon}><Link href="https://github.com/abcdeepakr" target="_blank"><GitHubIcon className={styles.iconStyling}/></Link></div>
            <div className ={styles.icon}><Link href="https://www.linkedin.com/in/abcdeepakr" target="_blank"><LinkedInIcon className={styles.iconStyling}/></Link></div>
            
            
            
            
            
        </div>
    )
}

export default Footer
