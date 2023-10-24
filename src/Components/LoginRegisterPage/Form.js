import React from 'react'
import { Link } from 'react-router-dom'

export default function Form({FormType,onClick,onChange}) {

  const InputStyle = "h-10 rounded-xl border border-black ring-offset-2 ring-2 ring-red-800 text-center font-SearchBar focus:ring-2 ring-offset-transparent"
  const toLink = (FormType.Nature === "Login") ? "/Register" : "/Login";
  const TextLink = (FormType.Nature !== "Login") ? "Already registered? Log in" : "No account? Please register"

  console.log(FormType)
  return (
    <div className='m-9 w-4/5 h-4/5 flex flex-col text-center justify-around'>

      <h1 className='text-white font-Logo text-5xl'>{FormType.Nature}</h1>
      {(FormType.Name !== undefined) ? 
      <input type='text' name='Name' onChange={onChange} value={FormType.Name} className={InputStyle} placeholder='Name'></input>
      : null }
      {(FormType.Email !== undefined) ? 
      <input type='text' name='Email'  onChange={onChange} value={FormType.Email} className={InputStyle} placeholder='Email'></input>
      : null}
      {(FormType.Password !== undefined) ? 
      <input type='text' name='Password' value={FormType.Password} onChange={onChange} className={InputStyle}placeholder='Password'></input>
      : null}
      <button className=' rounded-3xl text-white h-10 bg-gradient-to-r from-red-600 via-purple-900 to-pink-300 font-SearchBar text-xl'>{FormType.Nature}</button>


      <Link to={toLink} className='text-white decoration-4 decoration-white font-SearchBar' onClick={async() => {await new Promise(r => setTimeout(r,100)); window.location.reload()}}>{TextLink}</Link>
    </div>
  )
}
