import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase';
import userlogo from './../Icon/user.png';
import coverphoto from './../Img/Cover.jpg';
import { Link, Outlet } from 'react-router-dom';
const Dashboard = () => {
    const [user] = useAuthState(auth);

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
                        <p>Web Design and Developer</p>
                        <Link to="/"> <i className='fa fa fa-edit'></i> Update Profile</Link>
                    </div>
                    <div className="profile-menu">
                        <ul>
                            <li><Link to="/dashboard/about_user">About</Link></li>
                            <li><Link to="/dashboard">Post</Link></li>
                            <li><Link to="/dashboard">Booking</Link></li>
                            <li><Link to="/dashboard">Sell</Link></li>
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