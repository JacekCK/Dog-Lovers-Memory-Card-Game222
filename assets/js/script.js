// must write name before page loaded

let username;

function requiredInput() {
    do {
        username = prompt("Welcome to Dog Lovers Memory Game \n\nTo proceed please enter your Name: ");
    }
    while (username.length < 2);
    document.getElementById("myinput").value = username;

};
requiredInput();

// cards 
let card = document.createElement("div");
let frontFace = document.createElement("img");
let backFace = document.createElement("div");
let alt = document.createAttribute("alt");

// image data

const imageData = [{
        imgSrc: "assets/images/dog1.webp",
        name: "dog1"
    },
    {
        imgSrc: "assets/images/dog2.webp",
        name: "dog2"
    },
    {
        imgSrc: "assets/images/dog3.webp",
        name: "dog3"
    },
    {
        imgSrc: "assets/images/dog4.webp",
        name: "dog4"
    },
    {
        imgSrc: "assets/images/dog5.webp",
        name: "dog5"
    },
    {
        imgSrc: "assets/images/dog6.webp",
        name: "dog6"
    },
];

// player left moves 

const gameSection = document.getElementById("game-section");
const playerMovesLeft = document.getElementById("playerMovesLeft");
let playerMoves = 10;
playerMovesLeft.textContent = playerMoves;

// cards in random order after page loaded or refresh 

function randomizeData() {
    let cardData = imageData;
    cardData.sort(() => Math.random() - 0.5);

    return cardData;

}