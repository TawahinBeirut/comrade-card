import React, { useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import Cookies from 'js-cookie'
import dataJson from '../data.json'

export default function Profile() {

  // On recupere l'ID de l'user via le cookie
  const Cookie = jwtDecode(Cookies.get(dataJson.Cookie_Name))
  // On recuperer les données du l'utilisateur --> Creer un hoosk useProfile

  // Les afficher
  return (
    <div>Profile {Cookie.id}</div>
  )
}
