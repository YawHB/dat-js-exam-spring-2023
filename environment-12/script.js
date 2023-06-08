window.addEventListener("load", start);

let postnumre = [];
let addPostNummer = [];

async function start() {
    postnumre = await getPostNumbers();
    console.log(postnumre);

    document
        .querySelector("#address-form")
        .addEventListener("submit", submitForm);

    document.querySelector("#postnr").addEventListener("input", findBy);
}

async function getPostNumbers() {
    const res = await fetch("postnumre.json");
    return res.json();
}

function submitForm(event) {
    event.preventDefault();

    const form = event.target;

    const newPostNummer = {
        navn: form.navn.value,
        adresse: form.adresse.value,
        postnr: form.postnr.value,
        by: form.by.value,
        email: form.email.value,
        nyhedsbrev: form.nyhedsbrev.checked,
    };

    addPostNummer.push(newPostNummer);
    console.log(addPostNummer);
}

function findBy(event) {
    const postNr = event.target.value;
    const byFundet = postnumre.find((by) => by.postnr === postNr);
    if (byFundet) {
        insertCity(byFundet.by);
    } else {
        insertCity("");
    }
}

function insertCity(byFundet) {
    console.log(byFundet);
    document.querySelector("#by").value = byFundet;
}
