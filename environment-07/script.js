"use strict";

window.addEventListener("load", start);

let posts = [];

async function start() {
    await getPosts();
    console.log(posts);

    sortLikes();
    showPosts();
}

async function getPosts() {
    const res = await fetch("./posts.json");
    posts = await res.json();
}
function showPosts() {
    document.querySelector("#posts-list").innerHTML = "";
    for (const post of posts) {
        const html = /*html*/ `
        
        <article>
             <img src="${post.image}" alt="${post.caption}" />
             <h2>${post.caption}</h2>
             <p>Likes: ${post.likes}</p>
             <button class="like"> like</button>
             <button class="unlike">unlike</button>
         </article>
        
    
        `;
        document
            .querySelector("#posts-list")
            .insertAdjacentHTML("beforeend", html);

        document
            .querySelector("#posts-list article:last-child .like")
            .addEventListener("click", () => addOneLike(post));
        document
            .querySelector("#posts-list article:last-child .unlike")
            .addEventListener("click", () => minusOneLike(post));
    }
}

function addOneLike(post) {
    console.log(post.likes++);
    sortLikes();
    showPosts();
}

function minusOneLike(post) {
    post.likes--;
    sortLikes();
    showPosts();
}

function sortLikes() {
    posts.sort((b, a) => a.likes - b.likes);
}
