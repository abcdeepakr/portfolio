

import NavbarComponent from '../navbar/navbar'
import Banner from '../Banner/Banner'
import styles from './layout.module.css'

function Layout() {
    
    return (
        <div className = {styles.body}>
            <NavbarComponent />
            <Banner />
        </div>
    )
}

export default Layout
