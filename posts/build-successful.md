---
title: 'Build Successful'
date: 'Oct 3, 2021'
excerpt: 'I had to push my code to azure DevOps and was assigned to create pipelines to deploy a static...'
cover_image: '/images/posts/img32.jpg'
area: 'technical'
---

I had to push my code to azure DevOps and was assigned to create pipelines to deploy a static web application that I made using NextJs. This was the first time I got a chance to get my hands dirty with DevOps. Previously I used to deploy all my stuff on either Github pages or Vercel. Vercel is the single best thing that has happened to React Developers I believe, with no tantrums from their end.

Anyway, being a rookie, I made a rookie mistake. Vercel spoilt me, they were so kind, that they took care of the build errors too. 2 words, literally 2 words had me scratching my head for 2 effin weeks. I gave up, I was showing the dev version on each app review, because I wasn't able to figure out the reason why the build failed.

The articles that I read, which had the deployment instructions, did just 1 change, and that was to add a YAML file, which is obvious for creating a starter pipeline. I did everything they did, I tweaked it, I asked questions on multiple forums, I went to their Github repo and raised a bug too, thinking it's the platforms' issue. 
I tried everything they said me to do, and tested all possible values for everything they said me to do, which was my first mistake. I was trying things that they mentioned in the blog, I didn't go and visit other places in the application, but since things were working fine in the dev settings, nothing raised a red flag. Except for 1 thing. The `npm run build ` command, the command that people don't test it often in the dev settings. I ran it, there were no errors, but the problem wasn't the build, the problem was me not exporting the build, so instead of ` build : next build` i had to change it to ` build : next build && next export`, these two words `next export` this 1 command budged me for a couple of weeks, It was a stupid mistake and I am ashamed of this silly mistake, but at the same time I learnt a thing or two about azure DevOps, because I tried different types of pipelines, changed a lot of things, played with stuff, and luckily my manager didn't stress much about it, as things were going well when it came to the development part. 
So trying to look for the errors in the most unexpected places is a good thing, 