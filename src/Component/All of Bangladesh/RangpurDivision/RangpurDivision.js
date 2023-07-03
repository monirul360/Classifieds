import React, { useContext, useEffect } from 'react';
import { COUNTER_CONTEXT } from '../../../App';

const RangpurDivision = () => {
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
        "name":"Rangpur"
        },
        {"id":2,
        "name":"Dinajpur"
        },
        {"id":3,
        "name":"Kurigram",
        },
        {"id":4,
        "name":"Gaibandha",
        },
        {"id":5,
        "name":"Lalmonirhat",
        },
        {"id":6,
        "name":"Nilphamari",
        },
        {"id":7,
        "name":"Panchagarh",
        },
        {"id":8,
        "name":"Thakurgaon",
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

export default RangpurDivision;