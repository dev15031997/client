import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../pages/Usercontext';
import axios from 'axios';

function Privateroute() {
    const [ok, setOk] = useState(false)
    const [userauth, setUserauth] = useAuth();

    useEffect(() => {

        const authcheck = async () => {
            const res = await axios.get("http://localhost:8080/loginverify")

            if (res.data.ok) {
                setOk(true)
            }
            else {
                setOk(false)
            }
        }

        if (userauth?.token) authcheck();

    }, [userauth?.token])


    return (
        <div>
            {
                ok ? <Outlet /> : "loading..."
            }
        </div>
    )
}

export default Privateroute