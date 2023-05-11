import React from 'react';
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
const Home = () => {
    return (
        <div>
            <div className="slider">
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
            </div>
            <div className="Featured">
                <div className="container">
                    <h1>Featured <span>Ads</span></h1>
                    <div className="tips-border"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius, orci id facilisis egestas, neque purus</p>
                    <p>sagittis arcu, nec maximus quam odio nec elit Pellentesque eget ipsum mattis</p>
                    <div className="Featured-post py-4">
                        <div className="items">
                            <img src={img1} alt="" />
                        </div>
                        <div className="items">
                            <img src={img2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Catagory></Catagory>
            <LatestAds></LatestAds>
            <div class="section  howitwrap">
                <div class="container">
                    <ul class="howlist row">
                        {/* step 1 */}
                        <li class="col-md-4 col-sm-4">
                            <div class="iconcircle"><i class="fa fa-user" aria-hidden="true"></i></div>
                            <h4>Create a Free Account</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua.</p>
                        </li>
                        {/* step 1 end */}

                        {/* step 2 */}
                        <li class="col-md-4 col-sm-4">
                            <div class="iconcircle"><i class="fa fa-black-tie" aria-hidden="true"></i></div>
                            <h4>Post your Free Ad</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua.</p>
                        </li>
                        {/* step 2 end */}

                        {/* step 3 */}
                        <li class="col-md-4 col-sm-4">
                            <div class="iconcircle"><i class="fa fa-file-text" aria-hidden="true"></i></div>
                            <h4>Sold or Buy</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua.</p>
                        </li>
                        {/* step 3 end */}
                    </ul>
                </div>
            </div>
            {/* testimonial */}
            <section className='testimonial'>
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
                                <h2 className='clientname'>Md Monirul Islam(Student)</h2>
                                <p className='clientinfo'>Bogura ,Dhaka, Bangladesh</p>
                                <p className='clientdescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, debitis. Ea tempora amet delectus nihil, cum doloribus architecto neque ut.</p>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src={monirul} alt="" />
                                <h2 className='clientname'>Md Monirul Islam(Student)</h2>
                                <p className='clientinfo'>Bogura ,Dhaka, Bangladesh</p>
                                <p className='clientdescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, debitis. Ea tempora amet delectus nihil, cum doloribus architecto neque ut.</p>
                            </div>
                            <div class="carousel-item">
                                <img src={monirul} alt="" />
                                <h2 className='clientname'>Md Monirul Islam(Student)</h2>
                                <p className='clientinfo'>Bogura ,Dhaka, Bangladesh</p>
                                <p className='clientdescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, debitis. Ea tempora amet delectus nihil, cum doloribus architecto neque ut.</p>
                            </div>
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
            </section>
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

            <div class="section Cities-ads">
                <div class="container">
                    {/* title start  */}
                    <div class="titleTop">
                        <h1>Ads By <span>Cities</span></h1>
                        <div className='tips-border'></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius, orci id facilisis egestas, neque purus sagittis arcu, nec maximus quam odio nec elit Pellentesque eget ipsum mattis</p>
                    </div>
                    {/* title end  */}
                    <div class="topsearchwrap">
                        <ul class="row catelist">
                            <li class="col-md-3 col-sm-6"><a href="#">London <span>(96 Teeutors)</span></a></li>
                            <li class="col-md-3 col-sm-6"><a href="#">New York <span>(96 Teeutors)</span></a></li>
                            <li class="col-md-3 col-sm-6"><a href="#">Atlanta <span>(96 Teeutors)</span></a></li>
                            <li class="col-md-3 col-sm-6"><a href="#">Andalusia <span>(96 Teeutors)</span></a></li>
                            <li class="col-md-3 col-sm-6"><a href="#">Anchorage <span>(96 Teeutors)</span></a></li>
                            <li class="col-md-3 col-sm-6"><a href="#">Fairbanks <span>(96 Teeutors)</span></a></li>
                            <li class="col-md-3 col-sm-6"><a href="#">Haines <span>(96 Teeutors)</span></a></li>
                            <li class="col-md-3 col-sm-6"><a href="#">Flagstaff <span>(96 Teeutors)</span></a></li>
                            <li class="col-md-3 col-sm-6"><a href="#">Prescott <span>(96 Teeutors)</span></a></li>
                            <li class="col-md-3 col-sm-6"><a href="#">Arkadelphia <span>(96 Teeutors)</span></a></li>
                            <li class="col-md-3 col-sm-6"><a href="#">Batesville <span>(96 Teeutors)</span></a></li>
                            <li class="col-md-3 col-sm-6"><a href="#">Camden <span>(96 Teeutors)</span></a></li>
                            <li class="col-md-3 col-sm-6"><a href="#">Forrest City <span>(96 Teeutors)</span></a></li>
                            <li class="col-md-3 col-sm-6"><a href="#">Hot Springs <span>(96 Teeutors)</span></a></li>
                            <li class="col-md-3 col-sm-6"><a href="#">Little Rock <span>(96 Teeutors)</span></a></li>
                            <li class="col-md-3 col-sm-6"><a href="#">Alameda <span>(96 Teeutors)</span></a></li>
                            <li class="col-md-3 col-sm-6"><a href="#">Arcadia <span>(96 Teeutors)</span></a></li>
                            <li class="col-md-3 col-sm-6"><a href="#">Barstow <span>(96 Teeutors)</span></a></li>
                            <li class="col-md-3 col-sm-6"><a href="#">Daly City <span>(96 Teeutors)</span></a></li>
                            <li class="col-md-3 col-sm-6"><a href="#">Downey <span>(96 Teeutors)</span></a></li>
                            <li class="col-md-3 col-sm-6"><a href="#">Huntington Beach <span>(96 Teeutors)</span></a></li>
                            <li class="col-md-3 col-sm-6"><a href="#">Laguna Beach <span>(96 Teeutors)</span></a></li>
                            <li class="col-md-3 col-sm-6"><a href="#">Modesto <span>(96 Teeutors)</span></a></li>
                            <li class="col-md-3 col-sm-6"><a href="#">Rancho Cucamonga <span>(96 Teeutors)</span></a></li>
                        </ul>
                    </div>
                    <div class="wideBanner">
                        <img src={latestads} alt="" />

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;