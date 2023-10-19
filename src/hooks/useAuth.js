import { useState } from "react"
import { useCookies } from "react-cookie";

export default function useAuth(){

    // Requete graphQl pour récuperer l'id du gars + set son token
    const cookie = useCookies();
    const value = (Object.keys(cookie[0]) !== 0)? cookie[0].caca : false;
    
    return value
}
