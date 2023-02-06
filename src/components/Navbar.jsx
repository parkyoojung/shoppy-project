import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiSmile } from 'react-icons/fi';
import {login, logout, onUserStateChange} from '../api/firebase'

function Navbar() {
  const [user, setUser] = useState();

  const handleLogin = () => {
    login().then(setUser);
  } 
  const handleLogout = () => {
    logout().then(setUser);
  } 

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    })
  }, [])



  return (
    <header class='font-serif flex justify-between border-b bg-white font-semibold p-2'>
        <Link  to='/' className='flex items-center gap-4 text-4xl'>
          <FiSmile/>
          <h1>Home</h1>
        </Link>
      <nav class='flex items-center gap-4 font-semibold text-2xl'>
        <Link to='/cart'>Cart</Link>
        <Link  to='/product/new'>New</Link>
        {/* <button >Login</button> */}
        { !user && <button onClick={handleLogin}>Login</button>}
        { user && <button onClick={handleLogout}>Logout</button>}
        

      </nav>
    </header>
  )
}

export default Navbar
