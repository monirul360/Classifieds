import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Tittle from '../../Component/Share/Tittle/Tittle';
import auth from '../../Firebase';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../../Component/Share/SocialLogin/SocialLogin';
import useToken from '../../hooks/useToker';
const Register = () => {
    const { register, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, uperror] = useUpdateProfile(auth);
    const onSubmit = async data => {
        const displayName = data.name;
        const email = data.email;
        const password = data.password
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName });
    };
    const [token] = useToken(user);
    const nevigate = useNavigate();
    if (token) {
        nevigate("/");
    }
    return (
        <div>
            <Tittle tittle="Register" self="Register"></Tittle>
            <section className='register'>
                <div className="container">
                    <div className="register-card">
                        <h3 className='pb-2 text-center'>Create new account</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" placeholder='Enter your name' {...register("name")} id="" required />
                            <input type="email" placeholder='Enter your Email' {...register("email")} id="" required />
                            <input type="password" placeholder='Enter your password' {...register("password")} id="" required />
                            {loading && <h5 style={{ color: "#9c00ff" }}>Loading....</h5>}
                            <h5 className='text-danger fw-bold'>{error?.message}</h5>
                            <input type="submit" value="Register" />
                        </form>
                        <div class="newuser"><i class="fa fa-user" aria-hidden="true"></i> Already Have Account ? <Link to="/login">Login Here</Link></div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;