import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductsCat } from '../hooks/useProductsCat';
import ErrorPage from './ErrorPage';
import Loading_Page from '../Components/Loading_Page';
import useFilter from '../hooks/useFilter';

export default function ExploreCategorie() {

    // On recupere l'id de la catégorie
    const {Categorie} = useParams();
    // On recupere tous les produits de la catégorie en Question
    const Products = useProductsCat(Categorie)
    // On filtre notre liste
    const FilteredProducts = useFilter(Products.data,Categorie)

  return (
    <div>
      {Products.loading ? <Loading_Page/> : null}
      {(Products.error != null) ? <div>{JSON.stringify(Products.error)}</div> : null} {/* On fera une page spéciale après */}
      {(FilteredProducts.length != 0) ? 
        <div className='border border-black'>
          {FilteredProducts.map(el =>(
            el.id
          ))}
        </div> 
      
      : <div> Pas de produits dans cette catégorie</div>}
    </div>
  )
}