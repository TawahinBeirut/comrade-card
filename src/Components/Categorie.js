import React from 'react'
import img1 from '../assets/Automobile_Icon.png'
import img2 from '../assets/Housing_Icon.png'
import img3 from '../assets/Clothes_Icon.png'
import img4 from '../assets/Provisions_Categories_Icon.png'
import img5 from '../assets/Books_Icon.png'

export default function Categorie({id,Name,onClick}) {
  const test = [img1,img2,img3,img4,img5]
  const img = test[id-1]


  return (
    <div className=' h-5/6 mt-6 w-2/12'>
      <h1 className='text-center font-SearchBar'>{Name}</h1>
      <div className='w-9/12 ml-6'><img src={img} className='rounded-xl' alt={Name}></img></div>
      <button id={id} onClick={onClick} className='text-white bg-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-900 border-2 border-black ml-12 mt-3'>Visiter</button>
    </div>
  )
}
