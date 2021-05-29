import React from "react";
import { useQuery } from '@apollo/react-hooks';
import LIST_POKEMON_QUERY  from "../../graphql/Pokemon";
import Pokemon from '../../components/Pokemon';

const Home = () => {
    const { data: { pokemons = [] } = {} } = useQuery(LIST_POKEMON_QUERY, {
        variables: { first: 15 },
    });
    
    return (
        <div className="content">
            <div className="pokemons_list">
                {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
            </div>
        </div>
    );
}

export default Home;
