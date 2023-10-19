import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import StylisedLink from '../Components/StylisedLink'
import Style from '../Utils/Style'
import SearchBar from '../Components/SearchBar'
import useAuth from '../hooks/useAuth'
import { useCookies } from 'react-cookie'

export default function Home() {


  // On vérifie si il est authentifié
  const userId = ''
  const isAuth = useAuth();
  useEffect(() => {
    console.log(isAuth)
  },[])
  

  // On importe nos styles
  const LogoStyle = new Style("HomeLogo","ComradeCard","/");
  const ExploreStyle = new Style("HomeExplore","Explore","/Explore");
  const LoginStyle = new Style("HomeLogin","Login","/Login");
  const ProfileStyle = new Style("HomeLogin","Profile",`/Profile/${userId}`)


  return (
    <div className='bg-indigo-500'>
      <div className='bg-Home_Back w-screen h-screen bg-repeat'>
        
        <NavBar 
        Logo={<StylisedLink Style={LogoStyle}/>} 
        Link={<StylisedLink Style={ExploreStyle}/>} 
        Link2={<StylisedLink Style={LoginStyle}/>}
        />
        
        <div className="flex justify-center align-middle w-full h-auto mt-80">
          <div className="-ml-5">
            <SearchBar text="Recherchez des produits ... "/>
          </div>
          </div>
        
        {/* Faire le Texte de Présentation du SITE */}
        <div className=''>

        </div>
      </div>
    </div>
  )
}
