import React from 'react';
import { Link } from 'react-router-dom';

import slogan from '../img/slogan.png'

function Homepage() {
    return (
        <>
        <div className='hero-section'>
            <img className='slogan' src={slogan} alt="" />
        </div>
        </>
    )
};

export default Homepage;