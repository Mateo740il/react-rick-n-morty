import React, { useState } from 'react'
import { useLoaderData,NavLink } from 'react-router-dom'

const Characters = () => {
  const characters=useLoaderData()
  const [searchCharacter,setSearchCharacter]=useState('')
  let filterCharacters=characters.filter(char=>((char.name).toLowerCase()).includes(searchCharacter.toLowerCase()))
  return (
    <>
      <input className='search' type='text' placeholder='search character' value={searchCharacter} onChange={(e)=>setSearchCharacter(e.target.value)}/> 
      <div className='characters'>
        {filterCharacters.map(char=>(
          <NavLink key={char.id} to={char.id.toString()}>
            <div className='characterLink'>
              <p>{char.name}</p>
              <img src={char.image} alt='character'/>
            </div>
          </NavLink>
        ))}
      </div>
    </>
    
  )
}

export default Characters

export const charactersLoader=async()=>{

 let charactersArray=[];

  for(let i=1;i<6;i++){
    const res=await fetch(`https://rickandmortyapi.com/api/character?page=${i}`)
    if(!res.ok){
      throw Error('Could not fetch characters.')
    }
    const data=await res.json()
    charactersArray.push(data.results)
  }
  const allCharacters=charactersArray[0].concat(charactersArray[1],charactersArray[2],charactersArray[3],charactersArray[4]);
  return allCharacters
}


