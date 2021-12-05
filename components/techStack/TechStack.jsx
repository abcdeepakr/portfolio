import React from 'react'
import {Stack, Paper} from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image'
import stackImages from '../../assets/data/stack.json'
import styles from './techstack.module.css'

function TechStack() {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (
        <div className={styles.container}>
            {stackImages.data.map(image =>{
                return(
                    <div key={image.id} className={styles.image}>
                        <Image src ={image.imageUrl} width = "50px" height= "50px" alt={image.name} />
                    </div>
                    
                )
            })}
      </div>
    )
}

export default TechStack
