import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useProductsCat } from '../hooks/useProductsCat';
import useFilterProduct from '../hooks/useFilterProduct';
import Loading_Page from '../Components/Loading_Page';
import ErrorPage from './ErrorPage';
import Product from '../Components/Product';
import NavBar from '../Components/NavBar';

export default function Products() {
  
  const {Name} = useParams();
  const Navigate = useNavigate();

  const Products = useProductsCat();

  const FilteredProducts = useFilterProduct(Products.data,Name)
  return (
    <div>
      {Products.loading ? <Loading_Page/> : null}
      {Products.error ? <p>{JSON.stringify(Products.error)}</p> : null}
      {(FilteredProducts.length != 0) ? 
        <div className=' bg-Explore_Back bg-cover bg-repeat flex flex-col justify-between'>
        <div className='flex justify-center p-2 mt-28 '>
          <div className='w-3/4 bg-white flex flex-wrap justify-center p-3 gap-5 rounded-xl drop-shadow-xl'>
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
      : <div>{Navigate('Error/NoProduct')}</div>}
    </div>
  )
}
