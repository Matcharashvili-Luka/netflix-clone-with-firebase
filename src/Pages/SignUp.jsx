import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, signUp } = UserAuth();
    const navigate = useNavigate()
  
    // firebase signup function (async)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signUp(email, password);
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <>
        <div className='w-full h-screen'>
            <img
                className='hidden sm:block absolute w-full h-full object-cover max-w-[1620px]'
                src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
                alt='/'
            />
            {/* overlay */}
            <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>

            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full z-50'> 
                <div className='max-w-[450px] h-[500px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold'>Sign Up</h1>
                        <form className='w-full flex flex-col py-4' onSubmit={handleSubmit}>
                            <input 
                                className='p-3 my-3 bg-gray-700 rounded' 
                                type="email" 
                                placeholder='Email' 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input 
                                className='p-3 my-3 bg-gray-700 rounded' 
                                type="password" 
                                placeholder='Password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className='bg-red-600 py-3 my-6 rounded font-bold hover:bg-red-700 duration-100'>Sign Up</button>

                            <div className='flex justify-between items-center text-sm text-gray-600'>
                                <p><input className='mr-1' type="checkbox"/> Remember me</p>
                                <p>Need Help?</p>
                            </div>

                            <p className='py-8'>
                                <span className='text-gray-600 mr-2'>Already subscribed to Netflix?</span> 
                                <Link to='/login'>
                                    Sign In
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignUp