import React, { useEffect, useState } from 'react'
import PerceptionBlogSkeleton from '../../components/PerceptionBlogSkeleton/PerceptionBlogSkeleton'
import styles from './index.module.css'

import { useRouter } from 'next/router'
import axios from 'axios'

import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';


export const getServerSideProps = async (context) => {
    console.log("CONTEXT", context.query)



    return {
        props: {
            post: { "slug": context.query.slug } //pass it to the page props
        }
    }
}

const Post = (props) => {
    const router = useRouter()
    console.log(router)
    const { slug, type } = router.query

    const [post, setPost] = useState({})

    useEffect(() => {
        console.log(slug)
        axios.get(`/api/perceptions?slug=${props.post.slug}`)
            .then(res => {
                setPost(res.data[0])
                console.log("FOUND : ", res.data)
            })
            .catch(err => console.log(err))

    }, [])
    return (
        <div >
            {Object.keys(post).length > 0 ? <PerceptionBlogSkeleton title={slug} post={post} /> : (
                <div className={styles.spinner}>
                    <Stack sx={{ color: 'green.500' }} spacing={2} direction="row">
                        <CircularProgress color="success" />
                    </Stack>
                </div>

            )}
        </div>


    )
}

export default Post
