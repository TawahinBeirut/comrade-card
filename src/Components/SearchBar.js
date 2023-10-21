import React from 'react'

export default function ({value,text,onClick,onChange}) {

  return (
    <div className="h-14 shadow-sm rounded-xl bg-pink-600">
        <input value={value} onChange={onChange} className="h-full rounded-lg w-96 text-center font-SearchBar"type='text' placeholder={text}/>
        <button className='w-14' onClick={onClick}><span class="material-symbols-outlined">travel_explore</span></button>
    </div>
  )
}
