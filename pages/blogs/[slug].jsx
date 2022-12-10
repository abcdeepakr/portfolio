import React, { useEffect, useState } from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import styles from './index.module.css'

import Image from 'next/image'
export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))
    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))
    return {
        paths,
        fallback: false,
    }
}


export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(
        path.join('posts', slug + '.md'),
        'utf-8'
    )
    const { data: frontmatter, content } = matter(markdownWithMeta)
    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    }
}

const Post = ({
    frontmatter: { title, date, cover_image },
    slug,
    content,
}) => {
    
    return (
        <div >
            <>
                <Link href='/blogs'>
                    <a className='btn btn-back'>back</a>
                </Link>
                {/* <div className='card card-page'> */}
                <div className={styles.container}>
                    <h1 className={styles.post_title}>{title}</h1>
                    <div className='post-date'>Posted on {date}</div>
                    {/* <Image src={cover_image} alt=''  width = {10} height={10} /> */}
                    <div className='post-body'>
                        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
                    </div>
                </div>
            </>
        </div>


    )
}

export default Post
