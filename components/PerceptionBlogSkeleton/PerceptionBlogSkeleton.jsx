import React from 'react'
import NavbarComponent from '../navbar/navbar'
import styles from './PerceptionBlogSkeleton.module.css'
const { htmlToText } = require('html-to-text');

function PerceptionBlogSkeleton(props) {

    console.log("in skeleton : ", props.post)

    const convert = (content) =>{

        console.log("BEFORE REPLACING :",content)
        let breaksRemoved = content.replace(/(?:<br \/>|<br>)/g, "\n");
        console.log("BREAKS REPLACED : ",breaksRemoved)
        let removedHeader = breaksRemoved.replace(/(?:\<h1(.*)\>(.*)\<\/h1\>|&nbsp;)/g, '');
        console.log("REMOVED HEADER : ",removedHeader)
        var strippedHtml = removedHeader.replace(/<[^>]+>/g, '');
        console.log(strippedHtml)
        
        return strippedHtml
    }
    
    return (
        <React.Fragment>
            <NavbarComponent />
            <div className ={styles.titleContainer}>
                <h1 className ={styles.title}>{props.post.title}</h1>
            </div>  
            <div className = {styles.bodyContainer}>
                <p className = {styles.body}>
                    {convert(props.post.content)}
                </p>
            </div>
            
        </React.Fragment>
    )
}

export default PerceptionBlogSkeleton
