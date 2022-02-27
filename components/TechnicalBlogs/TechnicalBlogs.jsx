import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CardComponent from '../CardComponent/CardComponent'
import styles from './TechnicalBlogs.module.css'

function TechnicalBlogs(props) {

  

    return props.posts.length > 0 ? (
        <div className={styles.container}>
            {props.posts.map(post => {
                if (post.frontmatter.area === "technical") {
                    return (
                        <CardComponent key={post.frontmatter.title} blog={post} />
                    )
                }
            })}
        </div>

    ) : null
}

export default TechnicalBlogs
