import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../Components/NavBar';
import { useAuth } from '../hooks/useAuth';
import StylisedLink from '../Components/StylisedLink';
import { Style } from '../Utils/Models';
import Categories from '../Categories.json'
import Categorie from './Categorie';

export default function Explore() {

    // On verifie si il est autentifié ou non
    const Navigate = useNavigate();
    const isAuth = useAuth();
    
    const LogoStyle = new Style("HomeLogo","ComradeCard","/");
    const LoginStyle = new Style("HomeLogin","Login","/Login");
    const ProfileStyle = new Style("HomeLogin","Profile",`/Profile`)

    
    // Recuperer les catégories et 
  return (
    <div>
       <div className='bg-Explore_Back bg-cover h-screen flex flex-col justify-between'>
       <NavBar 
        Logo={<StylisedLink Style={LogoStyle}/>} 
        Link2={<StylisedLink Style={isAuth.check? ProfileStyle : LoginStyle}/>}
        />

        <div className="h-1/3 bg-white w-4/6 ml-64 mb-2 rounded-2xl flex flex-wrap">
          {Categories.map(cat => <Categorie id={cat.id} Name={cat.Name}/>)}
          </div>        
       </div>
    </div>
  )
}
