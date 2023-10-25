import React from 'react'

export default function Categorie({id,Name}) {
  return (
    <div>
      <h1>{Name}</h1>
      <p>{id}</p>
    </div>
  )
}
