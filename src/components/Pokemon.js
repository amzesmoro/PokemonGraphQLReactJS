import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import Detail from '../pages/detail';


function Pokemon({ pokemon }) {
    return (
        <Router>
            <Link className="pokemon_item" to="/"> 
                <div className="pokemon_name">
                    <p>{pokemon.name}</p>
                </div>
                <div className="pokemon_holder_image">
                    <img className="pokemon_image" src={pokemon.image} alt={pokemon.name}></img>
                </div>
            </Link>

            <Switch>
                <Route exact path="/:name" children={<Detail />} />
            </Switch>

        </Router>
    );
}

export default Pokemon;