import React from 'react'
import { useAuth } from './Usercontext'

const Home = () => {
  const [userauth,setUserauth]=useAuth();

  return (
    <div>
      {JSON.stringify(userauth,null,4)}    {/* JSON.stringify(userauth, ['username', 'email'], 4)  ...so null would put all the values of object without any modification  */}
      
    </div>
  )
}

export default Home