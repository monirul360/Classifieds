import React, { useEffect, useState } from 'react';
import BlogeDetails from './Blog';
import Tittle from './../../Component/Share/Tittle/Tittle';
const Bloges = () => {
    const [bloge, setBloge] = useState([]);

    useEffect(() => {
        fetch(`bloge.json`)
            .then((res) => res.json())
            .then((data) => setBloge(data))
    })
    return (
        <>
            <Tittle self="Blog" tittle="Blog"></Tittle>
            <div className='bloge-container'>
                <div className='blog-items'>
                    {
                        bloge.map(blogData =>
                            <BlogeDetails blogData={blogData}
                                key={blogData}
                            ></BlogeDetails>)
                    }
                </div>
            </div>
        </>
    );
};

export default Bloges;