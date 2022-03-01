
var ImageKit = require("imagekit");

export default async function handler(req, res) {
    var imagekit =  new ImageKit({
     publicKey : process.env.PUBLIC_IMAGEKIT_KEY,
     privateKey :process.env.PRIVATE_IMAGEKIT_KEY,
     urlEndpoint : "https://ik.imagekit.io/6rhjv1amjqq/"
 });

    const data =  await imagekit.listFiles({
        skip : 0,
        limit : 50
    }, function(error, result) { 
        if(error){
            res.status(400).json(error)  
        } 
        else{
            res.status(200).json(result)
        } 
    });
    console.log(data)
    
  }



