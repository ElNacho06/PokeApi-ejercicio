import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SideBar from "./SideBar";
import { Pokemon } from "./Pokemon";

export function Home() {
    const { pokemonName } = useParams(); 
    if (pokemonName === null){
        return (
            <div>
                <SideBar pokemon='gliscor' />
                <Pokemon />
            </div>
        );
    }else{
        return (
            <div>
                <SideBar pokemon={pokemonName} />
                <Pokemon />
            </div>
        );
    }
}
