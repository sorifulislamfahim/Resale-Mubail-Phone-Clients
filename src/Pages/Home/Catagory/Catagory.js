import React, { useEffect, useState } from 'react';
import CatagoryCard from './CatagoryCard';

const Catagory = () => {
    const [catagorys, setCatagorys] = useState([])

    useEffect(() => {
        fetch('https://resale-mubail-phones-server.vercel.app/catagorys')
            .then(res => res.json())
            .then(data => setCatagorys(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                catagorys.map(catagory => <CatagoryCard
                    key={catagory.id}
                    catagory={catagory}
                ></CatagoryCard>)
            }
        </div>
    );
};

export default Catagory;