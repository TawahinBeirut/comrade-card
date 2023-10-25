import React, { useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import Cookies from 'js-cookie'
import dataJson from '../data.json'
import img from '../assets/Profile_Page_Asset.png'

export default function Profile() {

  // On recupere l'ID de l'user via le cookie
  const Cookie = jwtDecode(Cookies.get(dataJson.Cookie_Name))
  // On recuperer les données du l'utilisateur --> Creer un hoosk useProfile

  // Les afficher
  return (
    <div className="bg-Profile_Back h-screen bg-cover flex justify-center">
      <div className=' border-4 border-black h-full w-7/12'>
        <div className='bg-transparent flex'>
          <img className=""src={img}></img>
          <div className='border border-white h-8 mt-60 w-full bg-white'></div>
          </div>
        <div className='bg-white -mt-7'>
          <div className=' mt-7'>
            <div className='border border-black'> test</div>
            </div>
        </div>
      </div> 
    </div>
  )
}
