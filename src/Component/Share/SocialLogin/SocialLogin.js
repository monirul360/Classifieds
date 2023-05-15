import React from 'react';
import auth from '../../../Firebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, gouser, goloading, goerror] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if (gouser) {
        navigate("/")
    }
    return (
        <>
            <div class="socialLogin">
                <h5>Login Or Register with Social</h5>
                <div className="eror-container">
                    {goloading && <h5 style={{ color: "#9c00ff" }}>Loading....</h5>}
                    <h5 className='text-danger fw-bold'>{goerror?.message}</h5>
                </div>
                <button onClick={() => signInWithGoogle()} to="/" class="gp"><i class="fa fa-google-plus" aria-hidden="true"></i>Continue with Google</button>
            </div>
        </>
    );
};

export default SocialLogin;