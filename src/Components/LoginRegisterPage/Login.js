import { useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import Loading_Page from '../Loading_Page';
import { Login as LoginQuery } from '../../Utils/queries';

export default function Login({Email,Password}) {

   const {loading,error,data} = useQuery(LoginQuery,{variables:{email:Email,password:Password}})
  // const loading = true;
  // const   error = undefined
  return (
    <div>
    {loading ? <Loading_Page/> : null}
    {(error !== undefined) ? <Link to="/Login">Une erreur est advenue {JSON.stringify(error)}, veuillez réessayez</Link> : <p>Ca marche</p>}
    </div>
    )
  }
