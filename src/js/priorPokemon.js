import showPokemon from "./showPokemon";

async function priorPokemon(pokemonId, totalPokemon) {
  let priorPokemonId = pokemonId - 1;
  if (priorPokemonId < 1) {
    priorPokemonId = totalPokemon;
  }
  await showPokemon(priorPokemonId);
  ledLeft.classList.add("screen__lights_led--on");
  setTimeout(() => {
    ledLeft.classList.remove("screen__lights_led--on");
  }, 200);
  return priorPokemonId;
}
export default priorPokemon;
