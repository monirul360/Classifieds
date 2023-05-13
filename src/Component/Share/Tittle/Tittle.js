import React from 'react';
import { Link } from 'react-router-dom';

const Tittle = (props) => {
    return (
        <div className='page-tittle'>
            <div className="container">
                <div className="page-tittle-flex">
                    <div>
                        <h3>{props?.tittle}</h3>
                    </div>
                    <div>
                        <Link to="/">Home /</Link>
                        <span>{props?.self}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tittle;