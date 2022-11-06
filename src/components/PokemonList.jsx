import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

const PokemonList = ({ pokemons }) => {
    return (
        <div className="PokemonList">
            {pokemons.map((pokemon) => (
                <PokemonCard
                    name={pokemon.name}
                    image={pokemon.sprites.front_default}
                    key={pokemon.name}
                    types={pokemon.types}
                    id={pokemon.id}
                    favorite={pokemon.favorite}
                />
            ))}
        </div>
    );
};

export default PokemonList;
