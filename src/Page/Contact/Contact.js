import React from 'react';
import Tittle from '../../Component/Share/Tittle/Tittle';

const Contact = () => {
    return (
        <div>
            <Tittle tittle="Contact-Us" self="Contact-Us"></Tittle>
            <section className="contact-section mt-5">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-6">
                            <div style={{ background: "#9801c0" }} className='p-4'>
                                <h3 className='text-center text-white py-4'>Contact Us</h3>
                                <form className="contact-form">
                                    <div className="form-group">
                                        <input type="text" class="form-control p-3 " name="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" class="form-control p-3 my-3" name="email" placeholder="Your Email" required />
                                    </div>
                                    <div className="form-group">
                                        <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input style={{
                                            background: "#333", border
                                                : "none"
                                        }} className="form-control p-3 mt-3 text-white" type="submit" value="Send" />
                                    </div>

                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-info p-4">
                                <div className="d-flex align-items-center my-4">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                        </svg>
                                    </div>
                                    <div className="content ms-4">
                                        <h5><strong>Call Now</strong> </h5>
                                        <p>(+1) 123.456.7890</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center my-4">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-check-fill" viewBox="0 0 16 16">
                                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z" />
                                            <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
                                        </svg>
                                    </div>
                                    <div className="content ms-4">
                                        <h5><strong>E-mail</strong> </h5>
                                        <p>support@yourdomain.com</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center my-4">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alarm-fill" viewBox="0 0 16 16">
                                            <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                                        </svg>
                                    </div>
                                    <div className="content ms-4">
                                        <h5><strong>Office Hours</strong> </h5>
                                        <p>Monday-Friday, 9:00 AM - 5:00 PM</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center my-4">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                        </svg>
                                    </div>
                                    <div className="content ms-4">
                                        <h5><strong>Location</strong> </h5>
                                        <p>123 Main Street, City, Country</p>
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

export default Contact;