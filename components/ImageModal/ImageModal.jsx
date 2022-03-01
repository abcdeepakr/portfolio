import React,{useState, useEffect, useCallback} from 'react'
import styles from './ImageModal.module.css'
function ImageModal(props) {

    const[currImageIndex, setCurrImageIndex] = useState(0)
    const [keyCodeVal, setKeyCode] = useState()

    const handleUserKeyPress = useCallback(event => {
        
        const { key, keyCode } = event;
        // console.log(keyCode)
        if(keyCode == 39){
            nextImage();   
            setKeyCode(keyCode)
        } else if(keyCode==37){
            previousImage()
            setKeyCode(keyCode)
        } else if(keyCode==27){
            closeModal();
            setKeyCode(keyCode)
        }
    }, [currImageIndex,keyCodeVal]);

    useEffect(() => {
        window.addEventListener("keydown", handleUserKeyPress);
        return () => {
            window.removeEventListener("keydown", handleUserKeyPress);
        };
    }, [handleUserKeyPress]);

    const nextImage = () =>{
        // console.log(currImageIndex)
        if(currImageIndex+1>props.images.length-1){
            
            setCurrImageIndex(0)
        }else{
            // console.log("INCREMENTING")
            let newVal = currImageIndex + 1
            // console.log(newVal)
            setCurrImageIndex(newVal)
        }
        
    }
    const previousImage = () =>{
        // console.log(currImageIndex)
        if(currImageIndex==0){
            setCurrImageIndex(props.images.length-1)    
        } else{
            setCurrImageIndex(currImageIndex => currImageIndex-1)
        }
        
    }
    const closeModal = () =>{
        props.closeModal()
        setCurrImageIndex(0)
    }
    const handleKeyPress = (event) =>{
        // console.log(event)
    }
    if (props.show) {
        // console.log("shown")
        return (
            <div onKeyPress={(e) => handleKeyPress(e)}>
                <div id="myModal" className={styles.modal} >
                    
                    <span className={styles.close} onClick={() => closeModal()}>&times;</span> {/* CLOSE MODAL*/}
                    <span className={styles.left} onClick={()=>previousImage()}>&#10094;</span> {/* LEFT */}
                    <img className={styles.modal_content} id="img01" alt="modal" src={currImageIndex ? props.images[currImageIndex].url : props.imageData.url}/>
                    <span className={styles.right} onClick={()=>nextImage()} >&#10095;</span> {/* RIGHT */}
                    <div id="caption"></div>
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default ImageModal