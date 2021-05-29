import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import DETAIL_POKEMON_QUERY from '../../graphql/DetailPokemon';
import { useParams } from 'react-router-dom';

const Detail = () => {
    let { name } = useParams();
    console.log(name, 'ini namenya');
    const { loading, error, data = {} } = useQuery(DETAIL_POKEMON_QUERY, {
        variables: { name:  name }
    });

    console.log(data, 'ini data')

    return (
        <h1>data</h1>
        // <DetailPokemon key={data.pokemon.id} pokemon={data.pokemon} />
        // <div className="detail_container">
        //     {data && data}
        // </div>
        
    );
}

export default Detail;