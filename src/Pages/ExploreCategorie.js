import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductsCat } from '../hooks/useProductsCat';
import ErrorPage from './ErrorPage';
import Loading_Page from '../Components/Loading_Page';
import useFilter from '../hooks/useFilter';
import Product from '../Components/Product';

export default function ExploreCategorie() {

    // On recupere l'id de la catégorie
    const {Categorie} = useParams();
    // On recupere tous les produits de la catégorie en Question
    const Products = useProductsCat()
    // On filtre notre liste
    const FilteredProducts = useFilter(Products.data,Categorie)

  return (
    <div>
      {Products.loading ? <Loading_Page/> : null}
      {(Products.error != null) ? <div>{JSON.stringify(Products.error)}</div> : null} {/* On fera une page spéciale après */}
      {(FilteredProducts.length != 0) ? 
      // Style à regler, surtout avec le fond d'ecran
        <div className=' bg-Explore_Back bg-cover bg-repeat h-screen flex flex-col justify-between'>
        <div className='flex justify-center p-2 mt-28 '>
          <div className='w-3/4 bg-white flex flex-wrap justify-center p-3 gap-5 rounded-xl drop-shadow-xl'>
          {FilteredProducts.map(el =>(
            <Product el={el}/>
          ))
          }
          {FilteredProducts.map(el =>(
            <Product el={el}/>
          ))
          }
        </div>
        </div>
        </div>
      
      : <div> 
        {!Products.loading ? <p>Pas de produits dans cette catégorie</p> : null}</div>} 
      {/* On mets une page spéciale */}
    </div>
  )
}