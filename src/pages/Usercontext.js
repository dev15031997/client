import React, { useState, useContext, createContext, useEffect } from 'react'
import axios from 'axios';

const Authcontext = createContext();

const Usercontext = ({ children }) => {
  const [userauth, setUserauth] = useState({
    user: null,
    token: ''
  })

  // Default authorization
  axios.defaults.headers.common["Authorization"]=userauth?.token 

  useEffect(() => {
    const userData = localStorage.getItem('auth')
    if (userData) {
      const parsedData = JSON.parse(userData)
      // setUserauth({ ...userauth, user: parsedData.user, token: parsedData.token })
      setUserauth(prevState => ({ ...prevState, user: parsedData.user, token: parsedData.token }));
    }
  }, [])

  return (
    <>
      <Authcontext.Provider value={[userauth, setUserauth]}>
        {children}
      </Authcontext.Provider>
    </>
  )
}

// Custom Hook
const useAuth = () => useContext(Authcontext);

export { useAuth, Usercontext };