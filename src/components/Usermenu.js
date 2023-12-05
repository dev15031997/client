import React from 'react'
import { NavLink } from 'react-router-dom'


const Usermenu = () => {
  return (
    <div>
        <NavLink to={"/dashboard/user/orders"}>Orders</NavLink>
        <NavLink to={"/dashboard/user/edit"}>Edit Profile</NavLink>
    </div>
  )
}

export default Usermenu;