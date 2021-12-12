import React from "react";
import Link from "next/link";
import { Card } from "react-bootstrap";

import styles from './CardComponent.module.css'

function CardComponent(props) {
    // console.log("CARDS COMPONENT l\:",props.perceptionBlogs)
    return (


            <Card
                border="dark"
                bg={"Light"}
                // key={idx}
                text={"dark"}
                style={{ width: "30rem", height: "auto" }}
                className={styles.card}
                >
                
                <Card.Body>
                    <Card.Title > <Link href={{
                        pathname: `/blogs/${props.perceptionBlogs.title.replace(/\s+/g, "-")}`,
                        query: props.perceptionBlogs
                    }}
                        as={`/blogs/${props.perceptionBlogs.title.replace(/\s+/g, "-")}`}
                        passHref ><p className={styles.title}>{props.perceptionBlogs.title}</p></Link> 
                    </Card.Title>
                    <Card.Text>
                        <Link passHref
                            href={{
                                pathname: `/blogs/${props.perceptionBlogs.title.replace(/\s+/g, "-")}`,
                                query: props.perceptionBlogs
                            }}
                            as={`/blogs/${props.perceptionBlogs.title.replace(/\s+/g, "-")}`}

                        // href={`/blogs/${props.perceptionBlogs.title.replace(/\s+/g,"-")}`} 
                        >
                            <p className={styles.cardBody}>{props.perceptionBlogs.body}</p>


                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>

    );
}

export default CardComponent;
