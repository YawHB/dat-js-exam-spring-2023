import { events } from "./data.js";

window.addEventListener("load", start);

function start() {
    events.sort((b, a) => a.date.localeCompare(b.date));

    const eventsOnMonthSix = filterMonthSix();
    console.log(eventsOnMonthSix);
    showEvents(eventsOnMonthSix);
}

function showEvents(sixthMonth) {
    for (const event of sixthMonth) {
        const html = /*html*/ `
        
        <li>${event.date} - ${event.title}: ${event.description}</li>
        `;
        document
            .querySelector("#events-list")
            .insertAdjacentHTML("beforeend", html);
    }
}

function filterMonthSix() {
    //for hver date value splitter vi ved "-" og får et nyt array af ["year", "month", "date"]
    //Herfra sammenligner vi index 1 med "06" if true, return
    return events.filter((event) => event.date.split("-")[1] === "06");
}
