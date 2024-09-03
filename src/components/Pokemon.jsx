import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

export const Pokemon = ({ onDataFetched }) => {
    const [pokemon, setPokemon] = useState(null);
    const { pokemonName } = useParams();
    const audioRef = useRef(null);

    useEffect(() => {
        async function obtenerPokemon() {
            const link = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
            const respuesta = await fetch(link);
            const datos = await respuesta.json();
            setPokemon(datos);
            if (onDataFetched) onDataFetched(datos);
        }
        obtenerPokemon();
    }, [pokemonName, onDataFetched]);

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    if (!pokemon) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.back_default} alt={`sprite del pokemon: ${pokemon.name}`} />
            <img src={pokemon.sprites.front_default} alt={`sprite del pokemon: ${pokemon.name}`} />
            <audio ref={audioRef} src={pokemon.cries.latest} preload="auto"></audio>
            <button onClick={playSound} id="playSoundButton">Play Sound</button>
            <br/>
            <img src={pokemon.sprites.back_shiny} alt={`sprite del pokemon: ${pokemon.name}`} />
            <img src={pokemon.sprites.front_shiny} alt={`sprite del pokemon: ${pokemon.name}`} />
        </div>
    );
}
