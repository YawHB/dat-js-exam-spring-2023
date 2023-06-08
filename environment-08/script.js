"use strict";
window.addEventListener("load", start);

let posts = [];

async function start() {
    posts = await getPosts();
    console.log(posts);

    showPosts();
}

async function getPosts() {
    const res = await fetch("./posts.json");
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
            .addEventListener("click", () => addLike(post));
        document
            .querySelector("#posts-list article:last-child .unlike")
            .addEventListener("click", () => disLike(post));
    }
}

function addLike(post) {
    post.likes++;
    showPosts();
}
function disLike(post) {
    post.likes--;
    showPosts();
}
