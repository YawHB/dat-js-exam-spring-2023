"use strict";
window.addEventListener("load", start);

let posts = [];
async function start() {
    posts = await getPosts();
    console.log(posts);
}

async function getPosts() {
    const res = await fetch("./posts.json");
    return res.json();
}
