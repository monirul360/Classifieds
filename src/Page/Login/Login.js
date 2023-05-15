import React from 'react';
import Tittle from '../../Component/Share/Tittle/Tittle';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../../Component/Share/SocialLogin/SocialLogin';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password)
    };
    const navigate = useNavigate();
    if (user) {
        navigate("/")
    }
    return (
        <div>
            <Tittle tittle="Login" self="Login"></Tittle>
            <section className='register'>
                <div className="container">
                    <div className="register-card">
                        <h3 className='pb-2 text-center'>Login Your Account</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="email" placeholder='Enter your Email' {...register("email")} id="" required />
                            <input type="password" placeholder='Enter your password' {...register("password")} id="" required />
                            {loading && <h5 style={{ color: "#9c00ff" }}>Loading....</h5>}
                            {error ? <h5 className='text-danger fw-bold mt-2'>{error?.message}</h5> : <></>}

                            <input type="submit" value="Log in" />
                        </form>
                        <div class="newuser"><i class="fa fa-user" aria-hidden="true"></i> Create New Account? <Link to="/register">Register</Link></div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;