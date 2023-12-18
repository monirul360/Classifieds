import React, { useContext, useEffect } from 'react';
import { COUNTER_CONTEXT } from '../../../App';

const RajshahiDivision = () => {
    const { setFilter, activeCatagory, setActivecatagory, items } = useContext(COUNTER_CONTEXT)

    useEffect(() => {

        const filterCatagory = items.filter(item => activeCatagory === "All" ? item : item.district === activeCatagory);
        setFilter(filterCatagory)

    }, [setFilter, activeCatagory, setActivecatagory, items])

    const RajshahiDivision = [
        {
            "id": 0,
            "name": "All"

        },
        {
            "id": 1,
            "name": "Rajshahi"
        },
        {
            "id": 2,
            "name": "Natore"
        },
        {
            "id": 3,
            "name": "Pabna",
        },
        {
            "id": 4,
            "name": "Bogura",
        },
        {
            "id": 5,
            "name": "Chapainawabganj",
        },
        {
            "id": 6,
            "name": "Naogaon",
        },
        {
            "id": 7,
            "name": "Joypurhat",
        },
    ]
    return (
        <div>
            {
                RajshahiDivision.map(rajshahi => <li
                    style={{ cursor: "pointer", width: 120 }}
                    onClick={() => setActivecatagory(rajshahi.name)}
                    setActivecatagory={setActivecatagory}
                    active={activeCatagory}
                    className={`${activeCatagory === rajshahi.name && ' bg-success rounded ps-2'}`}
                >{rajshahi.name}</li>)
            }
        </div>
    );
};

export default RajshahiDivision;