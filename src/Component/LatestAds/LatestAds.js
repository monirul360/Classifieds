import React from 'react';
import LatestAd from './../../Img/ad-wide.jpg';
import { Link, Outlet } from 'react-router-dom';
import Filter from '../Filter/Filter';
const LatestAds = () => {
    return (
        <div>
            {/* latest ads post start */}
            <div data-aos="fade-right" className="latest-ads">
                <div className="container">
                    {/* title start */}
                    <div className="titleTop">
                        <h1>Latest <span>Ads</span></h1>
                        <div classNameName='tips-border'></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius, orci id facilisis egestas, neque purus sagittis arcu, nec maximus quam odio nec elit Pellentesque eget ipsum mattis</p>
                    </div>
                    {/* title end  */}
                    <div className="row d-flex">
                        <div className="col-md-12 col-lg-3">
                            <Filter></Filter>
                        </div>
                        <div className="col-md-12 col-lg-9">
                            <Outlet></Outlet>
                        </div>

                    </div>
                </div>
            </div>
            {/* latest ads post end */}
        </div>
    );
};

export default LatestAds;