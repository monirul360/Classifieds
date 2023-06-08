import React from 'react';
import Tittle from '../../Component/Share/Tittle/Tittle';

const TermsofServices = () => {
    return (
        <div>
            <Tittle tittle="Terms-of-Service" self="Terms-of-Service"></Tittle>
            <div className="termsofservices">
                <div className="container">

                    <div className="item">
                        <h3>Terms of Service</h3>
                        <p>These terms and conditions govern your use of our website. By accessing or using our website, you agree to be bound by these terms and conditions.</p>
                    </div>

                    <div className="item">
                        <h3>Intellectual Property</h3>
                        <p>The content on this website, including text, graphics, logos, and images, is the intellectual property of [Your Company Name] and is protected by applicable intellectual property laws.</p>
                    </div>

                    <div className="item">
                        <h3>Use of Website</h3>
                        <p>You may use this website for lawful purposes only. You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.</p>
                    </div>

                    <div className="item">
                        <h3>Disclaimer</h3>
                        <p>This website is provided "as is" and we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website for any purpose.</p>
                    </div>

                    <div className="item">
                        <h3>Limitation of Liability</h3>
                        <p>In no event shall [Your Company Name] be liable for any direct, indirect, incidental, special, consequential, or exemplary damages arising out of or in connection with the use or performance of this website.</p>
                    </div>

                    <div className="item">
                        <h3>Indemnification</h3>
                        <p>You agree to indemnify and hold [Your Company Name] harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of the website or violation of these terms and conditions.</p>
                    </div>

                    <div className="item">
                        <h3>Modification of Terms</h3>
                        <p>We reserve the right to modify or replace these terms and conditions at any time without prior notice. Your continued use of the website after any changes constitutes acceptance of the modified terms and conditions.</p>
                    </div>

                    <div className="item">
                        <h3>Contact Us</h3>
                        <p>If you have any questions or concerns about our Terms of Service, please contact us at <span style={{ color: "#9801c0", fontWeight: "bolder" }}>support@yourdomain.com</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsofServices;