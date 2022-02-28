import React,{useState, useEffect} from 'react'
import styles from './ImageModal.module.css'
function ImageModal(props) {

    const[currImageIndex, setCurrImageIndex] = useState(0)
    const nextImage = () =>{
        if(currImageIndex+1>props.images.length-1){
            setCurrImageIndex(0)    
        }else{
            setCurrImageIndex(currImageIndex => currImageIndex+1)
        }
        
    }
    const previousImage = () =>{
        if(currImageIndex-1<0){
            setCurrImageIndex(props.images.length-1)    
        } else{
            setCurrImageIndex(currImageIndex => currImageIndex-1)
        }
        
    }
    const closeModal = () =>{
        props.closeModal()
        setCurrImageIndex(0)
    }
    if (props.show) {
        console.log("shown")
        return (
            <div>
                <div id="myModal" className={styles.modal}>
                    
                    <span className={styles.close} onClick={() => closeModal()}>&times;</span>
                    <span className={styles.left} onClick={()=>previousImage()}>&#10094;</span>
                    <img className={styles.modal_content} id="img01" alt="modal" src={currImageIndex ? props.images[currImageIndex].imageUrl : props.imageData.imageUrl}/>
                    <span className={styles.right} onClick={()=>nextImage()}>&#10095;</span>
                    <div id="caption"></div>
                </div>
            </div>
        )
    } else {
        return (
            <div>nothing</div>
        )
    }
}

export default ImageModal