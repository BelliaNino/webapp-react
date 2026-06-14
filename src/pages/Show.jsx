import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import { useContext } from 'react';
import { useState } from 'react';

function Show() {
    const { items, loading, error, fetchItems } = useContext(DataContext)

    const [newTheme, setNewTheme] = useState(false)

    const toggleTheme = () => {
        setNewTheme(!newTheme)
    }

    if (loading) return (
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
    if (error) return <Navigate to='/NotFound' />

    return (

        <>
            <div className='hero-products'>
                <div className='container my-3' >
                    <div className='btn-filter  d-flex justify-content-center gap-2 flex-wrap'>
                        <div className='selectcategories'>
                            <div className={`btnproduct ${newTheme ? 'd-none' : 'd-block'}`}>
                            <button className='btn btn-warning rounded-pill fw-bold border-dark border-3' onClick={() => fetchItems()}>Tutti</button>
                            <button className='btn btn-warning rounded-pill fw-bold border-dark border-3' onClick={() => fetchItems(6)}>Coni</button>
                            <button className='btn btn-warning rounded-pill fw-bold border-dark border-3' onClick={() => fetchItems(7)}>Coppette</button>
                            <button className='btn btn-warning rounded-pill fw-bold border-dark border-3' onClick={() => fetchItems(8)}>Granite</button>
                            <button className='btn btn-warning rounded-pill fw-bold border-dark border-3' onClick={() => fetchItems(9)}>Gusti Speciali</button>
                            <button className='btn-le btn btn-warning rounded-pill fw-bold border-3' onClick={() => fetchItems(10)}>Limited Edition</button>
                            </div>
                            <div className={`btntheme ${newTheme ? 'd-block' : 'd-none'}`}>
                            <button className='btn btn-dark rounded-pill fw-bold border-warning border-3' onClick={() => fetchItems(1)}>Zombie</button>
                            <button className='btn btn-dark rounded-pill fw-bold border-warning border-3' onClick={() => fetchItems(2)}>Fantasmi</button>
                            <button className='btn btn-dark rounded-pill fw-bold border-warning border-3' onClick={() => fetchItems(3)}>Serial Killer</button>
                            <button className='btn btn-dark rounded-pill fw-bold border-warning border-3' onClick={() => fetchItems(4)}>Villain</button>
                            <button className='btn btn-dark rounded-pill fw-bold border-warning border-3' onClick={() => fetchItems(5)}>Vampiri</button>
                            </div>
                            <button className={`rounded-pill fw-bold border-warning border-3 ${newTheme ? 'btn btn-warning border-dark' : 'btn btn-dark border-warning'}`} onClick={toggleTheme}>
                                {newTheme ? 'Prodotto' : 'Tema'}
                            </button>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center flex-wrap">
                        {items.map(item => (
                            <div className="card m-3" style={{ width: "18rem" }} key={item.id}>
                                <img src={item.image_url} className="card-img-top" alt={item.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.short_description}</p>
                                    <div className="d-flex align-items-center mb-3 justify-content-between">
                                        <p className="fw-bold mb-0">€ {item.price}</p>
                                    </div>
                                    <Link to={`/ProductDetail/${item.id}`}>
                                        <button className="btn btn-dark">Dettagli</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};

export default Show;