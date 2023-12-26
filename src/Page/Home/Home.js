import React, { useEffect, useState } from 'react';
import Catagory from '../../Component/Catagory/Catagory';
import img1 from './../../Img/02.jpg';
import img2 from './../../Img/03.jpg';
import latestads1 from '././../../Img/01.jpg';
import latestads2 from '././../../Img/02.jpg';
import latestads3 from '././../../Img/03.jpg';
import latestads4 from '././../../Img/04.jpg';
import latestads from '././../../Img/ad-wide.jpg';
import monirul from './../../Img/monirul.png'
import LatestAds from '../../Component/LatestAds/LatestAds';
import Cities from '../../Component/Cities/Cities';
const Home = () => {
    const [review, setreview] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then(res => res.json())
            .then(data => setreview(data));
    }, [])

    return (
        <div>
            {/* <div className="slider">
                <div className="container">
                    <h1>World's Largest Classifieds Site
                    </h1>
                    <p>Search from over 99,00,000 Active ads & Post free unlimited classifieds ads!
                    </p>
                    <div class="searchbar row">
                        <div class="col-md-8">
                            <input type="text" placeholder="What are you looking for" />
                        </div>
                        <div class="col-md-2">
                            <select>
                                <option>Select City</option>
                                <option>New York</option>
                                <option>San Joes</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <input type="submit" class="btn" value="Search Ad" />
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <Catagory></Catagory> */}
            <LatestAds></LatestAds>

            {/* testimonial */}
            {/* <section className='testimonial'>
                <div className="container">
                    <div class="titleTop">
                        <h1>Happy <span>Customers</span></h1>
                        <div className='tips-border'></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius, orci id facilisis egestas, neque purus sagittis arcu, nec maximus quam odio nec elit Pellentesque eget ipsum mattis.</p>
                    </div>
                    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                                <img src={monirul} alt="" />
                                <h2 className='clientname'>Md Monirul Islam</h2>
                                <p className='clientinfo'>Bogura ,Dhaka, Bangladesh</p>
                                <p className='clientdescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, debitis. Ea tempora amet delectus nihil, cum doloribus architecto neque ut.</p>
                            </div>

                            {
                                review.map(r =>
                                    <div class="carousel-item" data-bs-interval="2000">
                                        <img src={r?.image} alt="" />
                                        <h2 className='clientname'>{r?.name}</h2>
                                        <p className='clientinfo'>{r?.address}</p>
                                        <p className='clientdescription'>{r?.description}</p>
                                    </div>

                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center gap-4">
                    <div>
                        <button style={{ background: "#ddd" }} className='btn' type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <i class="fa fa-chevron-left" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div>
                        <button style={{ background: "#ddd" }} className='btn' type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </section> */}
            <div class="appwraper">
                <div class="container">

                    {/* app info Start */}
                    <div class="titleTop">
                        <h1 className='text-white'>Download Our App</h1>
                        <div className='tips-border'></div>
                    </div>
                    <div class="subtitle2">A world market in your hand</div>
                    <p>Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac condimentum. Vestibulum congue posuere lacus, id tincidunt nisi porta sit amet. Suspendisse et sapien varius, pellentesque dui non, semper orci.</p>
                    <div class="appbtn">
                        <a href="#" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Download From Play Store"><i class="fa fa-android" aria-hidden="true"></i> Download</a>
                        <a href="#" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Download From App Store"><i class="fa fa-apple" aria-hidden="true"></i> Download</a>
                        <a href="#" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Download From Windows Store"><i class="fa fa-windows" aria-hidden="true"></i> Download</a> </div>
                    {/* app info end */}

                </div>
            </div>
            <Cities></Cities>

        </div>
    );
};

export default Home;