import { useMutation, useQuery } from '@apollo/client';
import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import Login from '../Components/LoginRegisterPage/Login';
import Register from '../Components/LoginRegisterPage/Register';

export default function FormTreat() {

    const Params = useParams()

  return (
    <div className='
    bg-indigo-500'>{(Params.Nature == "Login") ? 
    <Login Email={Params.Email} Password={Params.Password}/> 
    : 
    <Register Name={Params.Name} Email={Params.Email} Password={Params.Password}/>}
    </div>
  )
}
