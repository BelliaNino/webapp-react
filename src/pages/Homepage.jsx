import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroBanner from '../img/bannerhome.png';
import api from '../services/api';


function Homepage() {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFeatured = async () => {
            try {
                setLoading(true);
                const data = await api.getFeaturedProducts();
                setFeaturedProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchFeatured();
    }, []);

    return (
        <>
            <div className='hero-section'>
                <img className='hero-banner' src={heroBanner} alt="iScream banner" />

                <div className="featured-section fade-in-content">
                    <h2 className="text-center mb-4 text-white">Le Novità</h2>

                    {loading && <p className="text-center text-white">Caricamento...</p>}
                    {error && <p className="text-center text-white">Errore: {error}</p>}

                    <div className="row justify-content-center g-3 align-items-stretch">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="col-6 col-md-auto">
                                <div className="card h-100 d-flex flex-column featured-card">
                                    <img
                                        src={product.image_url}
                                        className="card-img-top"
                                        alt={product.name}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title featured-card-title">{product.name}</h5>
                                        <p className="card-text card-text-clamp">{product.short_description}</p>
                                        <Link to={`/ProductDetail/${product.id}`} className="text-dark text-decoration-none mt-auto align-self-end" aria-label="Dettagli">
                                            <i className="bi bi-arrow-right-circle-fill fs-2"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-4">
                        <Link to="/Show" className="btn btn-dark btn-lg">
                            Vai al Menù completo
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage;