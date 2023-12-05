import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
  const navigate = useNavigate()

  const [user, setuser] = useState({
    email: '',
    newpassword: '',
    secretanswer:''
  })

  const formData = (e) => {
    const { name, value } = e.target
    setuser(() => {
      return {
        ...user,
        [name]: value
      }
    })
  }

  const passwordreset = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/forgotpassword', {
      email: user.email,
      newpassword: user.newpassword,
      secretanswer:user.secretanswer
    })

    if (response.status === 200) {
      navigate('/login')
    }
    else {
      alert('Account reset Failed')

      setuser(() => {
        return {
          email: '',
          newpassword: '',
          secretanswer:''
        }
      })
    }
  }

  return (
    <div className='login'>
      <form onSubmit={passwordreset}>
        <input type="email" placeholder='Enter your Email' name="email" value={user.email} onChange={formData} />
        <input type="text" placeholder='Enter Secret Answer' name="secretanswer" value={user.secretanswer} onChange={formData} />
        <input type="password" placeholder='Enter your New password' name="newpassword" value={user.newpassword} onChange={formData} />
        <button type='submit'>Reset Password</button>
      </form>
    </div>
  )
}

export default ForgotPassword;

