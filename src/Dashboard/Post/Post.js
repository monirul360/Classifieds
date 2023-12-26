import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Showpost from './Showpost';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Post = () => {
    const [user] = useAuthState(auth);
    const [moni30000, setmoni30000] = useState('');
    const name = user?.displayName;
    const email = user?.email;
    const userphoto = user?.photoURL;
    const [info, setinfo] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setinfo(data));
    }, [user])
    const { bio } = info;
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = '9903ff48ea7130ca4de8dc43c159c096';
    const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const ads = {
                        name: name,
                        Title: data.Title,
                        Description: data.Description,
                        division: data.division,
                        category: data.district,
                        postcode: data.postcode,
                        roomtype: data.category,
                        price: data.price,
                        per: data.per,
                        wifi: data.wifi,
                        parking: data.parking,
                        GasLine: data.GasLine,
                        Room: data.Room,
                        bathrooms: data.bathrooms,
                        kitchenRoom: data.kitchenRoom,
                        conname: data.conname,
                        number: data.number,
                        email: email,
                        image: img,
                        userphoto: userphoto,
                        bio: bio,
                    }
                    // send to your database 
                    fetch('http://localhost:5000/freeads', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(ads)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Ads successfull');
                                reset();
                                setmoni30000(inserted);
                                // <div className="back">
                                //     <button className='btn btn-primary' data-bs-dismiss="modal">Go to Back profile</button>
                                // </div>
                            }
                            else {
                                toast.error('Failed to Add Product');
                            }
                        })
                }
            })
    }
    return (
        <>
            <div className='moni310020rul my-4' data-bs-toggle="modal" data-bs-target="#Postmodal">
                <div className="moni310050rul">
                    <h5>FREE</h5>
                </div>
                <div className='moni310030rul'>
                    <i class="fa-solid fa-bangladeshi-taka"></i>
                    <i className='fa fa-dollar'></i>
                    <i className='fa fa-bangladeshi-taka'></i>
                </div>
                <div className="moni310040rul">
                    <h5>Ads Post</h5>
                </div>
            </div>
            {/* modal*/}

            <div class="modal fade" id="Postmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Create sell post</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="mo310060 container">
                                {moni30000 ? <>
                                    <Link to='/dashboard' data-bs-dismiss="modal">View Ads</Link>
                                </> :
                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        <label htmlFor="title"><b>Post Title</b></label>

                                        <textarea id='title' rows="2" placeholder='Post Title' {...register("Title")} required></textarea>

                                        <label htmlFor="Description"><b>Description</b></label>

                                        <textarea id='Description' placeholder='Description' rows="5" {...register("Description")} required></textarea>

                                        <div className="mo310070">
                                            <div className="row">
                                                <div className="col-md-4 col-12">
                                                    <div>
                                                        <label htmlFor="division"><b>Division</b></label>
                                                        <select {...register("division")} required>
                                                            <option disabled>Select Division</option>
                                                            <option value="Dhaka Division">Dhaka Division</option>
                                                            <option value="Rajshahi Division">Rajshahi Division</option>
                                                            <option value="Rangpur Division">Rangpur Division</option>
                                                            <option value="Khulna Division">Khulna Division</option>
                                                            <option value="Barisal Division">Barisal Division</option>
                                                            <option value="Chittagong Division">Chittagong Division</option>
                                                            <option value="Sylhet Division">Sylhet Division</option>
                                                            <option value="Mymensingh Division">Mymensingh Division</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-12">
                                                    <label htmlFor="district"><b>District</b></label>
                                                    <input type="text" name="" placeholder='District Name' id="district" {...register("district")} required />
                                                </div>
                                                <div className="col-md-4 col-12">
                                                    <label htmlFor="postcode"><b>Post code</b></label>
                                                    <input type="number" name="" placeholder='post code' id="postcode" {...register("postcode")} required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <label htmlFor="category"><b>Category</b></label>
                                                <select id='category' {...register("category")} required>
                                                    <option disabled>Select Category</option>
                                                    <option value="Family Room">Family Room</option>
                                                    <option value="Mass Room">Mass Room</option>
                                                    <option value="Hostel Room">Hostel Room</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="price"><b>Price ৳
                                                </b></label>
                                                <input type="number" placeholder='৳ Price' id="price" {...register("price")} required />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="per"><b>Per Payment</b></label>
                                                <select id='per' {...register("per")} required>
                                                    <option disabled>Per Payment</option>
                                                    <option value="Day">Day</option>
                                                    <option value="Week">Week</option>
                                                    <option value="Month">Month</option>
                                                    <option value="Year">Year</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p className='lead text-dark mb-3'>Other Details
                                                </p>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="wifi"><b>WIFI</b></label>
                                                <select id="wifi" {...register("wifi")} required>
                                                    <option disabled>Select WIFI</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="GasLine"><b>Gas Line</b></label>
                                                <select name="" id="GasLine" {...register("GasLine")} required>
                                                    <option disabled>Select Gas Line</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="parking"><b>Parking</b></label>
                                                <select id="parking" {...register("parking")} required>
                                                    <option disabled>Select Parking</option>
                                                    <option value="Attached Garage">Attached Garage</option>
                                                    <option value="No Parking">No parking</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="Room"><b>Room</b></label>
                                                <select id="Room" {...register("Room")} required>
                                                    <option disabled>Select Room</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="bathrooms"><b>Bathrooms</b></label>
                                                <select id="bathrooms" {...register("bathrooms")} required>
                                                    <option disabled>Select Bathrooms</option>
                                                    <option value="Shared">Shared</option>
                                                    <option value="split">Split</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="3">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="kitchenRoom"><b>kitchen Room</b></label>
                                                <select name="" id="kitchenRoom" {...register("kitchenRoom")} required>
                                                    <option disabled>Select kitchen Room</option>
                                                    <option value="YES">YES</option>
                                                    <option value="VIP">VIP</option>
                                                    <option value="NO">NO</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p className='lead text-dark mb-3'>Contact Info</p>
                                            </div>
                                            <div className="col-md-12">
                                                <label htmlFor="conname"><b>Contact Name
                                                </b></label>
                                                <input type="text" name="" placeholder='Contact name' id="conname" {...register("conname")} required />
                                            </div>
                                            <div className="col-md-12">
                                                <label htmlFor="number"><b>Phone Number</b></label>
                                                <input type="number" placeholder='Phone Number' name="" id="number" {...register("number")} required />
                                            </div>
                                            <div className="col-md-12">
                                                <label htmlFor="email"><b>Email Address</b></label>
                                                <input disabled type="email" placeholder='Email Address' value={email} name="" id="email" {...register("email")} required />
                                            </div>
                                            <div className="col-md-12">
                                                <label htmlFor="photo"><b>Photo Upload</b></label>
                                                <input type="file" name="" id="photo" {...register("image")} required />
                                            </div>
                                        </div>
                                        <div className="row my-4">
                                            <div className="col-md-12">
                                                <div className="d-flex align-items-center mb-3">
                                                    <div>
                                                        <input className='p-0 m-0' type="checkbox" name="" id="allprivace" required />
                                                    </div>
                                                    <div className='ms-1'>
                                                        <label htmlFor="allprivace"><b className='text-dark'>I have read and accept the <Link target='blank' to='/privacypolicy'>Terms and Conditions</Link></b></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <input type="submit" value="Continue" />
                                    </form>}
                                {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                            </div>
                        </div>
                    </div>
                </div >
            </div >
            {/* modal end */}
            <Showpost Showpost ></Showpost >
        </>
    );
};

export default Post;