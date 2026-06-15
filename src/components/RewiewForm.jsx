import { useState } from "react";
import api from "../services/api";

function ReviewForm({ show, onClose, productId, onSuccess }) {
    const [formData, setFormData] = useState({
        title: "",
        body: "",
        start_rating: 5,
        author_name: "",
        product_id: productId
    });

    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);

    if (!show) return null;

    const handleSubmit = async (event) => {
        event.preventDefault();

        setSubmitting(true);
        setError(null);

        try {
            const newReview = await api.createReview({
                ...formData,
                product_id: productId
            });

            onSuccess(newReview);

            setFormData({
                title: "",
                body: "",
                start_rating: 5,
                author_name: "",
                product_id: productId
            });

            onClose();
        } catch (error) {
            setError(error.message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div
            className="modal show d-block"
            tabIndex="-1"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            Scrivi una recensione
                        </h5>

                        <button type="button" className="btn-close" onClick={onClose}>
                        </button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            {error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )}

                            <div className="mb-3">
                                <label className="form-label">
                                    Titolo
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={formData.title}
                                    onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            title: event.target.value
                                        })
                                    }
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Recensione
                                </label>

                                <textarea
                                    className="form-control"
                                    rows="4"
                                    value={formData.body}
                                    onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            body: event.target.value
                                        })
                                    }
                                    required
                                ></textarea>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Valutazione
                                </label>

                                <select
                                    className="form-select"
                                    value={formData.start_rating}
                                    onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            start_rating: Number(event.target.value)
                                        })
                                    }
                                    required
                                >
                                    <option value={5}>5 stelle</option>
                                    <option value={4}>4 stelle</option>
                                    <option value={3}>3 stelle</option>
                                    <option value={2}>2 stelle</option>
                                    <option value={1}>1 stella</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Il tuo nome
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={formData.author_name}
                                    onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            author_name: event.target.value
                                        })
                                    }
                                    required
                                />
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>
                                Annulla
                            </button>

                            <button type="submit" className="btn btn-warning" disabled={submitting}>
                                {submitting ? "Invio..." : "Invia recensione"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ReviewForm;