const games = [
    "Levend boter kaas en eieren",
    "Taai-Taai Sjoelen",
    "Pepernoot estafette",
    "Schoorsteen gooien",
    "Staf/touw trekken",
    "Cadeau toren bouwen",
    "Dakgoothangen",
    "Levend mastermind",
    "Cadeau zak lopen",
    "Limo leppelen",
    "Groot mikado",
    "Groot Jenga",
    "Sinterklaas quiz",
    "Gooi/kijk kim",
    "Door fluister spel",
    "Door fluister spel",
    "Door fluister spel",
    "Door fluister spel",
    "Door fluister spel",
    "Door fluister spel",
    "Door fluister spel",
];

const mainElement = document.querySelector("main");

games.forEach((game) => {
    const pElement = document.createElement("p");
    pElement.innerText = game;
    pElement.classList.add("game");
    mainElement.appendChild(pElement);
    pElement.addEventListener("click", (e) => {
        e.target.classList.toggle("used")
    });
})