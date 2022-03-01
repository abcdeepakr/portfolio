import React,{useEffect, useState } from 'react';
import axios from 'axios'
import {Spinner } from 'react-bootstrap'
import NavbarComponent from '../../components/navbar/navbar';
import styles from './images.module.css'
import ImageModal from '../../components/ImageModal/ImageModal'
import PhotoFilters from './PhotoFilters';


function Photos() {
  
  const [showModal, setShowModal] = useState(false)
  const [currImage, setCurrImage] = useState('')
  const [images, setImages] = useState([])
  const [sortedImages, setSortedImages] = useState([])
  const [loading, setLoading] =useState(false)
  useEffect(()=>{
    setLoading(true)
    axios.get('/api/photos')
    .then(response => {
      console.log(response.data)
      setImages(response.data)
      setSortedImages(response.data)
      setLoading(false)
    })
    .catch(err => {
      setLoading(false)
    })
  },[])

  

  const imageClick =(e, imageData) =>{
    setShowModal(!showModal)
    if(imageData){
      setCurrImage(imageData)
    }
    
  }

  const sortImages = (filterType) =>{
    console.log(filterType)
    switch(filterType){
      case "monochrome" :
            let sortedMonochromeImages = [...images].filter(image =>{
              if(image.tags.includes("monochrome")){
                return image
              }
            })
            console.log("monochrome images : ", sortedMonochromeImages)
            setSortedImages(sortedMonochromeImages)
            break
      case "street" :
        let sortedStreetImages = [...images].filter(image =>{
          if(image.tags.includes("street")){
            return image
          }
        })
        
        setSortedImages(sortedStreetImages)
        break
      case "people" :
        let sortedPeopleImages = [...images].filter(image =>{
          if(image.tags.includes("people")){
            return image
          }
        })
        // console.log("monochrome images : ", sortedMonochromeImages)
        setSortedImages(sortedPeopleImages)
        break
      case "silhouette" :
        let sortedSilhouetteImages = [...images].filter(image =>{
          if(image.tags.includes("silhouette")){
            return image
          }
        })
        console.log("monochrome images : ", sortedMonochromeImages)
        setSortedImages(sortedSilhouetteImages)
        break
      case "landscape" :
        let sortedLandscapeImages = [...images].filter(image =>{
          if(image.tags.includes("landscape")){
            return image
          }
        })
        
        setSortedImages(sortedLandscapeImages)
        break
      case "portrait" :
        let sortedPortraitImages = [...images].filter(image =>{
          if(image.tags.includes("portrait")){
            return image
          }
        })
        // console.log("monochrome images : ", sortedMonochromeImages)
        setSortedImages(sortedPortraitImages)
        break
      default:
          setSortedImages(images)
          break
    }
  }

    return (
        <React.Fragment>
            <NavbarComponent />
            <PhotoFilters sort = {(filter) => sortImages(filter)}/>
      {/* <div style = {{display:"flex", justifyContent:"center", alignItems:"50%"}}>
        <h6 > {'"Will update by EOD"'}</h6> <br/>
      </div>
      <p style = {{display:"flex", justifyContent:"center"}}> Check out my {" "} <Link href ="https://www.pexels.com/@deepak-rawat-1493821" target= "_blank"> Pexels{" "} </Link> or{" "} <Link target= "_blank" href ="https://www.instagram.com/deepak.r28/">Insta </Link> </p> */}
        <div className={styles.container}>
          {sortedImages.map(imageData =>{
              return(
                <div className={styles.imageThumbContainer} key = {imageData.fileId}>
                  <img src={imageData.thumbnail} className={styles.imageThumb} alt="some image" onClick={(e)=>imageClick(e, imageData)}/>
            </div>
              )
          })}
        </div>
        <ImageModal show={showModal} closeModal={() => imageClick()} imageData={currImage} images={images}/>
        <div  className={styles.spinner}>
        {loading?<Spinner animation="border"/>: null }
        </div>
        
        </React.Fragment>
      );
    }
export default Photos
