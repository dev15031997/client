import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom'
import { useAuth } from './Usercontext';

const Login = () => {
  const navigate = useNavigate()

  const [user, setuser] = useState({
    email: '',
    password: '',
  })

  const [userauth,setUserauth]=useAuth();

  const formData = (e) => {
    const { name, value } = e.target
    setuser(() => {
      return {
        ...user,
        [name]: value
      }
    })
  }

  const login = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/login', {
      email: user.email,
      password: user.password,
    })

    if (response.status === 200) {
      setUserauth({...userauth,user:response.data.user,token:response.data.token})
      localStorage.setItem("auth",JSON.stringify(response.data))
      navigate('/')
    }
    else {
      alert('Login Failed')

      setuser(() => {
        return {
          email: '',
          password: '',
        }
      })
    }
  }

  return (
    <div className='login'>
      <form onSubmit={login}>
        <input type="email" placeholder='Enter your Email' name="email" value={user.email} onChange={formData} />
        <input type="password" placeholder='Enter your password' name="password" value={user.password} onChange={formData} />
        <button type='submit'>Login</button>
        <NavLink to={"/forgotpassword"} className={"forgot"}>Forgot Password?</NavLink>
      </form>
    </div>
  )
}

export default Login