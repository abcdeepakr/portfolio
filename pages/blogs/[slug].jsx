import React from 'react'
import BlogSkeleton from '../../components/BlogSkeleton/BlogSkeleton'

import { useRouter } from 'next/router'

export const getServerSideProps = async (context) => {
    console.log("CONTEXT", context.query) 
    // returns { id: episode.itunes.episode, title: episode.title}
    

    //you can make DB queries using the data in context.query
    return {
        props: { 
           post: context.query //pass it to the page props
        }
    }
}

const Post = (props) => {
  const router = useRouter()
  const { slug } = router.query

  return (
      <BlogSkeleton title = {slug} post = {props.post}/>
  )
}

export default Post
