import React from 'react';
import About from '../About/About';
import Banar from '../Banar/Banar';
import Catagory from '../Catagory/Catagory';

const Home = () => {
    return (
        <div>
            <Banar></Banar>
            <Catagory></Catagory>
            <About></About>
        </div>
    );
};

export default Home;