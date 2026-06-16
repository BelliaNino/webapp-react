import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { Link } from 'react-router-dom';

function Favorites() {
    const { wishlistItems, toggleWishlist } = useContext(DataContext);

    const totalPrice = wishlistItems.reduce((acc, item) => acc + Number(item.price), 0);

    
    return (
    <section className='hero-favorites'>
        <div className="container py-4">
            {wishlistItems.length === 0 ? (
                <div className="d-flex flex-column align-items-center justify-content-center py-5">
                    <i className="bi bi-heart text-warning" style={{ fontSize: '4rem' }}></i>
                    <h4 className="mt-3 text-dark">Nessun preferito ancora</h4>
                    <Link to="/Show" className="btn btn-dark mt-3">Vai al Menù</Link>
                </div>
            ) : (
                <>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="fw-bold mb-0 text-dark">I tuoi preferiti</h2>
                        <span className="badge bg-dark fs-6">Totale: € {totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="d-flex flex-column gap-3">
                        {wishlistItems.map(item => (
                            <div key={item.id} className="card border-0 shadow-sm">
                                <div className="row g-0 align-items-center">
                                    <div className="col-4 col-md-2">
                                        <img
                                            src={item.image_url}
                                            alt={item.name}
                                            className="img-fluid rounded-start"
                                            style={{ height: '120px', objectFit: 'cover', width: '100%' }}
                                        />
                                    </div>
                                    <div className="col-8 col-md-10">
                                        <div className="card-body d-flex justify-content-between align-items-center">
                                            <div>
                                                <h5 className="card-title mb-1">{item.name}</h5>
                                                <p className="text-muted small mb-1">{item.description}</p>
                                                <span className="fw-bold">€ {Number(item.price).toFixed(2)}</span>
                                            </div>
                                            <div className="d-flex gap-2">
                                                <Link to={`/ProductDetail/${item.id}`} className="btn btn-sm btn-dark">
                                                    <i className="bi bi-arrow-right-circle-fill"></i>
                                                </Link>
                                                <button
                                                    className="btn btn-sm btn-danger"
                                                    onClick={() => toggleWishlist(item)}
                                                >
                                                    <i className="bi bi-heart-fill"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    </section>
);
}

export default Favorites;