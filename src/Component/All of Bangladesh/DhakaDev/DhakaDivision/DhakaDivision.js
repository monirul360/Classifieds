import React, { useContext, useEffect } from 'react';
import { COUNTER_CONTEXT } from '../../../../App';

const DhakaDivision = () => {
    const { setFilter, activeCatagory, setActivecatagory, items } = useContext(COUNTER_CONTEXT)

    useEffect(() => {
        const filterCatagory = items.filter(item => activeCatagory === "All" ? item : item.category === activeCatagory);
        setFilter(filterCatagory)
        // console.log(item.category)
    }, [setFilter, activeCatagory, setActivecatagory, items])

    const dhakaDivision = [
        {
            "id": 0,
            "name": "All"

        },
        {
            "id": 1,
            "name": "Dhaka"
        },
        {
            "id": 2,
            "name": "Gazipur",
        },
        {
            "id": 3,
            "name": "Kishoreganj",
        },
        {
            "id": 4,
            "name": "Manikganj",
        },
        {
            "id": 5,
            "name": "Munshiganj",
        },
        {
            "id": 6,
            "name": "Narayanganj",
        },
        {
            "id": 7,
            "name": "Narsingdi",
        },
        {
            "id": 8,
            "name": "Tangail",
        },
        {
            "id": 9,
            "name": "Faridpur",
        },
        {
            "id": 10,
            "name": "Gopalganj",
        },
        {
            "id": 11,
            "name": "Madaripur",
        },
        {
            "id": 12,
            "name": "Rajbari",
        },
        {
            "id": 13,
            "name": "Shariatpur",
        },]
    return (
        <div>
            {
                dhakaDivision.map(dhaka => <li
                    style={{ cursor: "pointer", "width": "100%" }}
                    onClick={() => setActivecatagory(dhaka.name)}
                    setActivecatagory={setActivecatagory}
                    active={activeCatagory}
                    className={`${activeCatagory === dhaka.name && ' bg-primary text-white rounded ps-3 py-1'}`}
                >{dhaka.name}</li>)
            }
        </div>
    );
};

export default DhakaDivision;