import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase';

const About_user = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <section className='about-section'>
                <div className="about-info bg-white p-3">
                    <ul>
                        <li>
                            <div className="d-flex">
                                <div>
                                    <i className='fa fa-home'></i>
                                </div>
                                <div>
                                    <p>Lives in <span>Dhaka, Bangladesh</span>
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex">
                                <div>
                                    <i class="fa fa-home"></i>
                                </div>
                                <div>
                                    <p>From <span>Dhaka, Bangladesh
                                    </span>
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex">
                                <div>
                                    <i class="fa fa-graduation-cap"></i>
                                </div>
                                <div>
                                    <p>Studied  <span>Dream Technology and Institute -DTI
                                    </span>
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex">
                                <div>
                                    <i className='email-icon'></i>
                                </div>
                                <div>
                                    <p>Email <span>
                                        {user?.email}
                                    </span>
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default About_user;