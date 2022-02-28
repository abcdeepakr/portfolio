import React,{useState } from 'react';

import NavbarComponent from '../../components/navbar/navbar';
import styles from './images.module.css'
import ImageModal from '../../components/ImageModal/ImageModal'
import images from '../../assets/data/images.json'
function Photos() {
  
  const [showModal, setShowModal] = useState(false)
  const [currImage, setCurrImage] = useState('')
  const imageClick =(e, imageData) =>{
    setShowModal(!showModal)
    if(imageData){
      setCurrImage(imageData)
    }
    
  }
    return (
        <React.Fragment>
            <NavbarComponent />
      {/* <div style = {{display:"flex", justifyContent:"center", alignItems:"50%"}}>
        <h6 > {'"Will update by EOD"'}</h6> <br/>
      </div>
      <p style = {{display:"flex", justifyContent:"center"}}> Check out my {" "} <Link href ="https://www.pexels.com/@deepak-rawat-1493821" target= "_blank"> Pexels{" "} </Link> or{" "} <Link target= "_blank" href ="https://www.instagram.com/deepak.r28/">Insta </Link> </p> */}
        <div className={styles.container}>
          {images.data.map(imageData =>{
              return(
                <div className={styles.imageThumbContainer} key = {imageData.id}>
                  <img src={imageData.imageUrl} className={styles.imageThumb} alt="some image" onClick={(e)=>imageClick(e, imageData)}/>
            </div>
              )
          })}
        </div>
        <ImageModal show={showModal} closeModal={() => imageClick()} imageData={currImage} images={images.data}/>
        </React.Fragment>
      );
    }
export default Photos
