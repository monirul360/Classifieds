import React from 'react';
import Tittle from '../../Component/Share/Tittle/Tittle';

const Privacy_Policy = () => {
    return (
        <div>
            <Tittle tittle="Privacy-Policy" self="Privacy-Policy"></Tittle>
            <div class="privacy-policy">

                <div className="container">
                    <div className="item">
                        <h3>Privacy Policy</h3>
                        <p>This is the privacy policy for World's. It explains how we collect, use, and disclose your personal information when you use our website.</p>
                    </div>

                    <div className="item">
                        <h3>Information We Collect</h3>
                        <p>We may collect the following information:</p>
                        <ul>
                            <div className="d-flex align-items-center">
                                <div className="icon">
                                    <span>✯</span>
                                </div>
                                <div className="text">
                                    <li>Your name and contact information</li>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="icon">
                                    <span>✯</span>
                                </div>
                                <div className="text">
                                    <li>Demographic information such as your location</li>

                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="icon">
                                    <span>✯</span>
                                </div>
                                <div className="text">
                                    <li>Other information relevant to customer surveys and/or offers</li>
                                </div>
                            </div>

                        </ul>
                    </div>

                    <div className="item">
                        <h3>How We Use Your Information</h3>
                        <p>We use the collected information for the following purposes:</p>
                        <ul>
                            <div className="d-flex align-items-center">
                                <div className="icon">
                                    <span>✯</span>
                                </div>
                                <div className="text">
                                    <li>Internal record keeping</li>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="icon">
                                    <span>✯</span>
                                </div>
                                <div className="text">
                                    <li>Improving our products and services</li>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="icon">
                                    <span>✯</span>
                                </div>
                                <div className="text">
                                    <li>Sending promotional emails about new products, special offers, or other information we think you may find interesting</li>
                                </div>
                            </div>

                        </ul>
                    </div>

                    <div className="item">
                        <h3>Security</h3>
                        <p>We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have implemented suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.</p>
                    </div>

                    <div className="item">
                        <h3>Disclosure to Third Parties</h3>
                        <p>We may share your information with third parties only if required by law or to fulfill the purposes outlined in this Privacy Policy.</p>
                    </div>

                    <div className="item">
                        <h3>Cookie Policy</h3>
                        <p>We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies, your data will be aggregated with all other user data.</p>
                    </div>

                    <div className="item">
                        <h3>Links to Other Websites</h3>
                        <p>Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide while visiting such sites and such sites are not governed by this Privacy Policy.</p>
                    </div>

                    <div className="item">
                        <h3>Contact Us</h3>
                        <p>If you have any questions or concerns about our Privacy Policy, please contact us at <span style={{ color: "#9c00ff", fontWeight: "bolder" }}>support@yourdomain.com</span></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Privacy_Policy;