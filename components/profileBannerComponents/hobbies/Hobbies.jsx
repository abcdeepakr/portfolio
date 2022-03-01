import React from 'react'
import styles from './hobbies.module.css'
import {Button} from '@mui/material'

import ColorLensIcon from '@mui/icons-material/ColorLens';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EditIcon from '@mui/icons-material/Edit';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import CodeIcon from '@mui/icons-material/Code';
import LocationCityIcon from '@mui/icons-material/LocationCity';

import { createTheme, ThemeProvider } from '@mui/material/styles';

function Hobbies() {
    // const color = indigo[900];


    return (
        <React.Fragment>
            {/* <h1 className={styles.hobbiesTitle}><ColorLensIcon  color="error"/>I like</h1> */}
            {/* <h1 className={styles.hobbiesTitle}><ColorLensIcon  color="error"/> </h1> */}
        <div className={styles.buttons}>
            
            <div className ={styles.ButtonContainer}>
                <Button variant="outlined" className={styles.Button} size="small"><CameraAltIcon color="warning" className ={styles.icon}/>{ " "}  Photography</Button>
            </div>
            <div className ={styles.ButtonContainer}>
                <Button variant="outlined"  className={styles.Button} size="small"><EditIcon color="success" className ={styles.icon}/> Writing</Button>
            </div>
            
            <div className ={styles.ButtonContainer}>
                <Button variant="outlined"  className={styles.Button} size="small"><SportsCricketIcon color="error" className ={styles.icon}/>Cricket</Button>
            </div>
            <div className ={styles.ButtonContainer}>
                <Button variant="outlined"  className={styles.Button} size="small"><RestaurantMenuIcon color="error" className ={styles.icon}/> bhole chature</Button>
            </div>
            <br/>
            {/* <div className ={styles.ButtonContainer}>
                <Button variant="outlined"  className={styles.Button}>Delhi Metro</Button>
            </div> */}
            <div className ={styles.ButtonContainer}>
                <Button variant="outlined"  className={styles.Button} size ="small"><CodeIcon color="disabled" className ={styles.icon} /> Building</Button>
            </div>
            <div className ={styles.ButtonContainer}>
                <Button variant="outlined"  className={styles.Button} ><LocationCityIcon color="warning" className ={styles.icon}/> Delhi</Button>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Hobbies
