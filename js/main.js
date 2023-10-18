const games = [
    "Paaltjesvoetbal",
    "game2",
    "game3",
    "game4",
    "game5",
    "game6",
    "game7",
    "game8",
    "game9",
    "game10",
    "game11",
    "game12",
    "game13",
    "game14",
    "game15",
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