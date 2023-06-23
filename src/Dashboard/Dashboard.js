import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase';
import userlogo from './../Icon/user.png';
import coverphoto from './../Img/Cover.jpg';
import { Link, Outlet } from 'react-router-dom';
const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [info, setinfo] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setinfo(data));
    }, [user])

    return (
        <>
            <div className="dashboard-section">
                <div className="container">
                    <div className="cover-photo">
                        <img src={coverphoto} alt="" />
                        <div className="profile">
                            <img src={userlogo} alt="" />
                        </div>
                    </div>
                    <div className="profile-info">
                        <h2>{user?.displayName}</h2>
                        <p>{info?.bio}</p>
                        <Link to="/dashboard/updateprofile"> <i className='fa fa fa-edit'></i> Update Profile</Link>
                    </div>
                    <div className="profile-menu">
                        <ul>
                            <li><Link to="/dashboard/about_user">About</Link></li>
                            <li><Link to="/dashboard">Post</Link></li>
                            <li><Link to="/dashboard">Review</Link></li>
                            <li><Link to="/dashboard/Chat">Love</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className='outlet-content'>
                <div className="container">
                    <Outlet></Outlet>
                </div>
            </section>
        </>
    );
};

export default Dashboard;