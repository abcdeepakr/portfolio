// import axios from "axios"

// export default async function handler(req, res) {
//   await console.log(req.query)
//     let config = {
//         method: 'get',
//         url: 'https://www.googleapis.com/blogger/v3/blogs/8285698468590286045/posts?key=AIzaSyBZsd1YtNmPqiqUCEgu0D4iGaHzP8uJoXc&maxResults=100',
//         headers: { }
//       };
      
//       await axios(config)
//       .then((response) => {
//         if(req.query.hasOwnProperty('slug')){
//           let blog = response.data.items.filter(blog => blog.title.replace(/\s+/g, "-") === req.query.slug)
//           res.status(200).json(blog)
//         }
//         else{
//           res.status(200).json(response.data)
//         }
          
          
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }


