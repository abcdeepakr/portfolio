export function Profiles(props) {
  switch(props.profileName){
    case "github.txt":
      console.log("opening")
      // window.open("", '_blank');
      return (<p style={{"fontSize": "1rem"}}><a style={{"color": "aqua"}} href="https://github.com/deepakr-28" target="_blank" rel="noreferrer">Click here to open GitHub profile</a><br></br></p>)
    case "linkedin.txt":
      // window.open("https://www.linkedin.com/in/deepakr28/", '_blank');
      return (<p style={{"fontSize": "1rem"}}><a style={{"color": "aqua"}} href="https://www.linkedin.com/in/deepakr28/" target="_blank" rel="noreferrer">Click here to open Linkedin profile</a><br></br></p>)
    case "pexels.txt":
      // window.open("https://www.pexels.com/@deepakrawat/", '_blank');
      return (<p style={{"fontSize": "1rem"}}><a style={{"color": "aqua"}} href="https://www.pexels.com/@deepakrawat/" target="_blank" rel="noreferrer">Click here to open Pexels profile</a><br></br></p>)
    default:
      return "file not found"
  }
}