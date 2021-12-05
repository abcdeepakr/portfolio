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
                {/* <Card.Header>{props.post.title}</Card.Header> */}
                <Card.Body>
                    <Card.Title > <Link href={{
                        pathname: `/blogs/${props.post.title.replace(/\s+/g, "-")}`,
                        query: props.post
                    }}
                        as={`/blogs/${props.post.title.replace(/\s+/g, "-")}`}
                        passHref ><p className={styles.title}>{props.post.title}</p></Link> 
                    </Card.Title>
                    <Card.Text>
                        <Link passHref
                            href={{
                                pathname: `/blogs/${props.post.title.replace(/\s+/g, "-")}`,
                                query: props.post
                            }}
                            as={`/blogs/${props.post.title.replace(/\s+/g, "-")}`}

                        // href={`/blogs/${props.post.title.replace(/\s+/g,"-")}`} 
                        >
                            <p className={styles.cardBody}>{props.post.body}</p>


                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>

    );
}

export default CardComponent;
