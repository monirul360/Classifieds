import React, { useContext, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { COUNTER_CONTEXT } from '../../App';
import MenuCatagory from '../All of Bangladesh/MenuCatagory/MenuCatagory';
const GridSystem = () => {

    const { filter } = useContext(COUNTER_CONTEXT);
    const [serch, setSerch] = useState('')
    return (
        <div id='grid_container' className='ms-2'>
            <div div className='d-flex justify-content-between align-items-center' >
                <div>
                    <Link to={'/'}>
                        <AiOutlineArrowLeft className='display-4 cursor: pointer'></AiOutlineArrowLeft>
                    </Link>
                </div>

                <div className='menu-catagory'>
                    <MenuCatagory></MenuCatagory>
                </div>
            </div>
            <div className='row'>
                {
                    filter.map(r =>

                        <div>
                            <img src={r?.image} alt="" />
                            <p>{r.name}</p>
                        </div>

                    )
                }
            </div>
            {/* <div className='row  '>
                {
                    filter.filter((val) => {
                        if (serch == "")
                            return val;

                        else if (val.category.toLowerCase().includes(serch.toLowerCase())) {
                            return val;
                        }

                    }).map(item => <>
                        <div class="col-md-12 col-lg-6 mb-3 mb-sm-0 g-3 mt-5">
                            <div class="card ">
                                <div class="card-body row">
                                    <div className='col'><img className='w-100 h-100' src={item.image} alt="" /></div>
                                    <div className='col'>
                                        <div className="info">
                                            <h3>Name:{item?.Title}</h3>
                                            <div className="location d-flex align-items-center my-2">
                                                <div className="icon">
                                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                                </div>
                                                <div className="text">
                                                    <p>{item?.district}</p>
                                                </div>
                                            </div>
                                            <p className='status'>Status: <span>{item?.category}</span></p>
                                            <p className='description'>{item?.Description}</p>
                                            <h4 className='price'>BDT: <span>{item?.price}/{item?.per}</span></h4>
                                            <Link className='btn btn-primary' to="/">BOOKIN NOW</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div> */}
        </div >
    );
};

export default GridSystem;