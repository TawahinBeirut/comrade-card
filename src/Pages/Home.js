import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import StylisedLink from '../Components/StylisedLink'
import Style from '../Utils/Style'

export default function Home() {

  // On importe nos styles
  const LogoStyle = new Style("HomeLogo","ComradeCard","/");
  const ExploreStyle = new Style("HomeExplore","Explore","/Explore");
  const LoginStyle = new Style("HomeLogin","Login","/Login");

  
  // On vérifie si il est authentifié

  return (
    <div className='bg-indigo-500'>
      <div className='bg-Home_Back w-screen h-screen bg-repeat'>
        
        <NavBar 
        Logo={<StylisedLink Style={LogoStyle}/>} 
        Link={<StylisedLink Style={ExploreStyle}/>} 
        Link2={<StylisedLink Style={LoginStyle}/>}
        />


      </div>
    </div>
  )
}
