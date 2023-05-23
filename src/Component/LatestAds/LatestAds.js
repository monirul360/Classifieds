import React from 'react';
import latestads1 from './../../Img/01.jpg';
import latestads2 from './../../Img/02.jpg';
import latestads3 from './../../Img/03.jpg';
import latestads4 from './../../Img/04.jpg';
import LatestAd from './../../Img/ad-wide.jpg';
const LatestAds = () => {
    return (
        <div>
            {/* latest ads post start */}
            <div data-aos="fade-right" class="latest-ads">
                <div class="container">
                    {/* title start */}
                    <div class="titleTop">
                        <h1>Latest <span>Ads</span></h1>
                        <div className='tips-border'></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius, orci id facilisis egestas, neque purus sagittis arcu, nec maximus quam odio nec elit Pellentesque eget ipsum mattis</p>
                    </div>
                    {/* title end  */}

                    <ul class="row gridlist">
                        <li class="col-lg-4 col-xl-3  col-sm-6">
                            <div class="adimg">
                                <a href="">
                                    <img src={latestads1} alt="" />
                                </a>
                            </div>
                            <div class="info">
                                <h3><a href="#">Canon SX Powershot A Great D-SLR</a></h3>
                                <div class="row location">
                                    <div class="col-md-6"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
                                    <div class="col-md-6"><i class="fa fa-clock-o" aria-hidden="true"></i> 2:49 pm</div>
                                </div>
                                <div class="price">$206.90</div>
                            </div>
                        </li>
                        <li class="col-lg-4 col-xl-3 col-sm-6">
                            <div class="adimg">
                                <a href="">
                                    <img src={latestads2} alt="" />
                                </a>
                            </div>
                            <div class="info">
                                <h3><a href="#">Smasung Glaxy Phone</a></h3>
                                <div class="row location">
                                    <div class="col-md-6"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
                                    <div class="col-md-6"><i class="fa fa-clock-o" aria-hidden="true"></i> 2:49 pm</div>
                                </div>
                                <div class="price">$206.90</div>
                            </div>
                        </li>
                        <li class="col-lg-4 col-xl-3 col-sm-6">
                            <div class="adimg">
                                <a href="">
                                    <img src={latestads3} alt="" />
                                </a>
                            </div>
                            <div class="info">
                                <h3><a href="#">BMW F20 1 Series Hatchback 5-door</a></h3>
                                <div class="row location">
                                    <div class="col-md-6"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
                                    <div class="col-md-6"><i class="fa fa-clock-o" aria-hidden="true"></i> 2:49 pm</div>
                                </div>
                                <div class="price">$206.90</div>
                            </div>
                        </li>
                        <li class="col-lg-4 col-xl-3 col-sm-6">
                            <div class="adimg">
                                <a href="">
                                    <img src={latestads4} alt="" />
                                </a>
                            </div>
                            <div class="info">
                                <h3><a href="#">Labrador male for stud/matting</a></h3>
                                <div class="row location">
                                    <div class="col-md-6"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
                                    <div class="col-md-6"><i class="fa fa-clock-o" aria-hidden="true"></i> 2:49 pm</div>
                                </div>
                                <div class="price">$206.90</div>
                            </div>
                        </li>
                        <li class="col-lg-4 col-xl-3 col-sm-6">
                            <div class="adimg">
                                <a href="">
                                    <img src={latestads1} alt="" />
                                </a>
                            </div>
                            <div class="info">
                                <h3><a href="#">Canon SX Powershot A Great D-SLR</a></h3>
                                <div class="row location">
                                    <div class="col-md-6"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
                                    <div class="col-md-6"><i class="fa fa-clock-o" aria-hidden="true"></i> 2:49 pm</div>
                                </div>
                                <div class="price">$206.90</div>
                            </div>
                        </li>
                        <li class="col-lg-4 col-xl-3 col-sm-6">
                            <div class="adimg">
                                <a href="">
                                    <img src={latestads2} alt="" />
                                </a>
                            </div>
                            <div class="info">
                                <h3><a href="#">Smasung Glaxy Phone</a></h3>
                                <div class="row location">
                                    <div class="col-md-6"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
                                    <div class="col-md-6"><i class="fa fa-clock-o" aria-hidden="true"></i> 2:49 pm</div>
                                </div>
                                <div class="price">$206.90</div>
                            </div>
                        </li>
                        <li class="col-lg-4 col-xl-3 col-sm-6">
                            <div class="adimg">
                                <a href="">
                                    <img src={latestads3} alt="" />
                                </a>
                            </div>
                            <div class="info">
                                <h3><a href="#">BMW F20 1 Series Hatchback 5-door</a></h3>
                                <div class="row location">
                                    <div class="col-md-6"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
                                    <div class="col-md-6"><i class="fa fa-clock-o" aria-hidden="true"></i> 2:49 pm</div>
                                </div>
                                <div class="price">$206.90</div>
                            </div>
                        </li>
                        <li class="col-lg-4 col-xl-3 col-sm-6">
                            <div class="adimg">
                                <a href="">
                                    <img src={latestads4} alt="" />
                                </a>
                            </div>
                            <div class="info">
                                <h3><a href="#">Labrador male for stud/matting</a></h3>
                                <div class="row location">
                                    <div class="col-md-6"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
                                    <div class="col-md-6"><i class="fa fa-clock-o" aria-hidden="true"></i> 2:49 pm</div>
                                </div>
                                <div class="price">$206.90</div>
                            </div>
                        </li>
                        <li class="col-lg-4 col-xl-3 col-sm-6">
                            <div class="adimg">
                                <a href="">
                                    <img src={latestads1} alt="" />
                                </a>
                            </div>
                            <div class="info">
                                <h3><a href="#">Canon SX Powershot A Great D-SLR</a></h3>
                                <div class="row location">
                                    <div class="col-md-6"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
                                    <div class="col-md-6"><i class="fa fa-clock-o" aria-hidden="true"></i> 2:49 pm</div>
                                </div>
                                <div class="price">$206.90</div>
                            </div>
                        </li>
                        <li class="col-lg-4 col-xl-3 col-sm-6">
                            <div class="adimg">
                                <a href="">
                                    <img src={latestads2} alt="" />
                                </a>
                            </div>
                            <div class="info">
                                <h3><a href="#">Smasung Glaxy Phone</a></h3>
                                <div class="row location">
                                    <div class="col-md-6"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
                                    <div class="col-md-6"><i class="fa fa-clock-o" aria-hidden="true"></i> 2:49 pm</div>
                                </div>
                                <div class="price">$206.90</div>
                            </div>
                        </li>
                        <li class="col-lg-4 col-xl-3 col-sm-6">
                            <div class="adimg">
                                <a href="">
                                    <img src={latestads3} alt="" />
                                </a>
                            </div>
                            <div class="info">
                                <h3><a href="#">BMW F20 1 Series Hatchback 5-door</a></h3>
                                <div class="row location">
                                    <div class="col-md-6"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
                                    <div class="col-md-6"><i class="fa fa-clock-o" aria-hidden="true"></i> 2:49 pm</div>
                                </div>
                                <div class="price">$206.90</div>
                            </div>
                        </li>
                        <li class="col-lg-4 col-xl-3 col-sm-6">
                            <div class="adimg">
                                <a href="">
                                    <img src={latestads4} alt="" />
                                </a>
                            </div>
                            <div class="info">
                                <h3><a href="#">Labrador male for stud/matting</a></h3>
                                <div class="row location">
                                    <div class="col-md-6"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
                                    <div class="col-md-6"><i class="fa fa-clock-o" aria-hidden="true"></i> 2:49 pm</div>
                                </div>
                                <div class="price">$206.90</div>
                            </div>
                        </li>
                    </ul>
                    <div class="viewallbtn mb-5">
                        <a href="#">View All Latest Ads</a>
                    </div>
                    <div class="wideBanner">
                        <img className='img-fluid' src={LatestAd} alt="" />
                    </div>
                </div>
            </div>
            {/* latest ads post end */}
        </div>
    );
};

export default LatestAds;