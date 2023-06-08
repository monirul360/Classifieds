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
                    <h2 class="moni-con-txt text-center mb-5">Frequently Asked <span class="text-dark">Questions</span></h2>
                    <div class="row d-flex align-items-center">
                        <div class="col-md-7">
                            <div class="row">
                                {/* Questions 1  */}
                                <div class="col-md-12">
                                    <div class="p-3 m-2 border ">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6>What’s the difference between event design and
                                                    event planning? </h6>
                                            </div>
                                            <div>
                                                <a class="btn" data-bs-toggle="collapse" href="#collapseExample"
                                                    role="button" aria-expanded="false" aria-controls="collapseExample">
                                                    <i class="fas fa-chevron-down"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <small class="collapse text-muted" id="collapseExample">
                                            Event design encompasses the more creative side of event management. While a
                                            planner focuses on organization, we focus on the decor of the event. From
                                            draping to lighting, furniture, and centerpieces, it is our job to ensure your
                                            event is truly stunning.
                                        </small>
                                    </div>
                                </div>
                                {/* Questions 2  */}
                                <div class="col-md-12">
                                    <div class="p-3 m-2 border ">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6>How early do we need to start planning an event</h6>
                                            </div>
                                            <div>
                                                <a class="btn" data-bs-toggle="collapse" href="#early" role="button"
                                                    aria-expanded="false" aria-controls="collapseExample">
                                                    <i class="fas fa-chevron-down"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <small class="collapse text-muted" id="early">
                                            Planning an event can take from weeks to months, it really depends on the size
                                            and the details that the event involves. Having enough time allows you to
                                            comfortably cover different areas and prepare yourself for potential scenarios
                                            that might happen so you can consider various options prior the date. You always
                                            need more time than you think!
                                        </small>
                                    </div>
                                </div>
                                {/* Questions 3  */}
                                <div class="col-md-12">
                                    <div class="p-3 m-2 border rounded-3">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6>What is your refund and cancellation policy?</h6>
                                            </div>
                                            <div>
                                                <a class="btn" data-bs-toggle="collapse" href="#refund" role="button"
                                                    aria-expanded="false" aria-controls="collapseExample">
                                                    <i class="fas fa-chevron-down"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <small class="collapse text-muted" id="refund">
                                            Refund/cancellation policies applicable in the following conditions: a) In case,
                                            the buyer cancels the order online before the product has been shipped, the
                                            entire order amount will be refunded. ... Total order amount after deduction of
                                            shipment and handling charges will be refunded.

                                        </small>
                                    </div>
                                </div>
                                {/* Questions 4  */}
                                <div class="col-md-12">
                                    <div class="p-3 m-2 border rounded-3">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6>How do you keep budgets on track?</h6>
                                            </div>
                                            <div>
                                                <a class="btn" data-bs-toggle="collapse" href="#budgets" role="button"
                                                    aria-expanded="false" aria-controls="collapseExample">
                                                    <i class="fas fa-chevron-down"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <small class="collapse text-muted" id="budgets">
                                            Pay your savings “bill” first. ...
                                            Know your income. ...
                                            Give yourself a weekly allowance. ...
                                            Keep receipts and review them weekly. ...
                                            Balance your checkbook. ...
                                            Plan meals and shop ahead. ...
                                            Give yourself permission for the occasional treat.
                                        </small>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-5">
                            <img className='img-fluid' src={faqsimg} alt="" width="100%" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQs;