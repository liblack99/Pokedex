import showPokemon from "./showPokemon";

async function randomPokemon(totalPokemon) {
  const randomPokemonId = Math.floor(Math.random() * totalPokemon) + 1;
  let pokemonRandom = await showPokemon(randomPokemonId);
  return pokemonRandom.id;
}
export default randomPokemon;
