import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Pokemon from './Pokemon';
import { fetchPokemon, nextPokemon } from '../store/actions/actions';

const PokeList = (props) => {
    useEffect(() => {
        props.fetchPokemon();
    }, []);
    
    console.log(props.pokemon);

    let backArrow = "<";

    return (
        <div>
            <div style={{display: "flex", flexDirection: "row", width: 700, flexWrap: "wrap", margin: "0 auto", backgroundColor: 'white', border: '1px solid black'}}>
                {props.pokemon.map(pokemon => {
                    return <Pokemon pokemon={pokemon} url={pokemon.url} key={pokemon.id} />
                })}
            </div>
            <div style={{display: "flex", justifyContent: "space-evenly", width: 500, margin: "2% auto"}}>
                <button onClick={() => props.nextPokemon(props.lastURL)} style={{fontFamily: 'Roboto Mono, monospace'}}> {backArrow} Back </button>
                <button onClick={() => props.nextPokemon(props.nextURL)} style={{fontFamily: 'Roboto Mono, monospace'}}> Next > </button>
            </div>
        </div>
        
    )
};

const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon,
        nextURL: state.nextURL,
        lastURL: state.lastURL
    }
};

export default connect(mapStateToProps, {fetchPokemon, nextPokemon})(PokeList)
