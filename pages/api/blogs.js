import axios from "axios"
import blogs from '../../assets/data/data.json'

export default function handler(req, res) {
    console.log(req.body)
    res.status(200).json(blogs)
  }
