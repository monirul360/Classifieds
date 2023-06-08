import React from 'react';
import Tittle from '../../Component/Share/Tittle/Tittle';
import faqsimg from './../../Img/faqs.jpg';
const FAQs = () => {
    return (
        <div>
            <Tittle tittle="World's-FAQs" self="World's-FAQs"></Tittle>

            {/* Questions  */}
            <section>
                <div class="container my-5">
                    <h2 class="text-center mb-5">Frequently Asked <span class="text-dark">Questions</span></h2>
                    <div class="row d-flex align-items-center">
                        <div class="col-md-12">
                            <div class="row">
                                {/* Questions 1  */}
                                <div class="col-md-6">
                                    <div class="p-3 m-2 border ">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6>How can I post an ad on the World's website?
                                                </h6>
                                            </div>
                                            <div>
                                                <a class="btn" data-bs-toggle="collapse" href="#faqs1"
                                                    role="button" aria-expanded="false" aria-controls="collapseExample">
                                                    <i class="fas fa-chevron-down"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <small class="collapse text-muted" id="faqs1">
                                            To post an ad, simply click on the "Post Ad" button on the homepage. Fill in the required details, such as the category, title, description, price, and contact information. You may also upload relevant images to enhance your ad's visibility.
                                        </small>
                                    </div>
                                </div>
                                {/* Questions 2  */}
                                <div class="col-md-6">
                                    <div class="p-3 m-2 border ">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6>Is it free to post ads on the website?
                                                </h6>
                                            </div>
                                            <div>
                                                <a class="btn" data-bs-toggle="collapse" href="#faqs2" role="button"
                                                    aria-expanded="false" aria-controls="collapseExample">
                                                    <i class="fas fa-chevron-down"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <small class="collapse text-muted" id="faqs2">
                                            Yes, posting ads on our classified website is absolutely free. You can reach a wide audience without any cost.
                                        </small>
                                    </div>
                                </div>
                                {/* Questions 3  */}
                                <div class="col-md-6">
                                    <div class="p-3 m-2 border rounded-3">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6>How long does my ad stay on the website?</h6>
                                            </div>
                                            <div>
                                                <a class="btn" data-bs-toggle="collapse" href="#faqs3" role="button"
                                                    aria-expanded="false" aria-controls="collapseExample">
                                                    <i class="fas fa-chevron-down"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <small class="collapse text-muted" id="faqs3">
                                            By default, ads remain active on the website for 30 days. However, you have the option to renew or repost your ad to extend its visibility.
                                        </small>
                                    </div>
                                </div>
                                {/* Questions 4  */}
                                <div class="col-md-6">
                                    <div class="p-3 m-2 border rounded-3">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6>Can I edit or delete my ad after posting?
                                                </h6>
                                            </div>
                                            <div>
                                                <a class="btn" data-bs-toggle="collapse" href="#faqs4" role="button"
                                                    aria-expanded="false" aria-controls="collapseExample">
                                                    <i class="fas fa-chevron-down"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <small class="collapse text-muted" id="faqs4">
                                            Yes, you can edit or delete your ad at any time. Simply log into your account, go to your ad, and select the appropriate option to edit or delete it.
                                        </small>
                                    </div>
                                </div>
                                {/* Questions 5  */}
                                <div class="col-md-6">
                                    <div class="p-3 m-2 border rounded-3">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6>
                                                    How can I contact the seller or buyer of an ad?
                                                </h6>
                                            </div>
                                            <div>
                                                <a class="btn" data-bs-toggle="collapse" href="#faqs5" role="button"
                                                    aria-expanded="false" aria-controls="collapseExample">
                                                    <i class="fas fa-chevron-down"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <small class="collapse text-muted" id="faqs5">
                                            Each ad includes contact information provided by the seller or buyer. You can reach out to them directly using the provided phone number or email address.
                                        </small>
                                    </div>
                                </div>


                                {/* Questions 6  */}
                                <div class="col-md-6">
                                    <div class="p-3 m-2 border rounded-3">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6>
                                                    Are there any safety measures in place for transactions?
                                                </h6>
                                            </div>
                                            <div>
                                                <a class="btn" data-bs-toggle="collapse" href="#faqs6" role="button"
                                                    aria-expanded="false" aria-controls="collapseExample">
                                                    <i class="fas fa-chevron-down"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <small class="collapse text-muted" id="faqs6">
                                            While we strive to create a safe environment, it's essential to exercise caution when dealing with other users. We recommend meeting in a public place, verifying the authenticity of the item or service, and using secure payment methods for transactions.
                                        </small>
                                    </div>
                                </div>


                                {/* Questions 7  */}
                                <div class="col-md-6">
                                    <div class="p-3 m-2 border rounded-3">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6>
                                                    Can I report a suspicious or fraudulent ad?
                                                </h6>
                                            </div>
                                            <div>
                                                <a class="btn" data-bs-toggle="collapse" href="#faqs7" role="button"
                                                    aria-expanded="false" aria-controls="collapseExample">
                                                    <i class="fas fa-chevron-down"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <small class="collapse text-muted" id="faqs7">
                                            Yes, we take user safety seriously. If you come across a suspicious or fraudulent ad, please report it immediately using the "Report Ad" button or by contacting our customer support team. We will investigate the matter promptly.
                                        </small>
                                    </div>
                                </div>


                                {/* Questions 8  */}
                                <div class="col-md-6">
                                    <div class="p-3 m-2 border rounded-3">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6>
                                                    How can I search for specific ads or items?
                                                </h6>
                                            </div>
                                            <div>
                                                <a class="btn" data-bs-toggle="collapse" href="#faqs8" role="button"
                                                    aria-expanded="false" aria-controls="collapseExample">
                                                    <i class="fas fa-chevron-down"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <small class="collapse text-muted" id="faqs8">
                                            You can use our search bar located on the homepage to search for specific ads or items. Enter keywords, select the relevant category, and click the search button to get a list of matching results.
                                        </small>
                                    </div>
                                </div>

                                {/* Questions 9  */}
                                <div class="col-md-6">
                                    <div class="p-3 m-2 border rounded-3">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6>
                                                    Can I save or favorite ads for later reference?
                                                </h6>
                                            </div>
                                            <div>
                                                <a class="btn" data-bs-toggle="collapse" href="#faqs9" role="button"
                                                    aria-expanded="false" aria-controls="collapseExample">
                                                    <i class="fas fa-chevron-down"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <small class="collapse text-muted" id="faqs9">
                                            Yes, you can save or favorite ads by clicking the "Save Ad" or "Add to Favorites" button on the ad details page. This allows you to easily access and revisit the ads you're interested in.
                                        </small>
                                    </div>
                                </div>

                                {/* Questions 10  */}
                                <div class="col-md-6">
                                    <div class="p-3 m-2 border rounded-3">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6>
                                                    How can I contact customer support?
                                                </h6>
                                            </div>
                                            <div>
                                                <a class="btn" data-bs-toggle="collapse" href="#faqs10" role="button"
                                                    aria-expanded="false" aria-controls="collapseExample">
                                                    <i class="fas fa-chevron-down"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <small class="collapse text-muted" id="faqs10">
                                            If you have any further questions or need assistance, please visit our "Contact Us" page or send an email to <span style={{ color: "#9801c0" }}>support@classifiedwebsite.com</span>. Our customer support team will be happy to assist you.
                                        </small>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQs;