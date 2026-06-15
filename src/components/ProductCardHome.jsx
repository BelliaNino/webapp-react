import { Link } from "react-router-dom";

function ProductCardHome({product}) {
    return <div key={product.id} className="col-6 col-md-auto">
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
};

export default ProductCardHome;