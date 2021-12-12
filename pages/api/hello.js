import axios from "axios"

export default function handler(req, res) {
    axios.get(`https://jsonplaceholder.typicode.com/${process.env.slug}`)
    .then( response => {
      res.status(200).json(response.data)
    })
    .catch(err =>{
      res.status(400).json(err.data)
    })
  }

  //retrieve information for a particular blog by sending an HTTP GET request to the blog's URI. The URI for a blog has the following format:

  // google blogger get blogid