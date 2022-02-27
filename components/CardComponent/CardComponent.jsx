import React from "react";
import Link from "next/link";
import { Card } from "react-bootstrap";

import styles from './CardComponent.module.css'

function CardComponent(props) {
    return (


        <Card
            border="dark"
            bg={"Light"}
            // key={idx}
            text={"dark"}
            style={{ width: "30rem", height: "auto" }}
            className={styles.card}
        >
            <Link href={`/blogs/${props.blog.slug}`}>
                <a style={{ textDecoration: "none" }}><p className={styles.title}>{props.blog.frontmatter.title}</p></a>
            </Link>
            <div className={styles.post_date}>Posted on {props.blog.frontmatter.date}</div>
            {/* <img src={props.blog.frontmatter.cover_image} alt='' /> */}
            <Link href={`/blogs/${props.blog.slug}`}>
                <a style={{ textDecoration: "none", color: "#2f3640" }}><p className={styles.excerpt}>{props.blog.frontmatter.excerpt}</p></a>
            </Link>
            <Link href={`/blogs/${props.blog.slug}`}>
                <a className={styles.btn}>Read More</a>
            </Link>
            {/* <>
                    < > <Link href={{
                        pathname: `/blogs/${props.blog.title.replace(/\s+/g, "-")}`,
                        query: {
                            slug : props.blog.slug,
                            type : props.origin
                        }
                    }}
                        as={`/blogs/${props.blog.title.replace(/\s+/g, "-")}?type=${props.origin}`}
                        passHref ><p className={styles.title}>{props.blog.title}</p></Link> 
                    </>

                </> */}
        </Card>

    );
}

export default CardComponent;
