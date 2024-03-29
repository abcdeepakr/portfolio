import React from 'react'
import styles from './Banner.module.css'
import Image from 'next/image'
import Link from '@mui/material/Link';

import Hobbies from '../profileBannerComponents/hobbies/Hobbies'
import About from '../profileBannerComponents/about/About'
import Footer from '../profileBannerComponents/footer/Footer'

import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


function Banner() {
    return (
        <div className={styles.backdrop}>
            <div className={styles.profileCard}>
                <div className ={styles.profileImage}>
                    <Image src="/profile.jpg" alt="profile" width="100px" height="100px" className  ={styles.image}/>
                    <h3 className={styles.name}>Deepak Rawat  </h3>
                    <h6 >
                        <span className={styles.username}>@abcdeepakr | Delhi Metro Enthusiast
                        </span>
                    </h6>
                </div>
                <Hobbies />
                <About />
                <Footer />
            </div>
        </div>
    )
}

export default Banner
