import * as React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import Link from '@mui/material/Link';
import NavbarComponent from '../../components/navbar/navbar';

function Photos() {

    
    const StyledModal = styled(ModalUnstyled)`
    position: fixed;
    z-index: 1300;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    background-color: white;
  `;
  
  const Backdrop = styled('div')`
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
  `;
  const style = {
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    p: 2,
    px: 4,
    pb: 3,
  };
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
        <React.Fragment>
            <NavbarComponent />
         {/* <button type="button" onClick={handleOpen}>
        Open modal
      </button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <h2 id="unstyled-modal-title">Text in a modal</h2>
          <p id="unstyled-modal-description">Aliquid amet deserunt earum!</p>
        </Box>
      </StyledModal> */}
      <div style = {{display:"flex", justifyContent:"center", alignItems:"50%"}}>
        <h6 > {'"Will update by EOD"'}</h6> <br/>
      </div>
      <p style = {{display:"flex", justifyContent:"center"}}> Check out my {" "} <Link href ="https://www.pexels.com/@deepak-rawat-1493821" target= "_blank"> Pexels{" "} </Link> or{" "} <Link target= "_blank" href ="https://www.instagram.com/deepak.r28/">Insta </Link> </p>
        </React.Fragment>
      );
    }
export default Photos
