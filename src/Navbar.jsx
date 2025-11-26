import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className=' flex justify-center  gap-5'>

            <div>
                <Link to="/">Home</Link>
            </div>

            <div>
                <Link to="/login">Login</Link>
            </div>


        </div>
    )
}

export default Navbar