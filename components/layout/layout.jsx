import Banner from '../Banner/Banner'
import styles from './layout.module.css'

function Layout() {
    
    return (
        <div className={styles.body}>
            <Banner />
        </div>
    )
}

export default Layout
