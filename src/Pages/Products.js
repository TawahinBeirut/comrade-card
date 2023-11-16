import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductsCat } from '../hooks/useProductsCat';
import useFilterProduct from '../hooks/useFilterProduct';
import Loading_Page from '../Components/Loading_Page';

export default function Products() {
  
  const {Name} = useParams();

  const Products = useProductsCat();

  const FilteredProducts = useFilterProduct(Products.data,Name)
  return (
    <div>
      {Products.loading ? <Loading_Page/> : null}
      {Products.error ? <p>{JSON.stringify(Products.error)}</p> : null}
      {(FilteredProducts.length != 0) ? 
      <div className='bg-black'>
        <h1 className='text-white'>CACA </h1>
      </div> 
      : <div> Pas de produits</div>}
    </div>
  )
}
