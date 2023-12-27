import React, { useContext, useState } from 'react';
import { COUNTER_CONTEXT } from '../../App';

const Search = () => {
    const { setFilter, activeCatagory, setActivecatagory, items } = useContext(COUNTER_CONTEXT)
    const [search, setSearch] = useState([]);
    return (
        <div className='mp-5 mb-5 border-top'>
            <div className="form mt-2 text-center">
                <input onChange={(event) => { setSearch(event.target.value) }} className='p-2 ps-3 pr-3 rounded-pill border' type="text" placeholder='Enter your District' />
            </div>
            <div className="zoombutton">
                {
                    items
                        .filter((val) => {
                            if (search == "") {
                                return val;
                            } else if (val.category.toLowerCase().includes(search.toLowerCase())) {
                                return val;
                            }
                        })
                        .map((val) => {
                            return (
                                <div className="template" key={val.id}>
                                    <img src={val.category} alt="" />
                                    <h3>{val.Description}</h3>
                                    <img src={val.image} alt="" />
                                </div>
                            )

                        })
                }

            </div>
        </div>
    );
};

export default Search;