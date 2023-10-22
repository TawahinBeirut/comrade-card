import React from 'react'

export default function ({error}) {
  return (
    <div><p>Erreur : {JSON.stringify(error)}</p></div>
  )
}
