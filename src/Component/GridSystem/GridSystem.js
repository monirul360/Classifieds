import React, { useContext, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { COUNTER_CONTEXT } from '../../App';
import MenuCatagory from '../All of Bangladesh/MenuCatagory/MenuCatagory';
const GridSystem = () => {

    const {filter}= useContext(COUNTER_CONTEXT);
    const [serch,setSerch]=useState('')
    return (
        <div id='grid_container' className='ms-2'>

                  <div className='d-flex  d-lg-none justify-content-center'>
                        <form  className='d-flex' role="search">
                            <input onChange={(e)=>setSerch(e.target.value)} className='form-control me-2' type="text"placeholder="Search" aria-label="Search" />
                            {/* <button className='btn btn-outline-success'>Search</button> */}
                        </form>
                    </div>

           <div className='d-flex justify-content-between align-items-center'> 
                <div>
                    <Link to={'/'}>
                        <AiOutlineArrowLeft className='display-4 cursor: pointer'></AiOutlineArrowLeft>
                    </Link>
                </div>

                    <div className='menu-catagory'>
                        <MenuCatagory></MenuCatagory>
                    </div>

                    <div className='d-flex align-items-center d-none d-lg-block'>
                        <form  className='d-flex' role="search">
                            <input onChange={(e)=>setSerch(e.target.value)} className='form-control me-2' type="text"placeholder="Search" aria-label="Search" />
                            {/* <button className='btn btn-outline-success'>Search</button> */}
                        </form>
                    </div>
                 </div>

            <div className='row  '>
             {
                filter.filter((val)=>{
                    if(serch == "")
                    return val;

                    else if(val.category.toLowerCase().includes(serch.toLowerCase())){
                        return val;
                     }

                }).map(item=><> 
                <div class="col-md-12 col-lg-6 mb-3 mb-sm-0 g-3 mt-5">
                        <div class="card ">
                        <div class="card-body row">
                            <div className='col'><img className='w-100 h-100' src={item.img} alt="" /></div>
                            <div className='col'>
                            <div className="info">
                                    <h3>Name:{item.category}</h3>
                                    {/* <h3>ASTRA @ 8 Kia Peng SuitesOpens in new window </h3> */}
                                    <div className="location d-flex align-items-center my-2">
                                        <div className="icon">
                                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        </div>
                                        <div className="text">
                                            <p>Bogura,Dhaka,Bangladesh</p>
                                        </div>
                                    </div>
                                    <p className='status'>Status: <span>Family room</span></p>
                                    <p className='description'>Offering an outdoor swimming pool and a fitness center, as well as a terrace, ASTRA @ 8 Kia Peng Suites is located in the center of Kuala Lumpur, not far from KLCC Park and Kuala Lumpur Convention...</p>
                                    <h4 className='price'>BDT: <span>1400/Monthly</span></h4>
                                    <Link className='btn btn-primary' to="/">BOOKIN NOW</Link>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </>)
             }
            </div>
        </div>
    );
};

export default GridSystem;