import React,{useEffect} from 'react'
import axios from "axios"

import NavbarComponent from '../navbar/navbar'
import Banner from '../Banner/Banner'


function Layout() {

    useEffect(() => {
        axios.get('/api/hello')
        .then(res => res.data)
        .catch(err => err.data)
    }, [])
    
    return (
        <React.Fragment>
            <NavbarComponent />
            <Banner />
        </React.Fragment>
    )
}

export default Layout
