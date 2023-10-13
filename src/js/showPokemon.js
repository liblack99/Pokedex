import getPokemon from "./getPokemon";
import typeColors from "./types";

export let currentPokemon;
const loadingTemplate = `<div class="load" id="loading"><div></div><div></div></div>`;
const pokemonScreen = document.getElementById("screenContent");
const pokemonName = document.getElementById("pokemonName");
const pokemonTypes = document.getElementById("types");
const pokemonStats = document.getElementById("stats");
const pokemonWeight = document.getElementById("weight");
const pokemonExp = document.getElementById("experience");
const abilityPrimary = document.getElementById("abilityPrimary");
const abilitySecond = document.getElementById("abilitySecond");

async function showPokemon(pokemonId) {
  pokemonScreen.innerHTML = loadingTemplate;
  try {
    const pokemon = await getPokemon(pokemonId);
    currentPokemon = pokemon;

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

    //abilities

    const abilities = pokemon.abilities;

    abilities.forEach((element, index) => {
      const abilityName = element.ability.name.replace("-", " ");

      if (index === 0) {
        abilityPrimary.textContent = abilityName;
      } else if (index === 1) {
        abilitySecond.textContent = abilityName;
      }
    });
    return currentPokemon;
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

export default showPokemon;
