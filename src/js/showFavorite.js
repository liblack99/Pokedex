import { favoritePokemon } from "../../index";
import removeFavorite from "./removeFavorite";

function showFavorite() {
  const pokemonFavorites = document.querySelectorAll(".pokemons__favorites");

  favoritePokemon.forEach((pokemon, index) => {
    const src = pokemon.sprites.other["official-artwork"].front_default;

    if (pokemonFavorites[index]) {
      pokemonFavorites[index].innerHTML = "";
      const img = document.createElement("img");
      img.setAttribute("src", src);
      img.setAttribute("alt", pokemon.name);
      pokemonFavorites[index].addEventListener("click", () => {
        pokemonFavorites[index].innerHTML = "";
        removeFavorite(index);
      });

      pokemonFavorites[index].appendChild(img);
    }
  });
}
export default showFavorite;
