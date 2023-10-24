import { useQuery } from '@apollo/client';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loading_Page from '../Loading_Page';
import { Login as LoginQuery } from '../../Utils/queries';
import Cookies from 'js-cookie';
import dataJson from '../../data.json';
import { useEffect } from 'react';

export default function Login({Email,Password}) {

   const {loading,error,data} = useQuery(LoginQuery,{variables:{email:Email,password:Password}})
   const Navigate = useNavigate();

   useEffect(() => {
    console.log(data);
    if (data !== undefined){
    const data2 = data.Login
    if (data2.Statut == 0){
        Navigate('/Error/Login');
    }
    else{
        Cookies.set(dataJson.Cookie_Name,data2.Cookie);
        Navigate('/');
    }}
  },[data])
  return (
    <div>
    {loading ? <Loading_Page/> : null}
    {(error !== undefined) ? <Link to="/Login">Une erreur est advenue {JSON.stringify(error)}, veuillez réessayez</Link> : <p>Ca marche</p>}
    </div>
    )
  }
