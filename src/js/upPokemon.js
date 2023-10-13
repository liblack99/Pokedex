import showPokemon from "./showPokemon";

async function upPokemon(pokemonId, totalPokemon) {
  let upPokemonId = pokemonId + 10;
  if (upPokemonId > totalPokemon) {
    upPokemonId -= totalPokemon;
  }
  await showPokemon(upPokemonId);
  ledRight.classList.add("screen__lights_led--on");
  setTimeout(() => {
    ledRight.classList.remove("screen__lights_led--on");
  }, 200);
  return upPokemonId;
}
export default upPokemon;
