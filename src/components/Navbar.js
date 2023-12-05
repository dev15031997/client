import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../pages/Usercontext'

const Navbar = () => {
  const [userauth,setUserauth]=useAuth();
  
  const logout=()=>{
    setUserauth({...userauth,user:null,token:null})
    localStorage.removeItem('auth')
  }

    return (
        <main>
            <nav className='main-nav'>
                <ul>
                    <li><NavLink to={"/"}>Ecommerce</NavLink></li>
                  {
                    userauth?.user?(
                        <div>
                            <li><NavLink to={`/dashboard/${userauth?.user?.role===1 ? "admin":"user"}`}>Dashboard</NavLink></li>
                            <li><NavLink onClick={logout} to={"/login"}>Logout</NavLink></li>
                            <li><NavLink to={"/cart"}>Cart</NavLink></li>
                        </div>
                    ):(
                        <div>
                            <li><NavLink to={"/register"}>Signup</NavLink></li>
                            <li><NavLink to={"/login"}>Login</NavLink></li>
                            <li><NavLink to={"/cart"}>Cart</NavLink></li>
                        </div>
                    )
                  }
                </ul>
            </nav>
        </main>
    )
}

export default Navbar

