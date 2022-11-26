import React from 'react';
import mubail from '../../../assets/muba.webp'

const About = () => {
    return (
        <div className="hero bg-base-200 my-10">
            <div className="hero-content flex-col lg:flex-row">
                <img alt='' src={mubail} className="lg:w-1/2 rounded-lg shadow-2xl" />
                <div className='mx-8'>
                    <h5 className='text-xl font-semibold text-orange-500 my-4'>About</h5>
                    <h1 className="text-5xl font-bold text-sky-600">This is resale Mubails</h1>
                    <p className="py-6">This website is selling mubail phones and collective mubail phone secend hand. This is best web page whic easyly one client sell any mubail phones. </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;