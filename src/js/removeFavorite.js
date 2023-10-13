import { favoritePokemon } from "../../index";
function removeFavorite(index) {
  favoritePokemon.splice(index, 1);
}
export default removeFavorite;
