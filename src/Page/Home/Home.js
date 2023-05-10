import React from 'react';
import Catagory from '../../Component/Catagory/Catagory';
import img1 from './../../Img/02.jpg';
import img2 from './../../Img/03.jpg';
const Home = () => {
    return (
        <div>
            <div className="slider">
                <div className="container">
                    <h1>World's Largest Classifieds Site
                    </h1>
                    <p>Search from over 99,00,000 Active ads & Post free unlimited classifieds ads!
                    </p>
                    <div class="searchbar row">
                        <div class="col-md-8">
                            <input type="text" placeholder="What are you looking for" />
                        </div>
                        <div class="col-md-2">
                            <select>
                                <option>Select City</option>
                                <option>New York</option>
                                <option>San Joes</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <input type="submit" class="btn" value="Search Ad" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="Featured">
                <div className="container">
                    <h1>Featured <span>Ads</span></h1>
                    <div className="tips-border"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius, orci id facilisis egestas, neque purus</p>
                    <p>sagittis arcu, nec maximus quam odio nec elit Pellentesque eget ipsum mattis</p>
                    <div className="Featured-post py-4">
                        <div className="items">
                            <img src={img1} alt="" />
                        </div>
                        <div className="items">
                            <img src={img2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Catagory></Catagory>
        </div>
    );
};

export default Home;