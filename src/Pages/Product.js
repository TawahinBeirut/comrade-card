import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '../hooks/useProduct';
import Loading_Page from '../Components/Loading_Page';
import Sellor from '../Components/ProductPage/Sellor';
import CategorieComp from '../Components/ProductPage/CategorieComp';
import Delete from '../Components/ProductPage/Delete';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';
import dataJson from '../data.json'
import LoginButton from '../Components/ProductPage/LoginButton';
import AddBasket from '../Components/ProductPage/AddBasket';

export default function Product() {

  // Recuperer l'id du produit --> Afficher Le produit si, c'est le notre pouvoir le supprimer / jsp 
  
  let {id} = useParams();
  id = parseInt(id);

  const Product = useProduct(id);

  // On récupere l'id de l'user via son cookie
  const cookieCheck = Cookies.get(dataJson.Cookie_Name);
  let Userid = "";
  if(cookieCheck != undefined){
    Userid = jwtDecode(cookieCheck)
  }

  return (
    <div>
    {Product.loading ? <Loading_Page/> : null }
    {(Product.error != null) ? <div>{JSON.stringify(Product.error)}</div> : null} {/* On fera une page spéciale après */}
    {/* Faire le style après, revoir le design */}
    {Product.data ?
     <div className='bg-blue-600 flex flex-col h-screen justify-center'>
      <div className='flex justify-center'>
      <div className='bg-white border border-black flex flex-col justify-center p-2 gap-5 text-center'>
        <h1 className='text-3xl font-bold'>{Product.data[0].Name}</h1>
        <p className='text-xl font-semibold'>{Product.data[0].Description}</p>
        <p className='text-xl font-semibold '>{(Product.data[0].Statut == 1) ? "Dispo" : "Vendu"}</p>
        <Sellor id={Product.data[0].SellerId}/>

        <CategorieComp id={Product.data[0].idCategorie}/>
        {(cookieCheck == undefined) ? <LoginButton/> : 
        <div>{(Userid == Product.data[0].SellerId) ? <Delete id={Userid}/> : <AddBasket id={Userid}/>}</div>}
      </div>
      </div>
     </div> 
     : null}
    </div>
  )
}
