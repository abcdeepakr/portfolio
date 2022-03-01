import React, { useState } from "react";
import Head from 'next/head'
import NavbarComponent from "../../components/navbar/navbar";
import Link from "next/link";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Nav, Button } from "react-bootstrap";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '../../utils'
// import Head from 'next/head'
// import Post from '../components/Post'
// import { sortByDate } from '../utils'

import styles from './index.module.css'
import TechnicalBlogs from "../../components/TechnicalBlogs/TechnicalBlogs";
import PerceptionBlogs from "../../components/PerceptionBlogs/PerceptionBlogs";

function Index(props) {
  

    const [selectedBlogCategory, setSelectedBlogCategory] = useState('Perceptions')

    const selectedBlogCategoryHandler = (event) =>{

        setSelectedBlogCategory(event.target.value)
    }

  return (
    <React.Fragment>
          <Head>
        <title>Deepak Rawat | Blogs</title>
        <meta name="viewport" content="user-scalable=yes, initial-scale=1, maximum-scale=2, minimum-scale=0.5, width=device-width, height=device-height, target-densitydpi=device-dpi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarComponent />
      <div className={styles.blogNav}>
        
        <div variant="pills" onClick = {(e)=> selectedBlogCategoryHandler(e)} style={{width:"20%"}} className ={styles.buttonParent}>
        <div style ={{padding:"10px"}}>
            <Button size="lg" variant={selectedBlogCategory === "Perceptions" ? "dark" : "light"} value = "Perceptions">Perceptions</Button>{' '}
        </div>
        <div style ={{padding:"10px"}}>
            <Button size="lg" variant={selectedBlogCategory === "Technical" ? "dark" : "light"} value = "Technical">Technical</Button>{' '}
        </div>
        </div>
      </div>

      {selectedBlogCategory === "Perceptions" ?
       <div className ={styles.blogBody}><PerceptionBlogs posts={props.posts} /></div> :
      <div><TechnicalBlogs posts={props.posts}/></div>}

    </React.Fragment>
  );
}



export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)
    return {
      slug,
      frontmatter,
    }
  })
  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}


export default Index;
