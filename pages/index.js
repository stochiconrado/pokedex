import React, { useEffect, useState } from "react";

export async function getStaticProps(context) {
  const pokemons = await fetch("https://pokeapi.co/api/v2/pokedex/2/")
    .then((respostaServer) => {
      if (respostaServer.ok) {
        return respostaServer.json();
      }
    })
    .then((respostaEmObjeto) => {
      return respostaEmObjeto.pokemon_entries;
    });

  return { props: {pokemons}};
}

export default function Home(props) {
  const {pokemons} = props;

  return (
    <div>
      Pokédex - Dev Soutinho
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.entry_number}>{pokemon.pokemon_species.name}</li>
        ))}
      </ul>
    </div>
  );
}
