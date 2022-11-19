---
title: "Algorithms on the frontend - 2"
date: 'Sept 01, 2022'
excerpt: 'A few months back I wrote about algorithms on the fronend, I read it a few days back, and realised how...'
cover_image: ''
area: 'technical'
---

I wrote about [Algorithms on the frontend](https://www.deepakr28.com/blogs/algorithms-on-the-frontend) about an year ago. The blog was written in an anecdotal manner, nothing technical. I was really wrong about most of the things that i mentioned there.

First of all I'd like to address how lazy i've become when it comes to writing, this is just my 2nd technical writeup since then, I would love to write more, I'm saving up to buy a new laptop. For some reason, whatsoever it doesn't take any sort of effort while writing on a laptop. It feels like writing on your favourite notebook with your favourite pen

When I wrote that blog, I was 4 months in my new organization, I was happy that I was able to use a Data structures and some of those algorithmic concept in a real life applications. How ever the idea that I tried to communicate through that blog was, one should be able to know DSA even for frontend roles. Which I still believe in.
While doing DSA the brain is wired up to think in better way, ways in which you could come up to a solution which is readable, fast and beautiful. 
But the example that I gave in that blog was totally wrong. I didn't know the distinction between the frontend and the backend. Now I have a better understanding of the same. I was looping over 50000 lines of custom JSON to find a particular element. 
I used binary search to loop over that data to search a particular object, I felt very smart, because I was the one who was incharge of the whole project, the backend of this project was non-existent, I did everything using react, even the API calls with sensitive information, I was skeptical about the security issues but couldn't find good answers supporting claims about why not to make API calls from React.

If I had more understanding about the technologies that I was working with back then, I would have created a backend for the same, with some APIs that could sort the data and return only the required response.

I was prop drilling a big JSON object across 3 components, without parsing the data. 
This particular anti pattern goes by the famous example of the gorilla banana problem, or the God object, where one component has a lot going on, and always returns more information than required.

Luckily since then, I have worked extensively on Frontend and Backend, which reduced my urge to write everything on the client side. Just because JSX makes it easy to parse some data, it doesn't each and every such operation can be implemented on the frontend. The logic and the data must be refined before using it in the frontend. It does not matter if you are able to traverse over a graph with millions of nodes efficiently. 
You should not have that many nodes in the first place, your algorithm is of no use, if your data isn't refined. Which makes working with frontend technologies equally interesting as the Backend because even here you have to squeez certain areas of the codebase to improve the 1000ms on the browser.

My point across this article being, don't go with the first feasible solution that comes to yours mind while handling large datasets, communicate with the developers, this is the most important step if you work in smaller teams, you need multiple point of views when there are no code reviews. Both Frontend and Backend are important to implement a solution, the trade offs have to be made to release any project. The only scenario where you handle complex and heavy dataset with an equally complicated algorithm on the frontend is when you've designed the system poorly. 
User browsers cannot handle big JSON responses, they need to be optimized before sending it as a response to a user.

