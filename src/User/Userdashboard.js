import React from 'react'
import Usermenu from '../components/Usermenu'
import { useAuth } from '../pages/Usercontext'

const Userdashboard = () => {
    const [userauth,setUserauth]=useAuth()

  return (
    <div>
        <Usermenu/>
        <h1>User Details</h1>
        <h3><span>Name:</span>{userauth?.user?.name}</h3>
        <h3><span>Email:</span>{userauth?.user?.email}</h3>
        <h3><span>Phone:</span>{userauth?.user?.phone}</h3>
        <h3><span>Address:</span>{userauth?.user?.address}</h3>
    </div>
    
  )
}

export default Userdashboard