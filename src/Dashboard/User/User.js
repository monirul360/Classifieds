import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const User = () => {

    const [user] = useAuthState(auth);
    const { refetch, isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch("http://localhost:5000/user").then(
                (res) => res.json(),
            ),
    })
    if (isLoading) return <p>Loading</p>

    const addadmin = (email) => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `${localStorage.getItem("accesToken")}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {

                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }
            });
    }

    return (
        <div>
            <h2>All User</h2>
            <table class="table table-dark table-striped mt-4 ">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(i =>
                            <tr>
                                <th scope="row">1</th>
                                <td>{i.email}</td>
                                <td>User</td>
                                <td><button onClick={() => addadmin(i.email)} className='btn btn-primary'>Add Admin</button></td>
                            </tr>

                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default User;