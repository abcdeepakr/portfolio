import React from 'react'
import NavbarComponent from '../navbar/navbar'

function BlogSkeleton(props) {
    return (
        <div>
            <NavbarComponent />
            <h1>Title : {props.title}</h1>
        </div>
    )
}

export default BlogSkeleton
