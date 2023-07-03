
import React, { useContext, useEffect } from 'react';
import { COUNTER_CONTEXT } from '../../../App';


const ChittagongDivison = () => {
    const {setFilter,activeCatagory,setActivecatagory,items}=useContext(COUNTER_CONTEXT)
 
    useEffect(()=>{
    
        const filterCatagory = items.filter(item=>  activeCatagory === "All" ? item: item.category === activeCatagory);
        setFilter(filterCatagory)
    
    },[setFilter,activeCatagory,setActivecatagory,items])

    const dhakaDivision= [
        {"id":0,
        "name":"All"
        
        },
        {"id":1,
        "name":"Chittagong"
        },
        {"id":2,
        "name":"Brahmanbaria",
        },
        {"id":3,
        "name":"Comilla",
        },
        {"id":4,
        "name":"Chandpur",
        },
        {"id":5,
        "name":"Lakshmipur",
        },
        {"id":6,
        "name":"Noakhali",
        },
        {"id":7,
        "name":"Feni",
        },
        {"id":8,
        "name":"Khagrachhari",
        },
        {"id":9,
        "name":"Rangamati",
        },
        {"id":10,
        "name":"Bandarban",
        },
        {"id":11,
        "name":"Cox's Bazar",
        },
     ]
    return (
        <div>
            {
                          dhakaDivision.map(dhaka=> <li
                          style={{cursor:"pointer",width:120}}
                          onClick={()=> setActivecatagory(dhaka.name)}
                          setActivecatagory={ setActivecatagory}
                          active={activeCatagory}
                          className={`${ activeCatagory === dhaka.name && ' bg-success rounded ps-2'}`}
                          >{dhaka.name}</li>)
             }
        </div>
    );
};

export default ChittagongDivison;
