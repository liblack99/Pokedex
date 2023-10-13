import showPokemon from "./showPokemon";

async function downPokemon(pokemonId, totalPokemon) {
  let downPokemonId = pokemonId - 10;
  if (downPokemonId < 1) {
    downPokemonId += totalPokemon;
  }
  await showPokemon(downPokemonId);
  ledRight.classList.add("screen__lights_led--on");
  setTimeout(() => {
    ledRight.classList.remove("screen__lights_led--on");
  }, 200);
  return downPokemonId;
}
export default downPokemon;
