"use strict";

let posts = [];
let sortLowToHigh = [];
let sortHighToLow = [];

window.addEventListener("load", start);

async function start() {
    posts = await getPosts();
    console.log(posts);

    document
        .querySelector("#sortorder")
        .addEventListener("change", refreshView);
    sortByLikes();
    showPosts();
}

async function getPosts() {
    const res = await fetch("posts.json");
    return res.json();
}

function showPosts() {
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

function sortByLikes() {
    const selected = document.querySelector("#sortorder").value;
    console.log(selected);

    if (selected === "ascending") {
        posts.sort((a, b) => a.likes - b.likes);
    } else if (selected === "descending") {
        posts.sort((b, a) => a.likes - b.likes);
    }
}

function refreshView() {
    sortByLikes();
    showPosts();
}
