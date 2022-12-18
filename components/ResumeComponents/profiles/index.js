export function Profiles(props) {
  switch(props.profileName){
    case "github":
      console.log("opening")
      // window.open("", '_blank');
      return (<p style={{"fontSize": "1rem"}}><a style={{"color": "aqua"}} href="https://github.com/DeepakR-28" target={"_blank"}>Click here to open GitHub profile</a><br></br></p>)
    case "linkedin":
      // window.open("https://www.linkedin.com/in/deepakr28/", '_blank');
      return (<p style={{"fontSize": "1rem"}}><a style={{"color": "aqua"}} href="https://www.linkedin.com/in/deepakr28/" target={"_blank"}>Click here to open Linkedin profile</a><br></br></p>)
    case "pexels":
      // window.open("https://www.pexels.com/@deepakrawat/", '_blank');
      return (<p style={{"fontSize": "1rem"}}><a style={{"color": "aqua"}} href="https://www.pexels.com/@deepakrawat/" target={"_blank"}>Click here to open Pexels profile</a><br></br></p>)
    default:
      return "file not found"
  }
}