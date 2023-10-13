async function getPokemon(pokemonId) {
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;

  try {
    const response = await fetch(URL);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    pokemonScreen.innerHTML = "";
    const textError = document.createElement("p");
    textError.textContent = "⚠Failed to find pokemon";
    pokemonScreen.appendChild(textError);
    return null;
  }
}
export default getPokemon;
