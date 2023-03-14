import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const ProtectedRoute = ({ children }) => {
    const { user } = UserAuth();

    if(!user){
        return <Navigate to='/' />
    }else{
        return children;
    }
}

export default ProtectedRoute

// THIS IS THE PROTECTED ROUTE TO NOT BE ABLE TO MOVE ON ACCOUNT PAGE UNLESS U ARE LOGGED IN (returns back to home page)