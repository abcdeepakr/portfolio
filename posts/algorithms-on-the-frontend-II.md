---
title: "Algorithms on the frontend - 2"
date: 'Sept 01, 2022'
excerpt: 'A few months back I wrote about algorithms on the fronend, I read it a few days back, and realised how...'
cover_image: ''
area: 'technical'
---

I wrote about [Algorithms on the frontend](https://www.deepakr28.com/blogs/algorithms-on-the-frontend) about an year ago. I was really wrong about most of the things that i mentioned there. Some of them are wrong.

First of all I'd like to address how lazy i've become when it comes to writing, this is just my 2nd technical writeup since then, I would love to write more, I'm saving up to buy a new laptop.

When I wrote that blog, I was 4 months in my new organization, I was happy that I was able to use a Data structue concept in a real life application. How ever the idea that I tried to communicate through that blog was, that one should be able to know DSA even for frontend roles. Which I still believe in.
While doing DSA the brain is wired up to think in better way, ways in which you could come up to a solution which is readable, fast and beautiful. 
But the example that I gave in that blog was totally wrong. I didn't know the distinction between the frontend and the backend. Now I have a better understanding of the same. I was looping over 50000 lines of custom JSON to find a particular element. While using binary search, I felt very smart, because I was the one who was incharge of the whole project, the backend of this project was non-existent, I did eveyrthing via react, even the API calls with sensitive information, I was skeptical about it but couldnt find good answers supporting claims about why not to make API calls from React.

If I had more understanding about the technologies which I was working with backend, I would have created a backend for the same, with some API which would sort the data and reaturn the things required from the backend. 
This particualar anti pattern goes by the example of gorilla banana problem, or the God object, where one component has a lot going on, and always returns more data.


Luckily since then, I have worked extensively on FrontEnd and Backend, which reduced my urge to write everything on react and render. Needed a backend atleast for security.

My point across this article being, don't go with the first feasible solution that comes to yours mind while handeling large datasets, Communicate with the developrs regarding the god object anti pattern, and this will reduce the chances of unnecessary brain stormming over simple solutions.

