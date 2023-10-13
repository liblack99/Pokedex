import showFavorite from "./showFavorite";
import { favoritePokemon } from "../../index";

function addToFavorites(pokemon) {
  if (favoritePokemon.length < 10) {
    favoritePokemon.push(pokemon);
    showFavorite();
  } else {
    pokemonScreen.innerHTML = "";
    const textError = document.createElement("p");
    textError.textContent = "You already have 10 favorite Pokémon!";
    pokemonScreen.appendChild(textError);
  }
}
export default addToFavorites;
