
import Cookies from 'js-cookie'
import dataJson from '../data.json'
import { useQuery} from "@apollo/client";
import { VerifyUser } from "../Utils/queries";
import { useState,useEffect } from 'react';

const useAuth = () => {
const [isAuth,setIsAuth] = useState({
    error : null,
    loading : false,
    data : null,
    check : false,
})

// On récupere le cookie de la page
var cookie = Cookies.get(dataJson.Cookie_Name);
if (cookie === undefined){
    cookie = "";
}

const {loading,error,data} = useQuery(VerifyUser,{variables : {cookie: cookie}})

useEffect(() => {
if(error !== undefined){
    setIsAuth({
        ...isAuth,
        error : error
    })
}
else if(loading){
    setIsAuth({
        ...isAuth,
        loading: true
    })
}
else if(data !== undefined){
    const data2 = data.VerifyUser
    if (data2.Statut === 200 ){
        setIsAuth({
            ...isAuth,
            data: data,
            check: true,  
            loading: false 
        })
    }
    else {
        setIsAuth({
            ...isAuth,
            data:  data,
            error : null,
            loading : false,
            check : false,
        })
    }
}

else setIsAuth({...isAuth})
},[data,loading,error])
    
    return isAuth;
}
export {useAuth}