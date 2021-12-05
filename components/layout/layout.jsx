import React,{useEffect} from 'react'
import axios from "axios"

import NavbarComponent from '../navbar/navbar'
import Banner from '../Banner/Banner'
import styles from './layout.module.css'

function Layout() {

    useEffect(() => {
        axios.get('/api/hello')
        .then(res => res.data)
        .catch(err => err.data)
    }, [])
    
    return (
        <div className = {styles.body}>
            <NavbarComponent />
            <Banner />
        </div>
    )
}

export default Layout
