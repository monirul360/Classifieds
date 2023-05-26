import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../Firebase';

const UpdateProfile = () => {
    const [user, lodding] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const updatedInformation = {
            bio: data.bio,
            home: data.home,
            Studied: data.Studied,
            number: data.number,
            website: data.website,
        }
        // send to your database 
        console.log(updatedInformation);
        fetch(`http://localhost:5000/users/${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedInformation)
        })
            .then(res => res.json())
            .then(data => {
                const check = data.modifiedCount;
                if (check) {
                    toast("Update profile successful");
                    reset();
                } else {
                    toast("Update profile fail");
                }
            })
    };
    return (
        <div>
            <div className="updateprofile">
                <div className="container bg-white p-4">
                    <h5 style={{ background: "#9801c0", color: "white", padding: "10px" }}>Update your Profile</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <textarea name="" placeholder='About your Bio' {...register("bio")}></textarea>
                        <input type="text" placeholder='Home town' id="" {...register("home")} />
                        <input type="text" placeholder='Studied' id=""{...register("Studied")} />
                        <input type="number" placeholder='Phone Number' Studied id="" {...register("number")} />
                        <input type="text" placeholder='Your Website' {...register("website")} id="" />
                        <input type="submit" value="Update Now" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;