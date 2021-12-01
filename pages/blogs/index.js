import React from 'react'
import NavbarComponent from '../../components/navbar/navbar'
import Link from 'next/link'

function Index() {
    return (
        <React.Fragment>
            <NavbarComponent />
          <h1> All blogs</h1>  
          <Link href = "/blogs/1">1</Link><br/>
          <Link href= "/blogs/2">2</Link><br/>
          <Link href= "/blogs/3">3</Link><br/>
          <Link href= "/blogs/4">4</Link><br/>
        </React.Fragment>
    )
}

export default Index
