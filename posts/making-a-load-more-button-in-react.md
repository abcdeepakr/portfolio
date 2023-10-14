---
title: "'Load More Button' in ReactJS"
date: 'March 7, 2021'
excerpt: 'I recently started learning ReactJS, this load more functionality felt really daunting, even trying to code the...'
cover_image: '/images/posts/img1.jpg'
area: 'technical'
---

Gist || tl;dr

### algorithm walkthru

we will fetch some post/blog data from this endpoint `https://jsonplaceholder.typicode.com/posts`

- fetch all the data and store it in an array or hashmap or anything (we will store it in an array for this example)
- create a state variable that stores the data that is to be displayed, we'll name it `dataToBeDisplayed`
- create a button that calls a handler `loadMoreData()` which adds more posts to the `dataToBeDisplayed` array. This can be done using a slice operation.
- iterate over `dataToBeDisplayed` in order to display the data. 

*in this article all the sample data is fetched at once, no API optimization*

P.S this algorithm can be optimized, would love suggestions in the comments, might update the blog after some optimization.

Github Repo - [Load More](https://github.com/abcdeepakr/load-more)

<hr>

I recently started learning ReactJS, this load more functionality felt really daunting, even trying to code the unoptimized solution felt like a humongous task.
I recently started coding my own blog and I didn't want to display all my blogs at once. Which gave me some motivation to try out how to make a load more button.
So let's get into it.

 if you are reading this you probably have created the react project already, let me go to the part where we fetch some data

run the command  
```
npm i axios
```

Axios in a nutshell allows us to make API calls

let's fetch some data using useEffect Hook and store it in a state variable.

```
import React,{useEffect, useState} from 'react'

const functionName = () =>{

const [posts, setPosts] = useState([]) // posts will be of type array

useEffect(()=>{

axios.get('https://jsonplaceholder.typicode.com/posts')
.then(response =>{
          setPosts(response.data)
      })
.catch(error =>{
          console.log(error)
     })
   },[]) // run only on the first render
}
```

now that we have our posts, let's display all of them using the map function

```

let blogCards = posts.map((blog) => { // blogCards will store the card data
    return (
        <div key={blog.id}
                style={{ fontSize: "5px", border: "2px solid red", margin: "3px" }}>
          <h3>{blog.id}</h3>
          <h1>{blog.title}</h1>
          <h3>{blog.body}</h3>
        </div>
    );
  });

// React component function will return the code below

  return (
    <div>
      {blogCards} // the blogCards defined above are displayed/returned from the function here
      <button onClick={() => loadMoreBlogs()}>Load More</button>  // loadMoreBlogs is a function that loads more blogs, it is defined below.
    </div>
  );

```

now that we display all the blogs, let's write some code to load more blogs.

- create another state variable `blogsToDisplay` which will store the blogs to be displayed

```
let [blogsToDisplay, setBlogsToDisplay] = useState(posts.slice(0, 3)); // initially we will show 3 blogs

 const loadMoreBlogs = () => { // this function will load some more blogs
    let currLoadedBlogs = [...blogsToDisplay]; // spread all the current displayed blogs
    if (currLoadedBlogs.length < posts.length) { // check condition if we displayed all the blogs or not
      currLoadedBlogs = posts.slice(0, currLoadedBlogs.length + 3); // update the array with some more blogs
      setBlogsToDisplay(currLoadedBlogs); // set the value of setBlogsToDisplay to the updated array
    } else {
      console.log("no more blogs left to display"); // you can use your own logic here in order to reach the last blog
    }
  };

```

now that most of the steps are done, one final thing to do is, instead of iterating over `posts` in order to display the blogs, we will iterate over `blogsToDisplay` in order to display the blogs.

```
let blogCards = blogsToDisplay.map((blog) => { // blogCards return the cards that are to be displayed
    return (
        <div key={blog.id} >
          <h3>{blog.id}</h3>
          <h1>{blog.title}</h1>
          <h3>{blog.body}</h3>
        </div>
    );
  });

```

and we are done!!!

%[https://www.loom.com/share/ac15034b82244c228d03986e8c3ab401]


