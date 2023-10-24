import { useMutation, useQuery } from '@apollo/client'
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loading_Page from '../Loading_Page';
import { Register as RegisterMutation } from '../../Utils/queries';

export default function Register({Name,Email,Password}) {

    // Chercher si l'email existe deja ou non
    const Navigate = useNavigate()
    const [register,{ data, loading, error }]= useMutation(RegisterMutation)
    
    // Analyser la data pour verifier le succés de l'operation  
    useEffect(() => {
        register({variables:{name:Name,email:Email,password:Password}})
        console.log(loading)
        if (data !== undefined){
        if (data.Statut == 0){
            Navigate('/Error')
        }
        else{
            Navigate('/Login');
            alert('Registration worked !')
        }
    }},[])
    
  return (
    <div>
    {loading ? <Loading_Page/> : null}
    {(error !== undefined) ? <Link to="/Register">Une erreur est advenue {JSON.stringify(error)}, veuillez réessayez</Link> : <p>Ca marche</p>}
    
    </div>
  )
}
