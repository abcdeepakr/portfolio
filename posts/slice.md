---
title: '[::-1]'
date: 'Sep 12, 2021'
excerpt: 'In the first semester of my CS Degree, they taught us python, classes were mostly theoretical initially and then...'
cover_image: '/images/posts/img30.jpg'
area: 'technical'
---

In the first semester of my CS Degree, they taught us python, classes were mostly theoretical initially and then one day our lecturer gave us a task, reversing a string in python. Now that I am fairly comfortable with basic to intermediate level problem solving, this problem feels like a cakewalk, but back then I didn't know jackshit about problem-solving, patterns, programming and python. 
After spending some time and coming up with dirty, brute-force solutions, the lecturer asked if there were volunteers who'd like to write their solution on the board, a couple of them went created an empty string and added characters from the end, some used list and joins, but then this one guy went up to the board took the chalk piece wrote just 1 line `string[::-1]` and came back to his seat without saying anything or looking in anyone's eye. Giga chad move I must say. He must have felt like this

![img](https://res.cloudinary.com/jerrick/image/upload/v1617242185/6065284918e784001e22e175.jpg)

I was in awe, still remember the look on all the faces, I never felt like knowing the reason why the slice operator does that, we all know about the syntax i.e ``` string[start:stop: step]```

but I never tried to understand why `[::-1]` reverses a string so I went on to test some examples and here is the reason.

following do the same thing
```
string = "abcde"
print(string[:]) //prints abcde
print(string[0:]) //prints abcde
print(string[:5]) //prints abcde
print(string[0:5:1]) //prints abcde
print(string[::])  //prints abcde

print(string[::-5]) // prints e
print(string[::-4])  // prints ea because it skips 4 places moving from end to start
print(string[::-3])  //similarly this prints eb
```

So giving no field as start and stop means the start and stop values become 0 and the length of the string respectively and “-1” means starting from the end and stopping at the start, which is nothing but reversing a list, this is a slick trick, but once you play around with examples, you'll get a hang of it.

People often debate about college degrees, if it's relevant or not, but in your late teens, you learn a lot staying in college, one should go to college to explore communities and meet new people, it's a nice way to explore yourself, the whole lockdown felt like staying in a cocoon, one develops a good attitude in college, College is more than just the academics. 
This small instance of [::-1] was a very very small instance of that, it helped me to gain some interest in the language, learnings comes from all directions, but learning should come from within

