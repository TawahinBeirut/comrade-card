import { useEffect, useState } from "react"
import Cookies from "js-cookie";
import {useQuery, gql} from '@apollo/client';   
import dataJson from '../data.json'

const VerifyUser = gql`query($cookie: String!){
    VerifyUser(Cookie: $cookie) {
      Statut,data {
        Email
      }
    }
  }`


export default function useAuth(){

    const [cookie,setCookie] = useState(null);
    
    let result = Cookies.get(dataJson.Cookie_Name);

    const {loading,error,data} = useQuery(VerifyUser,{variables: {cookie: result}});
    
    // On récuperere le cookie
    useEffect(({loading,error,data}) =>{
        if(loading) return dataJson.Loading;
        if (error) return dataJson.Error;
        if (data){
            if (data.Statut === 200){
            setCookie(data.Cookie);
            return cookie;
            }
            else {return dataJson.Error}
        }
    },[])

    // Requete graphQl pour récuperer l'id du gars + set son token

}
