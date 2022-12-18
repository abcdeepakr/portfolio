import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'

import styles from './images.module.css'
import ImageModal from '../../components/ImageModal/ImageModal'
import PhotoFilters from './PhotoFilters';
import Script from 'next/script'

function Photos() {

  const [showModal, setShowModal] = useState(false)
  const [currImage, setCurrImage] = useState('')
  const [images, setImages] = useState([])
  const [sortedImages, setSortedImages] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios.get('/api/photos')
      .then(response => {
        
        setImages(response.data)
        setSortedImages(response.data)
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
      })
  }, [])



  const imageClick = (e, imageData) => {
    setShowModal(!showModal)
    if (imageData) {
      setCurrImage(imageData)
    }

  }

  const sortImages = (filterType) => {
    switch (filterType) {
      case "monochrome":
        let sortedMonochromeImages = [...images].filter(image => {
          if (image.tags.includes("monochrome")) {
            return image
          }
        })
        setSortedImages(sortedMonochromeImages)
        break
      case "street":
        let sortedStreetImages = [...images].filter(image => {
          if (image.tags.includes("street")) {
            return image
          }
        })

        setSortedImages(sortedStreetImages)
        break
      case "people":
        let sortedPeopleImages = [...images].filter(image => {
          if (image.tags.includes("people")) {
            return image
          }
        })
        
        setSortedImages(sortedPeopleImages)
        break
      case "silhouette":
        let sortedSilhouetteImages = [...images].filter(image => {
          if (image.tags.includes("silhouette")) {
            return image
          }
        })
        
        setSortedImages(sortedSilhouetteImages)
        break
      case "landscape":
        let sortedLandscapeImages = [...images].filter(image => {
          if (image.tags.includes("landscape")) {
            return image
          }
        })

        setSortedImages(sortedLandscapeImages)
        break
      case "portrait":
        let sortedPortraitImages = [...images].filter(image => {
          if (image.tags.includes("portrait")) {
            return image
          }
        })
        
        setSortedImages(sortedPortraitImages)
        break
      default:
        setSortedImages(images)
        break
    }
  }

  return (
    <React.Fragment>
      <Head>
        <title>Deepak Rawat | Photos</title>
        <meta name="viewport" content="user-scalable=yes, initial-scale=1, maximum-scale=2, minimum-scale=0.5, width=device-width, height=device-height, target-densitydpi=device-dpi" />
        <link rel="icon" href="/profile.jpg" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-NLZM4G1DRJ" strategy="afterInteractive"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {
          `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config', 'G-NLZM4G1DRJ');
          `
        }
      </Script>
      {/* <NavbarComponent /> */}
      <PhotoFilters sort={(filter) => sortImages(filter)} />

      <div className={styles.container}>
        {sortedImages.map(imageData => {
          let thumbUrl = new URL(imageData.thumbnail)
          let newThumnailTransformRule = thumbUrl.pathname.split("/")
          newThumnailTransformRule[2] = "tr:n-og_thumb"
          let newPath = newThumnailTransformRule.join('/')
          let newThumbUrl = thumbUrl.origin + newPath
          return (
            <div className={styles.imageThumbContainer} key={imageData.fileId}>
              <img src={newThumbUrl} className={styles.imageThumb} alt="some image" onClick={(e) => imageClick(e, imageData)} />
            </div>
          )
        })}
      </div>
      <ImageModal show={showModal} closeModal={() => imageClick()} imageData={currImage} images={sortedImages} />
      <div className={styles.spinner}>
        {loading ? <Spinner animation="border" /> : null}
      </div>

    </React.Fragment>
  );
}
export default Photos
