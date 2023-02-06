import React from 'react'
import { Link } from 'react-router-dom'
import { FiSmile } from 'react-icons/fi';
import login from '../../firebase'

function Navbar() {
  return (
    <header class='font-serif flex justify-between border-b bg-white font-semibold p-2'>
        <Link  to='/' className='flex items-center gap-4 text-4xl'>
          <FiSmile/>
          <h1>Home</h1>
        </Link>
      <nav class='flex items-center gap-4 font-semibold text-2xl'>
        <Link to='/cart'>Cart</Link>
        <Link  to='/product/new'>Login</Link>
        {/* <button >Login</button> */}
        <button onClick={login}>Login</button>
      </nav>
    </header>
  )
}

export default Navbar
