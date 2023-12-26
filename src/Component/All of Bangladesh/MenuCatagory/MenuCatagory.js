import React, { useContext, } from 'react';
import { Link } from 'react-router-dom';
import { COUNTER_CONTEXT } from '../../../App';

const MenuCatagory = () => {
    // const { items, setFilter } = useContext(COUNTER_CONTEXT);
    // const filterCatagory = catItem => {
    //     const result = items.filter((curData) => {
    //         return curData.type === catItem;
    //     })

    //     setFilter(result)
    // }

    const menubar = [
        {
            "id": 1,
            "name": "House"
        },
        {
            "id": 2,
            "name": "Mass",
        },
        {
            "id": 3,
            "name": "Hostel",
        },
        {
            "id": 4,
            "name": "Office",
        },
    ]
    return (
        <div>
            {/* {
                menubar.map(menu => <Link onClick={() => filterCatagory(menu.name)}>{menu.name}</Link>)
            } */}

        </div>
    );
};

export default MenuCatagory;