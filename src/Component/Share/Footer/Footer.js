import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div class="footerWrap">
                <div class="container">
                    <div class="row">
                        {/* sAbout Us */}
                        <div class="col-md-3 col-sm-12">
                            <div class="ft-logo">
                                <h1>World's</h1>
                            </div>
                            <p>At World's, we strive to provide you with the best platform to buy, sell, and connect with your local community. Our goal is to simplify the process of finding and posting classified ads, making it convenient and hassle-free for everyone.</p>
                        </div>
                        {/* About us End */}

                        {/* Quick Links */}
                        <div class="col-md-2 col-sm-6">
                            <h5>Quick Links</h5>

                            {/* Quick Links menu Start */}

                            <ul class="quicklinks">
                                <li><Link to="/aboutus">About Us </Link></li>
                                <li><Link to="/careers">Careers</Link></li>
                                <li><Link to="#.">All Categories</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="dashboard/">Post an Ad</Link></li>
                                <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                                <li><Link to="#.">Blog</Link></li>
                            </ul>
                        </div>
                        {/* Quick Links menu end */}

                        {/* Jobs By Industry */}
                        <div class="col-md-3 col-sm-6">
                            <h5>Help Center</h5>
                            {/* Industry menu Start */}
                            <ul class="quicklinks">
                                <li><Link to="/contact">Help &amp; Support</Link></li>
                                <li><Link to="/faqs">FAQs</Link></li>
                                <li><Link to="#.">Account Issue</Link></li>
                                <li><Link to="#.">Fake Ads</Link></li>
                                <li><Link to="#.">Buy Membership</Link></li>
                                <li><Link to="#.">Terms of Services</Link></li>
                                <li><Link to="#.">History</Link></li>
                            </ul>
                            {/* Industry menu End */}
                            <div class="clear"></div>
                        </div>

                        {/* Latest Articles */}
                        <div class="col-md-4 col-sm-12">
                            <h5>Contact Us</h5>
                            <div class="address"> 123 Lorem Road Suite A<br />
                                New York, NY 123456</div>
                            <div class="email"> <Link to="mailto:newapp@salonstudios.com">support@yourdomain.com</Link> </div>
                            <div class="phone"> <Link to="tel:001234567890">(+1) 123.456.7890</Link></div>

                            {/* Social Icons  */}
                            <div class="social"> <Link to="#." target="_blank"> <i class="fa fa-facebook-square" aria-hidden="true"></i></Link> <Link to="#." target="_blank"><i class="fa fa-twitter-square" aria-hidden="true"></i></Link> <Link to="#." target="_blank"><i class="fa fa-google-plus-square" aria-hidden="true"></i></Link> <Link to="#." target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></Link> <Link to="#." target="_blank"><i class="fa fa-youtube-square" aria-hidden="true"></i></Link> </div>
                            {/* Social Icons end  */}

                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright">
                <div class="container">
                    <div class="bttxt">Copyright © 2017 World's
                        . All Rights Reserved. Design by:
                        <Link to="#" target="_blank">Monirul360</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;