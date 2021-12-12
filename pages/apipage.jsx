import React,{useEffect} from 'react'
import axios from 'axios'
import blog from '../assets/data/test.json'
import { parse } from 'node-html-parser';
const { htmlToText } = require('html-to-text');



function Apipage() {
   // this is a test change in experimental branch 
    // var myHTML= blog.items[74].content

    // var strippedHtml = myHTML.replace(/<[^>]+>/g, '');
    // console.log(strippedHtml)
    // console.log(blog.items[74].content)

    const text = htmlToText(blog.items[74].content, {
        wordwrap: 130
    });
    console.log(text); 
    return (
        <div>
            test
        </div>
    )
}

export default Apipage
