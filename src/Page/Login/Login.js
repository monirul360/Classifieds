import React from 'react';
import Tittle from '../../Component/Share/Tittle/Tittle';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <Tittle tittle="Login" self="Login"></Tittle>
            <section className='register'>
                <div className="container">
                    <div className="register-card">
                        <h3 className='pb-2 text-center'>Log in your account</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="email" placeholder='Enter your Email' {...register("email")} id="" />
                            <input type="password" placeholder='Enter your password' {...register("password")} id="" />
                            <input type="submit" value="Log in" />
                        </form>
                        <div class="newuser"><i class="fa fa-user" aria-hidden="true"></i>Create new account? <Link to="/register">Register</Link></div>
                        <div class="socialLogin">
                            <h5>Login Or Register with Social</h5>
                            <Link to="/" class="gp"><i class="fa fa-google-plus" aria-hidden="true"></i>Continue with Google</Link> </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;