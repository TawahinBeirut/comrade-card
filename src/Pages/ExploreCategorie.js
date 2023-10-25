import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductsCat } from '../hooks/useProductsCat';

export default function ExploreCategorie() {

    // On recupere l'id de la catégorie
    const {Categorie} = useParams();

    // On recupere tous les produits de la catégorie en Question
    const Products = useProductsCat(Categorie)
  return (
    <div>
      {JSON.stringify(Products)}
    </div>
  )
}
