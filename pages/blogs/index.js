import React, { useState } from "react";
import NavbarComponent from "../../components/navbar/navbar";
import Link from "next/link";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Nav, Button } from "react-bootstrap";


import styles from './index.module.css'
import TechnicalBlogs from "../../components/TechnicalBlogs/TechnicalBlogs";
import PerceptionBlogs from "../../components/PerceptionBlogs/PerceptionBlogs";

function Index() {

    const [selectedBlogCategory, setSelectedBlogCategory] = useState('')

    const selectedBlogCategoryHandler = (event) =>{
        console.log(event)
        setSelectedBlogCategory(event.target.value)
    }

  return (
    <React.Fragment>
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

      {selectedBlogCategory === "Perceptions" ? <PerceptionBlogs /> :<TechnicalBlogs />}

    </React.Fragment>
  );
}

export default Index;
