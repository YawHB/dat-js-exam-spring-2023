"use strict";
window.addEventListener("load", start);

let posts = [];
let publishedPosts = [];
async function start() {
    document
        .querySelector("#filter-form")
        .addEventListener("change", showPostsCheck);
    posts = await getPosts();
    filterPublishedPosts();
    showPosts(publishedPosts);
}

async function getPosts() {
    const res = await fetch("./posts.json");
    return res.json();
}

function filterPublishedPosts() {
    publishedPosts = posts.filter((post) => post.published);
}

function showPosts(posts) {
    document.querySelector("#posts-list").innerHTML = "";
    for (const post of posts) {
        const html = /*html*/ `
        <article>
                    <img src="${post.image}" alt="${post.caption}" />
                    <h2>${post.caption}</h2>
                    <p>Likes: ${post.likes}</p>
                </article>
        
        `;
        document
            .querySelector("#posts-list")
            .insertAdjacentHTML("beforeend", html);
    }
}

function showPostsCheck(event) {
    const isAllPosts = event.target.checked;
    console.log(isAllPosts);
    if (isAllPosts) {
        showPosts(posts);
    } else {
        showPosts(publishedPosts);
    }
}
