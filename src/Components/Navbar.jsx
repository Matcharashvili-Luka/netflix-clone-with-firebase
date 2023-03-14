import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

function Navbar() {
  const[scrollY, setScrollY] = useState(false);
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  // to change navbar bg keep track on scrolling
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 550){ setScrollY(true) }
      else{ setScrollY(false) }
    })
  });

  // just logout function
  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  // return navbar
  return (
    <div 
      className={ scrollY ? 
        'flex items-center justify-between p-4 z-[100] w-full fixed bg-black/80' : 
        'flex items-center justify-between p-4 z-[100] w-full fixed' }
    >
      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </Link>

{/* if user is logged in return this element (basicly changes navbar)*/}
      {user?.email ? (
        <div>
          <Link to='/account'>
            <button className='text-white pr-4'>Account</button>
          </Link>
          <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white' onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : ( 
// if user is not logged in retrun this element (basicly changes navbar)
        <div>
          <Link to='/login'>
            <button className='text-white pr-4'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar