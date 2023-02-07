import React from 'react'

function User({user : {photoURL, displayName}}) {
  return (
    <div className='flex items-center shrink-0'>
      <img className='w-10 h-10 mr-2 rounded-full' src={photoURL} alt={displayName} />
      {/* <span className='hidden md:block text-xl'>{displayName}</span> */}
    </div>
  )
}

export default User