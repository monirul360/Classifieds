import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Showpost from './Showpost';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase';

const Post = () => {
    const [user] = useAuthState(auth);
    const name = user?.displayName;
    const email = user?.email;
    // const [ip, setIp] = useState({});
    // const handleip = ip => {
    //     fetch(`https://ipinfo.io/${ip}?token=8f549658ffeece`)
    //         .then(res => res.json())
    //         .then(data => setIp(data))
    // }
    // const getIPAddress = () => {
    //     fetch("https://api.ipify.org?format=json")
    //         .then(res => res.json())
    //         .then(data => {
    //             handleip(data.ip)
    //         })
    // }
    // getIPAddress()
    const { register, handleSubmit, reset } = useForm();
    const imgkey = "c92537da5892feddd27d0afd1c2fb0e5";
    const onSubmit = data => {
        console.log(data);
        const photo = data.photo[0];
        const formData = new FormData();
        formData.append("photo", photo);
        const url = `https://api.imgbb.com/1/upload?key=${imgkey}`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: formData
        }).then(res => res.json())
            .then(result => {
                console.log(result);
            });
        const freeAds = {
            name: name,
            email: email,
            title: data.title,
            Description: data.Description,
            price: data.price,
            category: data.category,
            condition: data.condition,
        }
        // send to your database 
        //     fetch('http://localhost:5000/freeads', {
        //         method: 'POST',
        //         headers: {
        //             'content-type': 'application/json',
        //         },
        //         body: JSON.stringify(freeAds)
        //     }).then(res => res.json())
        //         .then(inserted => {
        //             if (inserted.insertedId) {
        //                 toast.success('Add Review successfull');
        //                 reset();
        //             } else {
        //                 toast.error('Failed to Add Review');
        //             }
        //         })
    };
    return (
        <>
            <div>
                <div className="post-form p-4 bg-white">
                    <h5 style={{ background: "#9801c0", color: "white", padding: "10px" }}>Free Ads Now</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='form-control py-3 my-2' type="text" name="" placeholder='Title' {...register("title")} required />
                        <textarea className='form-control py-3 my-2' name="" placeholder='Description' {...register("Description")} id="" required></textarea>
                        <input className='form-control py-3 my-2' type="Number" name="" placeholder='Price' {...register("price")} id="" required />
                        <input className='form-control py-3 my-2' type="number" name="" placeholder='Phone Number' {...register("number")} id="" required />
                        <select className='form-control  my-2' {...register("category")} id="" required>
                            <option value="" disabled selected>Category</option>
                            <option value="Vehicles">Vehicles</option>
                            <option value="Mobiles">Mobiles</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Jobs">Jobs</option>
                            <option value="Real Estate">Real Estate</option>
                            <option value="Services">Services</option>
                            <option value="Education">Education</option>
                            <option value="Pets">Pets</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Baby Products">Baby Products</option>
                            <option value="Sports">Sports</option>
                        </select>
                        <select className='form-control  my-2' {...register("condition")} id="" required>
                            <option value="" disabled selected>Condition</option>
                            <option value="New">New</option>
                            <option value="Used -Like New">Used -Like New</option>
                            <option value="Used -Like Good">Used -Like Good</option>
                            <option value="condition">Used -Fair</option>
                        </select>
                        <input className='form-control  my-2' type="file" {...register("photo")} id="" />
                        <input className='form-control' type="submit" value="Post Now" />
                    </form>
                </div>
            </div>
            <Showpost></Showpost>
        </>
    );
};

export default Post;