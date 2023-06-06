import React from 'react';
import errorimg from './../../Img/error.jpg';
const Error = () => {
    return (
        <div>
            <div className='error-section'>
                <img className='img-fluid' src={errorimg} alt="" />
                <h3>Not page found</h3>
            </div>
        </div>
    );
};

export default Error;