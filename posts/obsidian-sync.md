---
title: "Obsidian Sync"
date: 'Oct 22, 2023'
excerpt: "Syncing your obsidian data with git, because who doesn't like merge conflicts in their note taking app"
cover_image: '/images/contentImages/obsidian-sync.jpg'
area: 'technical'
---

<img src="/images/contentImages/obsidian-sync.png" style="width:400px;height:400px;display:flex;margin:auto">

Working with Obsidian is a pain if you have it installed on multiple devices, most of the time I'm on my work laptop, but I jot down my side project ideas on my personal laptop. After a lot of procrastination, I decided to work on a project that had been pending for a while. I got my laptop and decided to read through the points I wrote down earlier, now sadly I wrote them down on my personal laptop.

The bigger problem here is my laziness I don't want to go to the other room and get my laptop, but something should be done about this sync issue, it's been going on for a while, and I just keep talking about it and didn't do anything. I looked up how people are syncing it for free, since Obsidian charges $8 for the sync feature.

People were suggesting Google Drive, onedrive, iCloud etc. felt cute and might implement later. let's get back to the project. I was making a GitHub repo for the project, and it struck me, why don't we just use git for the version control of these notes? seems like a very cumbersome solution for a straightforward problem, even more so when easier solutions are available, but I wanted to do it to satisfy the itch.

I created a private repo, made work and personal folders, pushed data from my personal laptop, cloned it in my work laptop, arranged the files, and made it my default vault. Now, I just push after working and pull before. simple.

But I wanted to make this process even more painful. I thought this process included so many steps, I should keep a terminal open to push and pull changes, wish I could do it straight from Obsidian. hmmmmmmmmm, let's make a bloody plugin for it!!!

I googled, `how to make an obsidian plugin`, and got the docs, very straightforward, I'd recommend it to anyone learning JS or preparing for frontend interviews, teaches you a lot of vanilla JS concepts. 
Okay, back to the plugin, I cloned their template, and it added an icon on the sidebar and fired a message box when clicked.

Perfect, now I just have to render a modal, give two buttons, pull and push, and a text box for commit messages. and voila, done.
I did that and it worked lmao.

<img src="/images/contentImages/obsidian-modal.png" style="width:500px;height:400px;display:flex;margin:auto">

Make your vault a git repo, and this is good enough to push and pull without using github APIs.
Basically the plugin `cd`'s into the vault and pushes stuff, that's it

```js
// /utils/execute.js
import { exec } from "child_process";

export const executeShell = (absolutePath, commitMessage) => {
  exec(`cd ${absolutePath} && ./commit.sh ${commitMessage}`, (error, stdout, stderr) => {
    if (error) {
      return error.message
    }
    if (stderr) {

      return `git error: ${stderr}`
    }
    return `git message: ${stdout}`
  });
}

export const setFilePermissions = (command) => {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      return error.message
    }
    if (stderr) {
      return `git error: ${stderr}`
    }
    return `git message: ${stdout}`
  });
}
```

The `commit.sh` file navigates into the vault, and pushes the changes, now I didn't account in the merge conflicts, basically these functions you see return a message and it just shows that, then you have to open your IDE to resolve them lmao.

Now a bigger problem after developing was, If I don't publish this extension, the steps required to push and pull are greater than the steps required to do it from the terminal lol, because after installing the plugin from github, you have to start a local server for it to run on obsidian and push changes.
Which then basically brings you back to where you started. but with more steps this time.

However i'm not sure if i will publish there, as there are some issues still, but if you wanna give it a shot, clone [this repo](https://github.com/abcdeepakr/obsidian-git-plugin)


Also, this repository supports Ukraine
<img src="/images/contentImages/js-ts.png" style="width:300px;height:150px;display:flex;margin:auto">