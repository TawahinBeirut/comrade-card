import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// A styliser Bien Sur

export default function ErrorPage() {

  
  const {Error} = useParams()

  const Navigate = useNavigate();
  

  let error;
  switch(Error){
    case 'Login' : error = "Mot de Passe ou Nom d'Utilisateur Incorrect, veuillez Reessayer"
                  break;
    case 'Email' : error = "Email déja utilisé"
                break;
    default: error= `Erreur non reconnue : ${JSON.stringify(Error)} Rendez vous à la page d'accueil`
  }

  useEffect(() => {
    Navigate('/');
    alert(error)
  },[])

  return (
    <div><p>Erreur : {error}</p></div>
  )
}
