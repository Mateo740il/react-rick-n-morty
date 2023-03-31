import React from 'react'
import { Outlet } from 'react-router-dom'

const CharactersLayout = () => {
  return (
    <div className='charactersLayout'>
      <h2>Characters</h2>
      <Outlet />
    </div>
  )
}

export default CharactersLayout
