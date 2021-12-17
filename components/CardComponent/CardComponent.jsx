import React from "react";
import Link from "next/link";
import { Card } from "react-bootstrap";

import styles from './CardComponent.module.css'

function CardComponent(props) {
    console.log("CARD origin\:",props.origin)
    return (


            <Card
                border="dark"
                bg={"Light"}
                // key={idx}
                text={"dark"}
                style={{ width: "30rem", height: "auto" }}
                className={styles.card}
                >
                
                <>
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
                    {/* <Card.Text>
                        <Link passHref
                            href={{
                                pathname: `/blogs/${props.blog.title.replace(/\s+/g, "-")}`,
                                query: props.blog
                            }}
                            as={`/blogs/${props.blog.title.replace(/\s+/g, "-")}`}

                        // href={`/blogs/${props.blog.title.replace(/\s+/g,"-")}`} 
                        >
                            <p className={styles.cardBody}>{props.blog.body}</p>


                        </Link>
                    </Card.Text> */}
                </>
            </Card>

    );
}

export default CardComponent;
