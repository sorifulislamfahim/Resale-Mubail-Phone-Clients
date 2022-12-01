import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../BookingModal/BookingModal';
import CatagoryItemsCard from './CatagoryItemsCard';

const CatagoryItems = () => {
    const products = useLoaderData();
    const [product, setProduct] = useState(null);

    return (
        <div>
            <div className='gap-10 grid grid-cols-1 my-20'>
                {
                    products.map(product => <CatagoryItemsCard

                        key={product._id}
                        product={product}
                        setProduct={setProduct}
                    ></CatagoryItemsCard>)
                }
            </div>
            {product &&
                <BookingModal
                    product={product}
                ></BookingModal>
            }
        </div>
    );
};

export default CatagoryItems;