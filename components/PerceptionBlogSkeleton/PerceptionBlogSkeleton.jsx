import React from 'react'

import styles from './PerceptionBlogSkeleton.module.css'
const { htmlToText } = require('html-to-text');

function PerceptionBlogSkeleton(props) {
    const convert = (content) => {
        let breaksRemoved = content.replace(/(?:<br \/>|<br>)/g, "\n");
        let removedHeader = breaksRemoved.replace(/(?:\<h1(.*)\>(.*)\<\/h1\>|&nbsp;)/g, '');
        var strippedHtml = removedHeader.replace(/<[^>]+>/g, '');
        return strippedHtml
    }
    return (
        <React.Fragment>
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
