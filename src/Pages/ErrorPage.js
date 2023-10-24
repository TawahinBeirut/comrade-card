import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// A styliser Bien Sur

export default function ErrorPage() {
  const {Error} = useParams()
  console.log(Error)
  let error;
  switch(Error){
    case 'Login' : error = <Link to="/Login">"Mot de Passe ou Nom d'Utilisateur Incorrect, veuillez Reessayer"</Link>;
                  break;
    case 'Email' : error = <Link to='/Register'>Email déja utilisé</Link>
                break;
    default: error=<Link to="/"> Erreur non reconnue, Rendez vous à la page d'accueil</Link>
  }

  return (
    <div><p>Erreur : {error}</p></div>
  )
}
