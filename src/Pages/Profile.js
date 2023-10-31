import React, { useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import Cookies from 'js-cookie'
import dataJson from '../data.json'
import img from '../assets/Profile_Page_Asset.png'
import { useProfile } from '../hooks/useProfile'
import { Link, useNavigate } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import Loading_Page from '../Components/Loading_Page'
import NavBar from '../Components/NavBar'
import StylisedLink from '../Components/StylisedLink'
import { Style } from '../Utils/Models'

export default function Profile() {

  // On recupere l'ID de l'user via le cookie
  const Cookie = jwtDecode(Cookies.get(dataJson.Cookie_Name))
  const Navigate = useNavigate();
    
  const Profile = useProfile(Cookie.id);
  console.log(Profile)

  
  const LogoStyle = new Style("HomeLogo","ComradeCard","/");
  const ExploreStyle = new Style("HomeExplore","Explore","/Explore");

  const onClick = () => {
    Navigate(`/Basket/${Cookie.id}`)
  }

  const onDisconnect = () => {
    Cookies.remove(dataJson.Cookie_Name);
    Navigate('/')
  }

  // Les afficher
  return (
    <div>
    {(Profile.error != null) ? Navigate(`/Error/${Profile.error}`) : null}
    {Profile.loading ? <Loading_Page/> : null}
    {Profile.check ? 
    <div className='bg-Profile_Back h-screen bg-cover'>
      <NavBar
      Logo={<StylisedLink Style={LogoStyle}/>}
      Link={<StylisedLink Style={ExploreStyle}/>}
      />
    <div className="flex justify-center"> 

      <div className=' h-9/12 mt-12 flex flex-col'>
        <div className=' w-9/12 bg-transparent flex justify-center ml-32 mt-3'>
          <img className="w-full"src={img}></img>
          </div>
        <div className='bg-white flex -mt-7 w-9/12 ml-32 justify-between p-10'> 
          <div className='h-20 border border-black mt-1 w-1/3'><button className='text-xl text-red-600' onClick={onDisconnect}> Disconnect</button></div>
          <div className='mt-5 h-44 flex flex-col justify-between'>
          <div className="bg-gray-300 font-Profile font-bold text-center  rounded w-72 p-1">Name : {Profile.data.Name}</div>
          <div className="bg-gray-300 font-Profile font-bold text-center rounded w-72 p-1">Email : {Profile.data.Email}</div>
          <div className="bg-gray-300 font-Profile font-bold text-center rounded w-72 p-1"> Score : {Profile.data.Score}</div>
          <button type="button" onClick={onClick} class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 font-Profile">Panier</button>
          </div>
        
        </div>
      </div> 
    </div>
    </div>
    : null}
    </div>
  )
}
