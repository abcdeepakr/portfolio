import React from 'react'
import BlogSkeleton from '../../components/BlogSkeleton/BlogSkeleton'

import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
      <BlogSkeleton title = {slug} />
  )
}

export default Post
