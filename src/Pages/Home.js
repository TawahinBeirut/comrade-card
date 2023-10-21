import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import StylisedLink from '../Components/StylisedLink'
import Style from '../Utils/Style'
import SearchBar from '../Components/SearchBar'
import { VerifyUser } from '../Utils/queries'
import dataJson from '../data.json'
import Loading_Page from '../Components/Loading_Page'
import Cookies from "js-cookie";
import {useQuery, gql} from '@apollo/client';   


export default function Home() {


  // On vérifie si il est authentifié
  
  const Navigate = useNavigate();
  let userId = ''
  const [isAuth,setIsAuth] = useState(false)
  const [SearchWord,setSearchWord] = useState('');

  // Partie pour recuperer la data , essaie de clean code ca avec les customs hooks apres
  var cookie = Cookies.get(dataJson.Cookie_Name)
  if (cookie === undefined){
    cookie = '';
  }

  // Partie pour fetch la data
  const {loading,error,data} = useQuery(VerifyUser,{variables: {cookie: cookie}})

  useEffect(() => {
    console.log(loading,error,data)
    if (data){
    if (data.Statut === 200 ){
      setIsAuth(true)
    }
  }
  },[data])

  const onClick = (e) => {
    Navigate(`Products/${SearchWord}`);
  }

  // On importe nos styles
  const LogoStyle = new Style("HomeLogo","ComradeCard","/");
  const ExploreStyle = new Style("HomeExplore","Explore","/Explore");
  const LoginStyle = new Style("HomeLogin","Login","/Login");
  const ProfileStyle = new Style("HomeLogin","Profile",`/Profile/${userId}`)
  
  return (
    <div className='bg-indigo-500'>
      {error ? <p>Erreur : {JSON.stringify(error)}</p> : null}
      {loading ? <Loading_Page/> : null}
      {data ?
      <div className='bg-Home_Back w-screen h-screen bg-repeat'>
        
        <NavBar 
        Logo={<StylisedLink Style={LogoStyle}/>} 
        Link={<StylisedLink Style={ExploreStyle}/>} 
        Link2={<StylisedLink Style={isAuth? ProfileStyle : LoginStyle}/>}
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
