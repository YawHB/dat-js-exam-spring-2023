"use strict";

window.addEventListener("load", start);

let posts = [];

async function start() {
    posts = await getPosts();

    showPosts();
}

async function getPosts() {
    const res = await fetch("posts.json");
    return res.json();
}

function showPosts() {
    posts.sort((b, a) => a.likes - b.likes);
    document.querySelector("#posts-list").innerHTML = "";
    for (const post of posts) {
        const html = /*html*/ `
        <article>
             <img src="${post.image}" alt="${post.caption}" />
             <h2>${post.caption}</h2>
             <p>Likes: ${post.likes}</p>
             <button class="like">Like</button>
             <button class="unlike">Unlike</button>
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
    post.likes++;
    showPosts();
}
function minusOneLike(post) {
    post.likes--;
    showPosts();
}
