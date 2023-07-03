import React, { useContext, useEffect } from 'react';
import { COUNTER_CONTEXT } from '../../../App';

const RajshahiDivision = () => {
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
        "name":"Rajshahi"
        },
        {"id":2,
        "name":"Natore"
        },
        {"id":3,
        "name":"Pabna",
        },
        {"id":4,
        "name":"Bogura",
        },
        {"id":5,
        "name":"Chapainawabganj",
        },
        {"id":6,
        "name":"Naogaon",
        },
        {"id":7,
        "name":"Joypurhat",
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

export default RajshahiDivision;