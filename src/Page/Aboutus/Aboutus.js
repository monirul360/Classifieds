import React from 'react';
import aboutimg from './../../Img/about.jpg'
import Tittle from '../../Component/Share/Tittle/Tittle';
const Aboutus = () => {
    return (
        <div>
            <Tittle tittle="About-us" self="About-us"></Tittle>
            <section className='mt-5'>
                <div class="container">
                    <div class="row d-flex justify-content-between align-items-center">
                        <div class="col-md-6">
                            <div class="m-3">
                                <img class="img-fluid" src={aboutimg} alt="" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="m-2">
                                <h3 class="moni-con-txt">About us World's Agency</h3>
                                <p>Welcome to World'

                                    At World's, we strive to provide you with the best platform to buy, sell, and connect with your local community. Our goal is to simplify the process of finding and posting classified ads, making it convenient and hassle-free for everyone.
                                </p>
                                <p>Extensive Categories: Our platform offers a diverse range of categories, catering to various interests and needs. Whether you're looking for real estate, vehicles, jobs, services, or even pets, ClassifiedsConnect has you covered. With a wide selection of categories, finding what you're looking for has never been easier.</p>
                                <button class="btn btn-danger mt-4">
                                    See all &nbsp;
                                    <i class="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Aboutus;