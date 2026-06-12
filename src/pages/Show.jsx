import React from 'react';
import { Link } from 'react-router-dom';

function Show() {
    return (
        <>
            <div className='hero-products'>
                <div className='container my-3' >
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://placehold.co/286x180" className="card-img-top" alt="product" />
                        <div className="card-body">
                            <h5 className="card-title">Nome Prodotto</h5>
                            <p className="card-text">Short description del prodotto qui.</p>
                            <div className="d-flex align-items-center mb-3 justify-content-between">
                                <p className="fw-bold mb-0">€ 3,99</p>
                                <p className="mb-0">🖤🖤🖤🖤🩶</p>
                            </div>
                            <Link to='/ProductDetail'>
                                <button className="btn btn-dark">Dettagli</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Show;