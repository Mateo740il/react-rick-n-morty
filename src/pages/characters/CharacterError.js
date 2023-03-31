import React from 'react'
import { useRouteError,Link } from 'react-router-dom'

const CharacterError = () => {

    const error=useRouteError()
  return (
    <div>
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Back to the Homepage</Link>
    </div>
  )
}

export default CharacterError
