import React, { useState, useEffect } from "react";
import Character from "./Character";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(res => {
        console.log(res.results);
        setCharacters(res.results);
      });
  }, []);

  return (
    <>
      {characters.map(character => {
        return <Character character={character} />;
      })}
    </>
  );
}
