import React from "react";
import Link from "next/link";
import { Card } from "react-bootstrap";

import styles from './CardComponent.module.css'

function CardComponent(props) {
    return (
        <div className={styles.card}>
            
            <Card
                border="dark"
                bg={"Light"}
                // key={idx}
                text={"dark"}
                style={{ width: "30rem", height :"15rem" }}
                className="mb-2">
                {/* <Card.Header>{props.post.title}</Card.Header> */}
                <Card.Body>
                    <Card.Title > <Link  href={`/blogs/${props.post.title.replace(/\s+/g,"-")}`} passHref ><p className = {styles.title}>{props.post.title}</p></Link> </Card.Title>
                    <Card.Text>
                        <Link passHref href={`/blogs/${props.post.title.replace(/\s+/g,"-")}`} >
                            <p className={styles.cardBody}>{props.post.body}</p>
                            
                            
                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardComponent;
