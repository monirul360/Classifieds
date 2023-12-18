import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
const Review = () => {
    const [user] = useAuthState(auth);
    const name = user.displayName;
    const email = user.email;
    const [mo3100120, setmo3100120] = useState('');
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
                    const review = {
                        name: name,
                        email: email,
                        description: data.description,
                        address: data.address,
                        ratings: data.ratings,
                        price: data.price,
                        image: img,
                    }
                    // send to your database 
                    fetch('http://localhost:5000/review', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(review)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Add review successfull');
                                reset();
                                setmo3100120(inserted);
                            }
                            else {
                                toast.error('Failed to Add review');
                            }
                        })
                }
            })
    }

    // const [reviewper, setReviewper] = useState([{}]);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/review?email=${user.email}`)
    //         .then(res => res.json())
    //         .then(data => setReviewper(data));
    // }, [user])

    const { refetch, isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch(`http://localhost:5000/reviewuser?email=${user.email}`).then(
                (res) => res.json(),
            ),
    })
    if (isLoading) return <p>Loading</p>

    // const [reviewper, setState] = useState([])
    // const [timer, setTimer] = useState(null)
    // const [isMounted, setIsMounted] = useState(false)

    // async function updateDevicePosition() {
    //     try {
    //         const result = await fetch(`http://localhost:5000/reviewuser?email=${user.email}`)
    //         const data = await result.json()
    //         setState(data)
    //     } catch (e) {
    //         console.error(e)
    //     }
    //     clearTimeout(timer)
    //     setTimer(setTimeout(updateDevicePosition, 200))
    // }

    // useEffect(() => {
    //     if (!isMounted) {
    //         updateDevicePosition()
    //         setIsMounted(true)
    //     }
    // })


    return (
        <div>
            <div className="mo310070">


                <div className="mo310080" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <h4>Add Review</h4>
                </div>


                {
                    data.map(reviewper =>

                        <div className="mo3100100" key={reviewper._id} refetch={refetch}>
                            <div class="mo3100110">
                                <img src={reviewper?.image} alt="" />
                                <h2 className='clientname'>{reviewper?.name}</h2>
                                <h2 className='review'>{reviewper?.ratings}</h2>
                                <div className="d-flex align-items-center mb-2 justify-content-center">
                                    <>
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    </>
                                    <>
                                        <p className='clientinfo'>{reviewper?.address}</p>
                                    </>
                                </div>
                                <p className='clientdescription'>{reviewper?.description}</p>
                            </div>
                        </div>
                    )
                }

            </div>
            {/* modal start */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add Review</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {mo3100120 ?
                                <>
                                    <button type="button" class="btn btn-secondary btn-lg" data-bs-dismiss="modal">Close Window</button>

                                </>
                                :
                                <>

                                    <div className="mo310090">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <label htmlFor="name"><b>Name</b></label>
                                            <input type="text" name="" placeholder='Name' id="name" {...register("name")} disabled value={name} required />

                                            <label htmlFor="email"><b>Email</b></label>
                                            <input type="email" name="" placeholder='Email' id="email" {...register("email")} value={email} disabled required />

                                            <label htmlFor="address"><b>Address</b></label>
                                            <input type="text" name="" placeholder='Enter your full address' id="address" {...register("address")} required />

                                            <label htmlFor="Description"><b>Description</b></label>
                                            <textarea cols="5" id='Description' {...register("description")} placeholder='Description' required ></textarea>

                                            <label htmlFor="Ratings"><b>Ratings</b></label>
                                            <select required id='Ratings' {...register("ratings")}>
                                                <option disabled>Select Ratings</option>
                                                <option value="★ (Bad)">★ (Bad)</option>
                                                <option value="★★ (Poor)">★★ (Poor)</option>
                                                <option value="★★★ (Avarage)">★★★ (Avarage)</option>
                                                <option value="★★★★ (Great)">★★★★ (Great)</option>
                                                <option value="5★★★★★ (Excellent)">★★★★★ (Excellent)</option>
                                            </select>
                                            <label htmlFor="photo"><b>Photo</b></label>
                                            <input type="file" name="photo" id="" required {...register("image")} />
                                            <input className='btn btn-primary' type="submit" value="Continune" />
                                        </form>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* modal end */}
        </div>
    );
};

export default Review;