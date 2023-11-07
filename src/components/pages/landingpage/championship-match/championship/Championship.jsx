import React, { useEffect, useState } from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"

export default function Championship() {
  const [pokemons, setPokemons] = useState([])
  // const matchs = fetch(
  //   "http://api.football-data.org/v4/competitions/PL/standings",
  //   {
  //     method: "GET",
  //     headers: {
  //       "X-Auth-Token": " 	b39e252dbb0943769fe5de6dfe363e62", // Remplacez "YOUR_API_KEY" par votre clé d'API si nécessaire.
  //     },
  //   }
  // ).then((res) => {
  //   return res.json()
  // })
  // console.log(matchs)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon")
        if (response.ok) {
          const data = await response.json()
          setPokemons(data.results) // Mettez les données dans le state.
        } else {
          console.error(
            "La requête a échoué avec le statut : " + response.status
          )
        }
      } catch (error) {
        console.error("Une erreur s'est produite : " + error)
      }
    }

    fetchData()
  }, [])
  console.log(pokemons)
  return (
    <ChampionshipStyled>
      {pokemons.map((pokemon) => (
        <li>{pokemon.name}</li>
      ))}
    </ChampionshipStyled>
  )
}

const ChampionshipStyled = styled.div`
  height: 90%;
  width: 100%;

  background: rgba(15, 46, 34, 0.8);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid #145750;
`
