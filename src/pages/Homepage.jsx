import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';


import slogan from '../img/slogan.png'

function Homepage() {
    const { featuredItems } = useContext(DataContext);
    return (
        <>
            <div className='hero-section'>
                <img className='slogan' src={slogan} alt="" />
            </div>
            <div>
                {/* Carosello Bootstrap */}
                <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {featuredItems.map((product, index) => (
                            <div key={product.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <img src={product.image_url} className="d-block w-100" alt={product.name} />
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </button>
                </div>
            </div>
        </>
    )
};

export default Homepage;