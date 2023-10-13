import { searchPokemonInput } from "../..";
import showPokemon from "./showPokemon";

async function searchPokemon(event) {
  const pokemonValue = searchPokemonInput.value.trim();

  if (pokemonValue !== "") {
    let pokemon = await showPokemon(pokemonValue);
    searchPokemonInput.value = "";
    return pokemon.id;
  }
}
export default searchPokemon;
