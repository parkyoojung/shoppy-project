import { login, logout, onUserStateChange } from 'api/firebase';
import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'

const AuthContext = createContext();

export function AuthContextProvider({children}){

  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange(setUser);
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext(){
  return useContext(AuthContext);
}