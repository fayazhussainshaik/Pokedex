import { createContext, useContext } from "react";
import { Pokedex } from "pokeapi-js-wrapper";
const P = new Pokedex();

const context = createContext(P);
export default context;

export function usePokeApi() {
  return useContext(context);
}
