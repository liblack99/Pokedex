import showPokemon from "./src/js/showPokemon";
import "./src/styles/styles.css";
import addToFavorites from "./src/js/addToFavorite";
import { currentPokemon } from "./src/js/showPokemon";
import nextPokemon from "./src/js/nextPokemon";
import priorPokemon from "./src/js/priorPokemon";
import searchPokemon from "./src/js/searchPokemon";
import randomPokemon from "./src/js/randomPokemon";
import upPokemon from "./src/js/upPokemon";
import downPokemon from "./src/js/downPokemon";

let currentPokemonId = 1;
let totalPokemon = 1017;
let rotation = 0;

// bottom
const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");
const btnUp = document.getElementById("up");
const btnDown = document.getElementById("down");
const btnPokemonRandom = document.getElementById("random");
const btnAddFavorites = document.getElementById("btnAddFavorite");

export const searchPokemonInput = document.getElementById("search");
const favLight = document.getElementById("favLight");
const radar = document.getElementById("radar");
const ledLeft = document.getElementById("ledLeft");
const ledRight = document.getElementById("ledRight");

btnRight.addEventListener("click", async () => {
  rotation += 30;
  radar.style.transform = `rotate(${rotation}deg)`;
  currentPokemonId = await nextPokemon(currentPokemonId, totalPokemon);
});

btnLeft.addEventListener("click", async () => {
  rotation -= 30;
  radar.style.transform = `rotate(${rotation}deg)`;
  currentPokemonId = await priorPokemon(currentPokemonId, totalPokemon);
});

btnUp.addEventListener("click", async () => {
  rotation += 90;
  radar.style.transform = `rotate(${rotation}deg)`;
  currentPokemonId = await upPokemon(currentPokemonId, totalPokemon);
});

btnDown.addEventListener("click", async () => {
  rotation -= 90;
  radar.style.transform = `rotate(${rotation}deg)`;
  currentPokemonId = await downPokemon(currentPokemonId, totalPokemon);
});

searchPokemonInput.addEventListener("keypress", async (event) => {
  if (event.key === "Enter") {
    currentPokemonId = await searchPokemon(event);
    rotation += 360;
    radar.style.transform = `rotate(${rotation}deg)`;
  }
});

btnAddFavorites.addEventListener("click", () => {
  if (currentPokemon) {
    addToFavorites(currentPokemon);
  }
  favLight.classList.add("selector__button__add");
  setTimeout(() => {
    favLight.classList.remove("selector__button__add");
  }, 500);
});
btnPokemonRandom.addEventListener("click", async () => {
  currentPokemonId = await randomPokemon(totalPokemon);
});

showPokemon(currentPokemonId);

export const favoritePokemon = [];
