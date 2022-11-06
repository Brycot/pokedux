import axios from "axios";

export const getPokemons = async () => {
    return axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((res) => res.data.results)
        .catch((err) => console.log(err));
};

// export default getPokemons;

export const getPokemosDetails = (pokemon) => {
    return axios
        .get(pokemon.url)
        .then((res) => res.data)
        .catch((err) => console.log(err));
};
