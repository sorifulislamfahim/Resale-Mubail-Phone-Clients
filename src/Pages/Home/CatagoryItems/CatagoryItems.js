import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../BookingModal/BookingModal';
import CatagoryItemsCard from './CatagoryItemsCard';

const CatagoryItems = () => {
    const newsData = useLoaderData();
    
    return (
        <div>
            <div className='gap-10 grid grid-cols-1 my-20'>
                {
                    newsData.map(news => <CatagoryItemsCard
                        key={news._id}
                        news={news}
                    ></CatagoryItemsCard>)
                }
            </div>
            <BookingModal></BookingModal>
        </div>
    );
};

export default CatagoryItems;