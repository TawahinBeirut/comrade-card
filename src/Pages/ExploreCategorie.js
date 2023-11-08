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
    const Products = useProductsCat(Categorie)
    // On filtre notre liste
    const FilteredProducts = useFilter(Products.data,Categorie)

  return (
    <div>
      {Products.loading ? <Loading_Page/> : null}
      {(Products.error != null) ? <div>{JSON.stringify(Products.error)}</div> : null} {/* On fera une page spéciale après */}
      {(FilteredProducts.length != 0) ? 
        <div className='bg-Explore_Back bg-cover h-screen flex flex-col justify-between'>
        <div className='flex justify-center border border-black p-2 mt-28 '>
          <div className='w-3/4 bg-white flex flex-wrap justify-center p-3 gap-5'>
          {FilteredProducts.map(el =>(
            <Product el={el}/>
          ))
          }{FilteredProducts.map(el =>(
            <Product el={el}/>
          ))
          }{FilteredProducts.map(el =>(
            <Product el={el}/>
          ))
          }
        </div>
        </div>
        </div>
      
      : <div> Pas de produits dans cette catégorie</div>} 
      {/* On mets une page spéciale */}
    </div>
  )
}