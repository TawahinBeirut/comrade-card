import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Explore() {

    const Navigate = useNavigate();
    const test = () => {
        Navigate('')
    }
  return (
    <div>
        <h1>Explore</h1>
        <button onClick={test}>Essai</button>
    </div>
  )
}
