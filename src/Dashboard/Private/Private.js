import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase';
const Private = ({ children }) => {
    const [user, load] = useAuthState(auth);
    const location = useLocation();
    if (load) {
        return <p>Loading</p>
    }
    if (!user) {
        return <Navigate to='/' state={{ from: location }} replace ></Navigate >
    }
    return children;
};

export default Private;