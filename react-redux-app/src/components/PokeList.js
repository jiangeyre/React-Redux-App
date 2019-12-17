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
            <div style={{display: "flex", flexDirection: "row", width: 700, flexWrap: "wrap", margin: "0 auto", backgroundColor: 'white', border: '5px solid black', boxShadow: '3px 5px 3px black'}}>
                {props.pokemon.map(pokemon => {
                    return <Pokemon pokemon={pokemon} url={pokemon.url} key={pokemon.id} />
                })}
            </div>
            <div style={{display: "flex", justifyContent: "space-around", width: 700, margin: "2% auto"}}>
                <button 
                    onClick={() => props.nextPokemon(props.lastURL)} 
                    style={{
                        fontFamily: 'Roboto Mono, monospace',
                        width: 120,
                        height: 30,
                        border: '2px solid black',
                        fontSize: '1.2rem',
                        boxShadow: '3px 5px 3px black'
                    }}> 
                    {backArrow} Back 
                </button>
                <button 
                    onClick={() => props.nextPokemon(props.nextURL)} 
                    style={{
                        fontFamily: 'Roboto Mono, monospace',
                        width: 120,
                        height: 30,
                        border: '2px solid black',
                        fontSize: '1.2rem',
                        boxShadow: '3px 5px 3px black'
                    }}> 
                    Next > 
                </button>
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
