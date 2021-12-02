import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CardComponent from '../CardComponent/CardComponent'
import styles from './PerceptionBlogs.module.css'

function PerceptionBlogs() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res.data.slice(0,50))
                setPosts(res.data.slice(0,50))
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

export default PerceptionBlogs
