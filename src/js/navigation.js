btnRight.addEventListener("click", async () => {
  rotation += 30;
  radar.style.transform = `rotate(${rotation}deg)`;
  pokemonId++;
  if (pokemonId === totalPokemon) {
    pokemonId = 1;
  }
  await showPokemon(pokemonId);
  ledRight.classList.add("screen__lights_led--on");
  setTimeout(() => {
    ledRight.classList.remove("screen__lights_led--on");
  }, 200);
});
btnLeft.addEventListener("click", async () => {
  rotation -= 30;
  radar.style.transform = `rotate(${rotation}deg)`;
  if (pokemonId === 1) {
    pokemonId = totalPokemon;
  }
  pokemonId--;
  await showPokemon(pokemonId);
  ledLeft.classList.add("screen__lights_led--on");
  setTimeout(() => {
    ledLeft.classList.remove("screen__lights_led--on");
  }, 200);
});
btnUp.addEventListener("click", async () => {
  rotation += 60;
  radar.style.transform = `rotate(${rotation}deg)`;
  pokemonId = pokemonId + 10;
  if (pokemonId > totalPokemon) {
    pokemonId = 1;
  }
  await showPokemon(pokemonId);
  ledRight.classList.add("screen__lights_led--on");
  setTimeout(() => {
    ledRight.classList.remove("screen__lights_led--on");
  }, 200);
});
btnDown.addEventListener("click", async () => {
  rotation -= 60;
  radar.style.transform = `rotate(${rotation}deg)`;
  if (pokemonId === 1) {
    pokemonId = totalPokemon;
  }
  pokemonId = pokemonId - 10;
  await showPokemon(pokemonId);
  ledLeft.classList.add("screen__lights_led--on");
  setTimeout(() => {
    ledLeft.classList.remove("screen__lights_led--on");
  }, 200);
});
pokemonRandom.addEventListener("click", async () => {
  const random = Math.floor(Math.random() * totalPokemon) + 1;
  await showPokemon(random);
  pokemonId = await getIndex(random);
});
pokemonSearch.addEventListener("keypress", async (event) => {
  const pokemonValue = pokemonSearch.value.trim();
  if (event.key === "Enter") {
    if (pokemonValue !== "") {
      await showPokemon(pokemonValue);
      pokemonId = await getIndex(pokemonValue);
    }
  }
});
btnAddFavorites.addEventListener("mouseover", () => {
  catchPokemon.classList.remove("inactive");
});
btnAddFavorites.addEventListener("mouseout", () => {
  catchPokemon.classList.add("inactive");
});
btnAddFavorites.addEventListener("click", () => {
  if (currentPokemon) {
    addToFavorites(currentPokemon);
  }
  favLight.classList.add("selector__button__add");
  setTimeout(() => {
    favLight.classList.remove("selector__button__add");
  }, 500);
});
