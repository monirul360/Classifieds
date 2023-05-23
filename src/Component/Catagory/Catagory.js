import React from 'react';
import one from './../../Icon/01.png'
import two from './../../Icon/02.png'
import three from './../../Icon/03.png'
import four from './../../Icon/04.png'
import five from './../../Icon/05.png'
import six from './../../Icon/06.png'
import seven from './../../Icon/07.png'
import eight from './../../Icon/08.png'
import nine from './../../Icon/09.png'
import ten from './../../Icon/10.png'
import eleven from './../../Icon/11.png'
import twelve from './../../Icon/12.png'
const Catagory = () => {
    return (
        <div>
            <div data-aos="zoom-in" class="section catewrap">
                <div class="container">
                    <div class="titleTop">
                        <h1>Browse <span>Categories</span></h1>
                        <div className='tips-border'></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius, orci id facilisis egestas, neque purus sagittis arcu, nec maximus quam odio nec elit Pellentesque eget ipsum mattis</p>
                    </div>
                    <ul style={{ listStyle: "none" }} class="categoryList row">
                        <li class="col-6 col-md-3 col-sm-4 col-xl-2 my-4">
                            <a href="">
                                <img src={one} alt="Cate Img" />
                                <span>Vehicles <i>(598)</i></span>
                            </a>
                        </li>
                        <li class="col-6 col-md-3 col-sm-4 col-xl-2 my-4">
                            <a href="">
                                <img src={two} alt="Cate Img" /> <span>Mobiles <i>(598)</i></span>
                            </a>
                        </li>
                        <li class="col-6 col-md-3 col-sm-4 col-xl-2 my-4">
                            <a href="">
                                <img src={three} alt="Cate Img" /> <span>Electronics <i>(598)</i></span>
                            </a>
                        </li>
                        <li class="col-6 col-md-3 col-sm-4 col-xl-2 my-4">
                            <a href="">
                                <img src={four} alt="Cate Img" /> <span>Furniture <i>(598)</i></span>
                            </a>
                        </li>
                        <li class="col-6 col-md-3 col-sm-4 col-xl-2 my-4">
                            <a href="">
                                <img src={five} alt="Cate Img" /> <span>Jobs <i>(598)</i></span>
                            </a>
                        </li>
                        <li class="col-6 col-md-3 col-sm-4 col-xl-2 my-4">
                            <a href="">
                                <img src={six} alt="Cate Img" /> <span>Real Estate <i>(598)</i></span>
                            </a>
                        </li>
                        <li class="col-6 col-md-3 col-sm-4 col-xl-2 my-4">
                            <a href="">
                                <img src={seven} alt="Cate Img" /> <span>Services <i>(598)</i></span>
                            </a>
                        </li>
                        <li class="col-6 col-md-3 col-sm-4 col-xl-2 my-4">
                            <a href="">
                                <img src={eight} alt="Cate Img" /> <span>Education <i>(598)</i></span>
                            </a>
                        </li>
                        <li class="col-6 col-md-3 col-sm-4 col-xl-2 my-4">
                            <a href="">
                                <img src={nine} alt="Cate Img" />
                                <span>Pets <i>(598)</i></span>
                            </a>
                        </li>
                        <li class="col-6 col-md-3 col-sm-4 col-xl-2 my-4">
                            <a href="">
                                <img src={ten} alt="Cate Img" />
                                <span>Fashion <i>(598)</i></span>
                            </a>
                        </li>
                        <li class="col-6 col-md-3 col-sm-4 col-xl-2 my-4">
                            <a href="">
                                <img src={eleven} alt="Cate Img" />
                                <span>Baby Products <i>(598)</i></span>
                            </a>
                        </li>
                        <li class="col-6 col-md-3 col-sm-4 col-xl-2 my-4">
                            <a href="">
                                <img src={twelve} alt="Cate Img" />
                                <span>Sports <i>(598)</i></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Catagory;