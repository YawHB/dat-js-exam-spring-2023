"use strict";

window.addEventListener("load", start);

let posts = [];
let publishedPosts = [];
async function start() {
    posts = await fetchPosts();
    console.log(posts);
    publishedPosts = posts.filter((post) => post.published);
    showPosts(publishedPosts);
    document
        .querySelector("#filter-form")
        .addEventListener("change", showAllPosts);
}

async function fetchPosts() {
    const res = await fetch("posts.json");
    return res.json();
}

function showPosts(posts) {
    document.querySelector("#posts-list").innerHTML = "";
    for (const post of posts) {
        const html = /*html*/ `
        
        <article>
                    <img src = "${post.image}" alt="${post.caption}" />
                    <h2>${post.caption}</h2>
                    <p>Likes: ${post.likes}</p>
                </article>
        
        `;
        document
            .querySelector("#posts-list")
            .insertAdjacentHTML("beforeend", html);
    }
}

function showAllPosts(event) {
    // const isChecked = document.querySelector("#show-all-checkbox").checked;

    const isChecked = event.target.checked;

    console.log(isChecked);
    if (isChecked) {
        showPosts(posts);
    } else if (!isChecked) {
        showPosts(publishedPosts);
    }
}
