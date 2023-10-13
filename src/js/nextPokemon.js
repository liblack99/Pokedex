import showPokemon from "./showPokemon";

async function nextPokemon(pokemonId, totalPokemon) {
  let nextPokemonId = pokemonId + 1;
  if (nextPokemonId === totalPokemon) {
    nextPokemonId = 1;
  }
  await showPokemon(nextPokemonId);
  ledRight.classList.add("screen__lights_led--on");
  setTimeout(() => {
    ledRight.classList.remove("screen__lights_led--on");
  }, 200);
  return nextPokemonId;
}
export default nextPokemon;
