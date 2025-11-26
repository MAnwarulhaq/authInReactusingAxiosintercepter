import React, { useState } from 'react'
import { api } from './AxiosIntercepter'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handlelogin() {
        const payload = {
            email,
            password
        }

        api.post("/login", payload)
            .then((res) => {
                if (res) {
                    console.log(res)
                    localStorage.setItem("token", res.data.access_token)

                    alert("Login Successful")
                }
                // console.log("Login Response:", res)
                // Token ko stringify mat karo

            })
            .catch((error) => {
                alert("Login Failed")
                console.log("Login Error:", error.response?.data || error.message)
            })

        // Clear input fields
        setEmail("")
        setPassword("")
    }

    return (
        <div className='flex flex-col items-center justify-center m-10'>
            <h1 className='bg-amber-600 text-2xl font-bold'>Handle Authorization</h1>
            <h1> "email": "john@mail.com",
                "password": "changeme"</h1>
            <div className='bg-sky-500 w-70 p-5 rounded-2xl shadow-2xl'>
                <p className='text-white font-semibold mb-4'>Login Page</p>

                <div className='mb-4'>
                    <p className='text-white'>Email</p>
                    <input
                        type="email"
                        placeholder='Enter Your Email'
                        className='border shadow-md h-8 w-60 bg-white rounded-md p-3'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='mb-4'>
                    <p className='text-white'>Password</p>
                    <input
                        type="password"
                        placeholder='Enter Your Password'
                        className='border shadow-md h-8 w-60 bg-white rounded-md p-3'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    onClick={handlelogin}
                    className='bg-blue-700 rounded-md px-4 py-1 cursor-pointer text-white'
                >
                    Login
                </button>
            </div>
        </div>
    )
}

export default Login
