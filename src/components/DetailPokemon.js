import React from 'react';

function DetailPokemon(pokemon) {
    return (
        <div className="detail_pokemon">
            <div className="detail_name">
                <p>{pokemon.name}</p>
            </div>
            <div className="detail_image">
                <img src={pokemon.image} alt={pokemon.name}></img>
            </div>
            <div className="detail_weight">
                <p className="label_weight">Weight Range</p>
                <p className="">{pokemon.weight.minimum} - {pokemon.weight.maximum}</p>
            </div>
            <div className="detail_height">
                <p className="label_height">Height Range</p>
                <p className="">{pokemon.height.minimum} - {pokemon.height.maximum}</p>
            </div>
            <div className="detail_height">
                <p className="label_height">Height Range</p>
                <p className="">{pokemon.height.minimum} - {pokemon.height.maximum}</p>
            </div>
            <div className="detail_classification">
                <p className="label_classification">Classification</p>
                <p className="">{pokemon.classification}</p>
            </div>
        </div>
    );
}

export default DetailPokemon;