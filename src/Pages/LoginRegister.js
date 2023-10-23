import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Cookies from 'js-cookie';
import dataJson from '../data.json'
import NavBar from '../Components/NavBar';
import {Style} from '../Utils/Models';
import StylisedLink from '../Components/StylisedLink';
import Form from '../Components/LoginRegisterPage/Form';

export default function LoginRegister() {

 // Premiere Etape : Supprimer les cookies de la session courante
  Cookies.remove(dataJson.Cookie_Name);

 // Deuxieme Etape : Determiner si il s'agit d'un Login ou pas
   const Nature = useLocation().pathname
   const LoginCheck = (Nature === "/Login") ? true : false;
  
  // On definit nos formulaires en fonction
  const LoginForm = {Nature : "Login", Email : "",Password : ""};
  const RegisterForm = {...LoginForm,Name : "",Nature : "Register"}


  const DefaultForm = (LoginCheck) ? LoginForm : RegisterForm
  const [FormType,setFormType] = useState(DefaultForm);
  
  
  // Un evenement OnChange pareil pour les 2 types de formulaire
  // Un evenement OnClick differents , l'un crée un compte et l'autre se connecte
  // Selon la Nature de la Page => Proposer un formulaire Different => Composant Form
  


  const LogoStyle = new Style("HomeLogo","ComradeCard","/");
  
  return (
    <div className="bg-LoginBack bg-cover h-screen">
      <div className="ml-44 flex justify-center"><NavBar Logo={<StylisedLink Style={LogoStyle}/>}/></div>
      <div className="flex justify-center align-middle">
        <div className=' mt-20 w-96 h-96'>
          <Form FormType={FormType} onClick="" onChange=""/>
        </div>
      </div>
    </div>
  )
}
