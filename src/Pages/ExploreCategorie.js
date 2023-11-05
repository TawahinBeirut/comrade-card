import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductsCat } from '../hooks/useProductsCat';
import ErrorPage from './ErrorPage';
import Loading_Page from '../Components/Loading_Page';

export default function ExploreCategorie() {

    // On recupere l'id de la catégorie
    const {Categorie} = useParams();

    // On recupere tous les produits de la catégorie en Question
    const Products = useProductsCat(Categorie)
    console.log(Products)
  return (
    <div>
      {Products.loading ? <Loading_Page/> : null}
      {(Products.error != null) ? <div>{JSON.stringify(Products.error)}</div> : null} {/* On fera une page spéciale après */}
      {(Products.data) ? 
      
        <div className='border border-black'>
          {Products.data.map(el =>(
            el.id
          ))}
        </div> 
      
      : null}
    </div>
  )
}