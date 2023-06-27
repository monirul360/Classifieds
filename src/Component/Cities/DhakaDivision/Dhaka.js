import React from 'react';
import { Link } from 'react-router-dom';

const Dhaka = () => {
    const post = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
        <div className='city-filter'>
            <div className="tittle">
                <h3>Dhaka Division , <span>Dhaka</span></h3>
                <p>Found results <span>50+</span></p>
            </div>
            <div className="filter-catagory">
                <Link to='/'>House</Link>
                <Link to='/'>Mass</Link>
                <Link to='/'>Hostel</Link>
                <Link to='/'>Office</Link>
                <h2>This is Daka</h2>
            </div>
            {/* content section */}
            {
                post.map(i =>

                    <div className="col-md-12 col-lg-12 gridlist">
                        <div style={{ border: "1px solid #c6c6c6" }} className='my-4  p-3'>
                            <div className="d-flex res-flex">
                                <div className="adimg">
                                    <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/15400597.jpg?k=a592a2a37963c9d578a32af98546fd82b590e479cc5b2e367323d7cfc5f86243&o=&hp=1" alt="" />
                                </div>
                                <div className="info">
                                    <h3>ASTRA @ 8 Kia Peng SuitesOpens in new window
                                    </h3>
                                    <div className="location d-flex align-items-center my-2">
                                        <div className="icon">
                                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        </div>
                                        <div className="text">
                                            <p>Bogura,Dhaka,Bangladesh</p>
                                        </div>
                                    </div>
                                    <p className='status'>Status: <span>Family room</span></p>
                                    <p className='description'>Offering an outdoor swimming pool and a fitness center, as well as a terrace, ASTRA @ 8 Kia Peng Suites is located in the center of Kuala Lumpur, not far from KLCC Park and Kuala Lumpur Convention...</p>
                                    <h4 className='price'>BDT: <span>1400/Monthly</span></h4>
                                    <Link className='btn btn-primary' to="/">BOOKIN NOW</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }
        </div>
    );
};

export default Dhaka;