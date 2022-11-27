import React from 'react';

const CatagoryItemsCard = ({ news }) => {
    const { name, uses, price, location, image_url, details, title, author } = news;
    return (
        <div className="card lg:card-side bg-orange-50 shadow-xl p-7">
            <figure className='lg:w-1/2 lg:p-20'><img src={image_url} alt="Album" /></figure>
            <div className="card-body ">
                <h2 className="card-title text-6xl">{name}</h2>
                <div className='text-2xl font-mono text-orange-600'>
                    <h4>Details: {details}</h4>
                    <h4 >Location: {location}</h4>
                    <h4>Uses Time: {uses}y</h4>
                    <h4>Buying Price: ${price.orginal}</h4>
                    <h4>Selling Price: ${price.resale}</h4>
                </div>
                <h4 className='my-10 text-lg'> <span className='underline font-semibold'>Description Of Mubail:</span> {title}</h4>
                <h5 className='text-2xl text-center font-serif underline'>Sellar Information</h5>
                <div className='flex items-center justify-evenly gap-8 text-xl font-semibold'>
                    <img className='w-14 rounded-full' src={author.img} alt="" />
                    <h1>Name: {author.name}</h1>
                    <h4>Phone: {author.number}</h4>
                </div>
                <div className="card-actions justify-between my-10">
                    <h2 className='text-2xl font-serif'>{author.published_date}</h2>
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default CatagoryItemsCard;