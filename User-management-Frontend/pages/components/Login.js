import React from 'react'
import NavBar from './NavBar'
import { signIn } from 'next-auth/react'

const Login = () => {
  return (
    <div>
        <NavBar/>
        <div className='container mx-auto my-8'>  
            <div className='h-12 '>
                <button onClick={signIn} className='rounded bg-blue-600 text-white px-6 py-2 font-semibold'> SignIn</button>
            </div>
        </div>
    </div>
  )
}

export default Login