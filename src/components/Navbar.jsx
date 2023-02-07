import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiSmile } from 'react-icons/fi';
import {login, logout, onUserStateChange} from '../api/firebase'
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from 'pages/context/AuthContext';

function Navbar() {
  const { user, login, logout } = useAuthContext();


  return (
    <header class='font-serif flex justify-between border-b bg-white font-semibold p-2'>
        <Link  to='/' className='flex items-center gap-4 text-4xl'>
          <FiSmile/>
          <h1>Home</h1>
        </Link>
      <nav class='flex items-center gap-4 font-semibold text-2xl'>
        <Link to='/cart'>Cart</Link>
        <Link  to='/product/new'>New</Link>
        { !user && <Button text={'login'} onClick={login} />}
        { user && <Button text={'logout'} onClick={logout} />}
        { user && <User user={user}/>}
        

      </nav>
    </header>
  )
}

export default Navbar
