"use strict";
window.addEventListener("load", start);

let rooms = [];

function start() {
    document
        .querySelector("#create-room-form")
        .addEventListener("submit", addRoom);
}

function addRoom(event) {
    event.preventDefault();

    const form = event.target;

    const newRoom = {
        name: form.name.value,
        width: Number(form.width.value),
        length: Number(form.length.value),
        area: Number(form.width.value) * Number(form.length.value),
    };

    rooms.push(newRoom);
    console.log(rooms);

    showRooms();
}

function showRooms() {
    sortBy("area ");
    document.querySelector("#rooms-table").innerHTML = "";
    for (const room of rooms) {
        const html = /*html*/ `
        <tr>
            <td>${room.name}</td>
            <td>${room.width}</td>
            <td>${room.length}</td>
            <td>${room.area}</td>
        
         </tr>
        `;

        document
            .querySelector("#rooms-table")
            .insertAdjacentHTML("beforeend", html);
    }
}

function sortBy(x) {
    rooms.sort((a, b) => a[x] - b[x]);
}
