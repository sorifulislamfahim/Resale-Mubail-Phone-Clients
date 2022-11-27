import React from 'react';
import { Link } from 'react-router-dom';

const CatagoryCard = ({catagory}) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-3xl">{catagory.name} Brand</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <Link to={`/catagory/${catagory.id}`}>
                <button className="btn btn-primary">View All</button>
                </Link>
            </div>
        </div>
    );
};

export default CatagoryCard;