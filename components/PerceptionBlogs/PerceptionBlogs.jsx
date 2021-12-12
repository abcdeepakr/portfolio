import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CardComponent from '../CardComponent/CardComponent'
import styles from './PerceptionBlogs.module.css'

function PerceptionBlogs() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('/api/perceptions')
            .then(res => {
                console.log("DATA",res.data)
                setPosts(res.data.items)
            })
            .catch(err => console.log(err))
    }, [])

    return posts.length > 0 ? (
        <div className={styles.container}>
        {posts.map(post => {
                return (
                <CardComponent key ={post.id} perceptionBlogs = {post}/>
                )
        })}
        </div>
        
    ) : null
}

export default PerceptionBlogs
