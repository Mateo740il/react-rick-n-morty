import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const CharacterDetails = () => {
    const {id} =useParams()
    const character=useLoaderData()

  return (
    <div className='characterDetails'>
        <h3>{character.name}</h3>
        <img src={character.image} alt='character'/>
        <p><b>Species:</b> {character.species}</p>
        <p><b>Status:</b> {character.status}</p>
        <p><b>Type:</b> {character.type}</p>
        <p><b>Created:</b> {character.created.slice(0,10)}</p>
        <p><b>Location:</b> {character.location.name}</p>
    </div>
  )
}

export default CharacterDetails

export const characterDetailsLoader=async({params})=>{
    const {id}=params
    const res=await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    if(!res.ok){
        throw Error('Could not find that character.')
    }
    return res.json()
}