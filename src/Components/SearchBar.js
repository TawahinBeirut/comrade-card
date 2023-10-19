import React from 'react'

export default function ({text,onClick}) {

  return (
    <div className="h-14 shadow-sm rounded-xl bg-pink-600">
      {/* Chercher une google Font stylée pour le placeholder */}
        <input className="h-full rounded-lg w-96 text-center"type='text' placeholder={text}/>
        <button className='w-14' onClick={onClick}><span class="material-symbols-outlined">travel_explore</span></button>
    </div>
  )
}
