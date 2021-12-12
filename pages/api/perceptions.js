import axios from "axios"

export default function handler(req, res) {
    let config = {
        method: 'get',
        url: 'https://www.googleapis.com/blogger/v3/blogs/8285698468590286045/posts?key=AIzaSyBZsd1YtNmPqiqUCEgu0D4iGaHzP8uJoXc&maxResults=100',
        headers: { }
      };
      
      axios(config)
      .then((response) => {
          res.status(200).json(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }



