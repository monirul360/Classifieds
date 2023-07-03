
import React, { useContext, useEffect } from 'react';
import { COUNTER_CONTEXT } from '../../../App';



const SylhetDivision = () => {
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
        "name":"Sylhet"
        },
        {"id":2,
        "name":"Habiganj",
        },
        {"id":3,
        "name":"Moulvibazar",
        },
        {"id":4,
        "name":"Sunamganj",
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

export default SylhetDivision;
