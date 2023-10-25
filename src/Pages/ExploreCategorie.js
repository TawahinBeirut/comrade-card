import React from 'react'
import { useParams } from 'react-router-dom'

export default function ExploreCategorie() {

    // On recupere l'id de la catégorie
    const {Categorie} = useParams();
    
  return (
    <div>ExploreCategorie : {Categorie}</div>
  )
}
