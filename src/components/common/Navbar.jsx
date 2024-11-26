import React from 'react'
import { SignUp } from '../../api/auth'

const Navbar = () => {

    const handleSignUp = async () => {
        await SignUp()
    }

  return (
    <div>
        <div>
            Logo
        </div>
        <div>
            <button onClick={handleSignUp}>SignUp</button>
            <button>Login</button>
        </div>
    </div>
  )
}

export default Navbar