const favoritePokemon = [];
let pokemonId = 1;
let totalPokemon = 1011;
let rotacion = 0;
let currentPokemon = null;

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
loandingScreen.classList.remove("inactive");

async function showPokemon(pokemonId) {
  try {
    const pokemon = await getPokemon(pokemonId);
    currentPokemon = pokemon;
    // img
    const pokemonImg = pokemon.sprites.other["official-artwork"].front_default;
    pokemonScreen.innerHTML = "";
    const img = document.createElement("img");
    img.setAttribute("src", pokemonImg);
    img.setAttribute("alt", pokemon.name);

    pokemonScreen.appendChild(img);

    // name
    const name = pokemon.name.replace("-", " ");
    pokemonName.innerHTML = "";
    pokemonName.textContent = name;

    //type
    const typesList = pokemon.types.map((type) => type.type.name);
    pokemonTypes.innerHTML = "";
    typesList.forEach((type) => {
      const typeInfo = typeColors[type];
      const container = document.createElement("div");
      container.classList.add("type");
      container.style.background = typeInfo.background;
      container.style.color = typeInfo.color;
      container.textContent = type;
      pokemonTypes.appendChild(container);
    });

    //stats
    const statsList = pokemon.stats;
    pokemonStats.innerHTML = "";
    statsList.forEach((stat) => {
      const statName = stat.stat.name.replace("-", " ");
      const baseStat = stat.base_stat;
      const statText = document.createElement("p");
      statText.classList.add("stats__item");
      statText.textContent = `${statName} : ${baseStat}`;
      pokemonStats.appendChild(statText);
    });

    //Weight, exp
    const weight = pokemon.weight;
    const exp = pokemon.base_experience;
    pokemonWeight.innerHTML = "";
    pokemonExp.innerHTML = "";

    const weightText = document.createElement("p");
    weightText.textContent = `Weight: ${weight}`;

    const expText = document.createElement("p");
    expText.textContent = `Exp: ${exp}`;

    pokemonWeight.appendChild(weightText);
    pokemonExp.appendChild(expText);

    //abilites

    const abilities = pokemon.abilities;

    abilities.forEach((elemento, index) => {
      const abilityName = elemento.ability.name.replace("-", " ");

      if (index === 0) {
        abilityPrimary.textContent = abilityName;
      } else if (index === 1) {
        abilitySecond.textContent = abilityName;
      }
    });
  } catch (error) {
    pokemonScreen.innerHTML = "";
    pokemonName.innerHTML = "";
    pokemonName.textContent = "UP!!!";
    pokemonStats.innerHTML = "";
    pokemonWeight.innerHTML = "";
    pokemonExp.innerHTML = "";
    pokemonTypes.innerHTML = "";
    const textError = document.createElement("p");
    textError.textContent = "Failed to find pokemon";
    pokemonScreen.appendChild(textError);
  }
}
showPokemon(pokemonId);

async function getIndex(pokemonId) {
  const pokemons = await getPokemon(pokemonId);
  const index = pokemons.id;
  return index;
}

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

function removeFavorite(index) {
  favoritePokemon.splice(index, 1);
}
