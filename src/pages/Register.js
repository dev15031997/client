import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()

    const [user, setuser] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        secretanswer: '',
        address: ''
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

    const register = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:5000/register', {
            name: user.name,
            email: user.email,
            password: user.password,
            phone: user.phone,
            secretanswer: user.secretanswer,
            address: user.address
        })

        if (response.status === 200) {
            navigate('/login')
        }
        else {
            alert('Registration Failed')

            setuser(() => {
                return {
                    name: '',
                    email: '',
                    password: '',
                    phone: '',
                    secretanswer: '',
                    address: ''
                }
            })
        }
    }

    return (
        <div className='register'>
            <form onSubmit={register}>
                <input type="text" placeholder='Enter your Name' name="name" value={user.name} onChange={formData} />
                <input type="email" placeholder='Enter your Email' name="email" value={user.email} onChange={formData} />
                <input type="password" placeholder='Enter your password' name="password" value={user.password} onChange={formData} />
                <input type="number" placeholder='Enter your Phone Number' name="phone" value={user.phone} onChange={formData} />
                <input type="text" placeholder='Enter your Secret Answer' name="secretanswer" value={user.secretanswer} onChange={formData} />
                <input type="text" placeholder='Enter your Address' name="address" value={user.address} onChange={formData} />
                <button type='submit'>Signup</button>
            </form>
        </div>
    )
}

export default Register