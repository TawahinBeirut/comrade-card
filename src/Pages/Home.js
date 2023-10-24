import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import StylisedLink from '../Components/StylisedLink'
import {Style} from '../Utils/Models'
import SearchBar from '../Components/SearchBar'
import Loading_Page from '../Components/Loading_Page'
import dataJson from '../data.json'
import { useAuth } from '../hooks/useAuth'
import ErrorPage from '../Pages/ErrorPage'
import Cookies from 'js-cookie'


export default function Home() {


  // On vérifie si il est authentifié
  
  const Navigate = useNavigate();
  const [SearchWord,setSearchWord] = useState('');
  
  const isAuth = useAuth();
  console.log(isAuth)

  const onClick = (e) => {
    Navigate(`Products/${SearchWord}`);
  }


  // On importe nos styles
  const LogoStyle = new Style("HomeLogo","ComradeCard","/");
  const ExploreStyle = new Style("HomeExplore","Explore","/Explore");
  const LoginStyle = new Style("HomeLogin","Login","/Login");
  const ProfileStyle = new Style("HomeLogin","Profile",`/Profile`)
  
  return (
    <div className='bg-indigo-500'>
      {isAuth.error ? <ErrorPage error={isAuth.error}/> : null}
      {isAuth.loading ? <Loading_Page/> : null}
      {isAuth.data ?
      <div className='bg-Home_Back w-screen h-screen bg-repeat bg-cover'>
        
        <NavBar 
        Logo={<StylisedLink Style={LogoStyle}/>}  
        Link={<StylisedLink Style={ExploreStyle}/>} 
        Link2={<StylisedLink Style={isAuth.check? ProfileStyle : LoginStyle}/>}
        />
        
        <div className="flex justify-center align-middle w-full h-auto mt-80">
          <div className="-ml-5">
            <SearchBar value={SearchWord} onChange={(e) => setSearchWord(e.target.value)} onClick={onClick} text="Recherchez des produits ... "/>
          </div>
          </div>
        
        {/* Texte de Présentation (Optionnel / a voir)
         <div className='text-white text-center font-SearchBar w-1/2 ml-96'>
          <h1 className='font-extrabold -ml-10 mt-3'>{dataJson.HomeTextTitle}</h1>
          <p className='mt-12 font-semibold'>{dataJson.HomeText}</p>
        </div> */}
      </div>
      : null
      }
    </div>
  )
}
