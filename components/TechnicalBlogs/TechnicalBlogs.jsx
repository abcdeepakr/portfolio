import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CardComponent from '../CardComponent/CardComponent'
import styles from './TechnicalBlogs.module.css'

function TechnicalBlogs() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                // console.log(res.data)
                setPosts(res.data.slice(51,99))
            })
            .catch(err => console.log(err))
    }, [])



    return posts.length > 0 ? (
        <div className={styles.container}>
        {posts.map(post => {
                return (
                <CardComponent key ={post.id} post = {post}/>
                )
        })}
        </div>
        
    ) : null
}

export default TechnicalBlogs
