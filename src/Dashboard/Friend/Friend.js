import React, { useEffect, useState } from 'react';
import userimg from './../../Icon/user.png';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase';
import { findByDisplayValue } from '@testing-library/react';
const Friend = () => {
    const [user, loading] = useAuthState(auth);
    const [fnd, setfnd] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/friend")
            .then(res => res.json())
            .then(data => setfnd(data));
    }, [])
    const [singlefnd, setSinglefnd] = useState({});
    const handlefrienddata = (fnd) => {
        setSinglefnd(fnd);
    }
    const { register, handleSubmit, reset } = useForm();
    const name = user?.displayName;
    const email = user?.email;
    const onSubmit = data => {
        const sms = {
            name: name,
            email: email,
            sms: data.sms,
            sendername: singlefnd.name,
            senderemail: singlefnd.email
        }
        // send to your database 
        fetch('http://localhost:5000/sms', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(sms)
        }).then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Add Review successfull');
                    reset();
                } else {
                    toast.error('Failed to Add Review');
                }
            })
    };
    return (
        <>
            <div className='container'>
                <h5>All Friend</h5>

                {

                    fnd.map(fnd =>
                        <div className="bg-white p-3 my-3">
                            <div className="d-flex align-items-center">
                                <div className='me-3'>
                                    <img style={{ width: "60px", height: "60px" }} src={userimg} alt="" />
                                </div>
                                <div><h3>{fnd.name}</h3></div>
                                <div className="sms ms-3">
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                        onClick={() => handlefrienddata(fnd)}
                                    >
                                        SMS
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">{
                                singlefnd?.name
                            }</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <textarea name="" id="" {...register("sms")}></textarea>
                                <input type="submit" value="Send" />
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Friend;