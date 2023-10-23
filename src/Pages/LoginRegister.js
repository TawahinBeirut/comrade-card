import React from 'react'
import { useLocation } from 'react-router-dom'
import Cookies from 'js-cookie';
import dataJson from '../data.json'
import img from '../assets/Login_Background.png'
import NavBar from '../Components/NavBar';
import Style from '../Utils/Style';
import StylisedLink from '../Components/StylisedLink';

export default function LoginRegister() {

  // Premiere Etape : Supprimer les cookies de la session courante
  Cookies.remove(dataJson.Cookie_Name);

  // Deuxieme Etape : Determiner si il s'agit d'un Login ou pas
  const Nature = useLocation().pathname
  const LoginCheck = (Nature === "/Login") ? true : false;

  // 3eme Etape : Coder les Differents Evenements pour la souscription au forulaire 
  // Un evenement OnChange pareil pour les 2 types de formulaire
  // Un evenement OnClick differents , l'un crée un compte et l'autre se connecte
  // Selon la Nature de la Page => Proposer un formulaire Different => Composant Form
  


  const LogoStyle = new Style("HomeLogo","ComradeCard","/");
  
  return (
    <div className="bg-LoginBack bg-cover h-screen">
      <div className="ml"><NavBar Logo={<StylisedLink Style={LogoStyle}/>}/></div>
      <div className='border border-white'></div>
    </div>
  )
}
