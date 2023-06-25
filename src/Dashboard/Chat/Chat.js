import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
// import { useQuery } from '@tanstack/react-query';
import Chatmessage from './Chatmessage';

const Chat = () => {
    const [user, loadding] = useAuthState(auth);
    const name = user?.displayName;
    const email = user?.email;

    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const onSubmit = async (data) => {
        console.log(data);
        const sms = {
            name: name,
            email: email,
            sms: data.sms,
        }
        // send to your database 
        fetch('http://localhost:5000/sms', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(sms)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {

                    reset();
                }
                else {
                    toast.error('Failed to Add Review');
                }
            })
    }

    // const { refetch, isLoading, error, data } = useQuery({
    //     queryKey: ['repoData'],
    //     queryFn: () =>
    //         fetch('http://localhost:5000/sms').then(
    //             (res) => res.json(),
    //         ),
    // })
    // if (isLoading) return <p>Loading</p>

    const [state, setState] = useState([])
    const [timer, setTimer] = useState(null)
    const [isMounted, setIsMounted] = useState(false)

    async function updateDevicePosition() {
        try {
            const result = await fetch('http://localhost:5000/sms')
            const data = await result.json()
            setState(data)
        } catch (e) {
            console.error(e)
        }
        clearTimeout(timer)
        setTimer(setTimeout(updateDevicePosition, 200))
    }

    useEffect(() => {
        if (!isMounted) {
            updateDevicePosition()
            setIsMounted(true)
        }
    })
    return (
        <div>
            <div class="container">
                <div class="chat-box">
                    <div class="chat-box-header bg-primary text-white">
                        <h5 class="m-0">Group Chat</h5>
                    </div>
                    <div class="chat-box-body">

                        <p className='text-center pb-2'>You're Chat on Member</p>
                        {
                            state.map(sms => <Chatmessage
                                sms={sms}
                                key={sms._id}
                            // refetch={refetch}
                            ></Chatmessage>)

                        }

                    </div>
                    <div class="chat-box-footer">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="input-group">
                                <input type="text" class="form-control" {...register("sms")} placeholder="Type your message..." />
                                <button class="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Chat;