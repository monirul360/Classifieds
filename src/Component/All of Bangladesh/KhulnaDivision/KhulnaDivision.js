import React, { useContext, useEffect } from 'react';
import { COUNTER_CONTEXT } from '../../../App';

const KhulnaDivision = () => {
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
        "name":"Khulna"
        },
        {"id":2,
        "name":"Bagerhat"
        },
        {"id":3,
        "name":"Jashore",
        },
        {"id":4,
        "name":"Jhenaidah",
        },
        {"id":5,
        "name":"Kushtia",
        },
        {"id":6,
        "name":"Magura",
        },
        {"id":7,
        "name":"Meherpur",
        },
        {"id":8,
        "name":"Narail",
        },
        {"id":9,
        "name":"Satkhira",
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

export default KhulnaDivision;