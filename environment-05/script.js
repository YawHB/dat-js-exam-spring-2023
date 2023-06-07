"use strict";

let runners = [];
window.addEventListener("load", start);

async function start() {
    runners = await getRunners();
    console.log(runners);
    runners.sort((a, b) => a.time - b.time);
    findFastestTimes();
}

async function getRunners() {
    const res = await fetch("runners.json");
    return await res.json();
}

function findFastestTimes() {
    const threeFastest = runners.slice(0, 3);
    const sevenRunnerUps = runners.slice(3, 10);
    showthreefastest(threeFastest);
    showAllRunnerUps(sevenRunnerUps);
}

function showthreefastest(threeFastest) {
    // 1.

    document.querySelector("#gold-name").textContent = threeFastest[0].name;
    document.querySelector("#gold-time").textContent =
        threeFastest[0].time.toFixed(2);

    // 2.
    document.querySelector("#silver-name").textContent = threeFastest[1].name;
    document.querySelector("#silver-time").textContent =
        threeFastest[1].time.toFixed(2);
    // 3.
    document.querySelector("#bronze-name").textContent = threeFastest[2].name;
    document.querySelector("#bronze-time").textContent =
        threeFastest[2].time.toFixed(2);
}

function showAllRunnerUps(runnerUps) {
    for (const runner of runnerUps) {
        const html = /*html*/ `
        
        <li>Runner ${runner.name} - time: ${runner.time.toFixed(2)}</li>
        
        `;
        document
            .querySelector("#runnerups-list")
            .insertAdjacentHTML("beforeend", html);
    }
}
