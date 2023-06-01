import React from 'react'
import Image from 'next/image'
// import notFoundImage from '../public/images/notfound.jpg'
import Button from 'react-bootstrap/Button';

function fourOhFour() {
    return (
        <div style={{"display":"flex","justifyContent":"center","alignItems":"center", "flexDirection":"column"}}>
            {/* <Image
                src={notFoundImage}
                alt="Not found"
                width={800}
                height={400}
            /> */}
            <b>404: Page not found</b> 
        </div>
        
    )
}

export default fourOhFour