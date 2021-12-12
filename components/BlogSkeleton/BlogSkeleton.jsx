import React from 'react'
import NavbarComponent from '../navbar/navbar'
import styles from './BlogSkeleton.module.css'
const { htmlToText } = require('html-to-text');

function BlogSkeleton(props) {

    

    const convert = (content) =>{
        // const text = htmlToText(content, {
        //     wordwrap: 130
        // });
        // return text
        var html = content
        var strippedHtml = html.replace(/<[^>]+>/g, '');
        var final  = strippedHtml.replace(/&nbsp;/g, ' ');
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

export default BlogSkeleton
