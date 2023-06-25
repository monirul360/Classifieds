import React, { useEffect, useState } from 'react';
import userimg from './../../Icon/user.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase';
import { useQuery } from '@tanstack/react-query';
const Showpost = () => {
    const [user, loading] = useAuthState(auth);


    // const { refetch, isLoading, error, data } = useQuery({
    //     queryKey: ['repoData'],
    //     queryFn: () =>
    //         fetch(`http://localhost:5000/userfreeads?email=${user.email}`).then(
    //             (res) => res.json(),
    //         ),
    // })
    // if (isLoading) return <p>Loading</p>

    const [data, setState] = useState([])
    const [timer, setTimer] = useState(null)
    const [isMounted, setIsMounted] = useState(false)

    async function updateDevicePosition() {
        try {
            const result = await fetch(`http://localhost:5000/userfreeads?email=${user.email}`, {
                method: 'GET',
                headers: {
                    authorization: `${localStorage.getItem('accesToken')}`
                }
            })
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
            <div className="row my-4">
                {
                    data.map(show =>
                        <div className="col-md-6">
                            <div class="card my-3">
                                <div class="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className='me-2'>
                                            <img style={{ width: "44px", height: "44px" }} src={userimg} alt="" />
                                        </div>
                                        <div>
                                            <h5 className='mt-2'>{show?.name}</h5>
                                        </div>
                                    </div>
                                    <div className="info py-3">
                                        <h5 className='card-title'>{show?.title}</h5>
                                        <p className="card-text">{show?.Description}</p>
                                    </div>
                                    <button className='btn btn-primary px-5 me-3'>Edit</button>
                                    <button className='btn btn-danger px-5'>Delete</button>
                                </div>

                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default Showpost;