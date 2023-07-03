import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { COUNTER_CONTEXT } from '../../../App';
import { MdOutlineGridView } from "react-icons/md";
import MenuCatagory from '../../All of Bangladesh/MenuCatagory/MenuCatagory';

const Dhaka = () => {
    
    const [serch,setSerch]=useState('')

    const {filter}=useContext(COUNTER_CONTEXT)
 
   
    return (
        <div className='city-filter'>
            <div className="tittle">
                <h3>Dhaka Division , <span>Dhaka</span></h3>
                <p>Found results <span>50+</span></p>
            </div>

              <div className="d-flex align-items-center d-lg-none mt-3 mb-2 justify-content-center">
                    <div  role="search">
                        <input className='form-control me-2' type="text"placeholder="Search" aria-label="Search" />
                        {/* <button className='btn btn-outline-success'>Search</button> */}
                    </div>
                </div>
         
            <div className='d-flex justify-content-between'>
                    <div className='d-flex align-items-center'>
                     <Link to={'Grid'}> <MdOutlineGridView className='display-4'></MdOutlineGridView></Link>
                    </div>
                    
                <div className='filter-catagory'>
                    <MenuCatagory></MenuCatagory>
                </div> 
                 

                  <div className='d-flex  d-none d-lg-block align-items-center '>
                     <form  className='d-flex' role="search">
                        <input onChange={(e)=>setSerch(e.target.value)} className='form-control me-2' type="text"placeholder="Search" aria-label="Search" />
                        {/* <button className='btn btn-outline-success'>Search</button> */}
                     </form>
                  </div>
            </div>

         
           
            {/* content section */}

              {
                filter.filter((val)=>{
                    if(serch == "")
                    return val;

                    else if(val.category.toLowerCase().includes(serch.toLowerCase())){
                        return val;
                     }

                }).map(item => 

                    <div className="col-md-12 col-lg-12 gridlist">
                        <div style={{ border: "1px solid #c6c6c6" }} className='my-4  p-3'>
                            <div className="d-flex res-flex">
                                <div className="adimg">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="info">
                                    <h3>Name:{item.category}</h3>
                                    <h3>{item.type}</h3>
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

                )
            } 
        </div>
    );
};

export default Dhaka;