import React from 'react'

export default function Form({FormType,onClick,onChange}) {
  return (
    <div className='border border-white m-9 w-4/5 h-4/5'>
      {(FormType.Name !== undefined) ? 
      <input type='text' value={FormType.Name} className=''></input> 
      : null }
    </div>
  )
}
