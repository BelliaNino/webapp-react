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
                <img className='slogan' src={slogan} alt="" style={{ width: '35%', top: '-30px' }} />
            </div>
            <div className="featured-section">
                {/* Sezione Card Featured */}
                <div className="row justify-content-center g-3 align-items-stretch">
                    {featuredItems.slice(0, 5).map((product) => (
                        <div key={product.id} className="col-auto">
                            <div className="card h-100 d-flex flex-column" style={{ width: '250px' }}>
                                <img
                                    src={product.image_url}
                                    className="card-img-top"
                                    alt={product.name}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text"><strong>€ {product.price}</strong></p>
                                    <Link to={`/show/${product.id}`} className="btn btn-dark mt-auto">
                                        Dettagli
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default Homepage;