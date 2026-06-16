import { useState, useEffect } from 'react';
import pennywise from '../img/pennywise-newsletter.png';

function NewsletterModal() {
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');

    useEffect(() => {
        const hasSubscribed = localStorage.getItem('newsletterSubscribed');
        if (!hasSubscribed) {
            setShowModal(true);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('newsletterSubscribed', 'true');
        setShowModal(false);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    if (!showModal) return null;

    return (
        <div className="newsletter-overlay">
            <div className="newsletter-modal">
                <button className="newsletter-close" onClick={handleClose} aria-label="Chiudi">
                    <i className="bi bi-x-lg"></i>
                </button>
                <img src={pennywise} alt="" className="newsletter-mascot" />
                <h3 className="text-center mb-3">Iscriviti... Se Hai Coraggio</h3>
                <p className="text-center mb-4">Iscrivendoti alla newsletter riceverai uno sconto del 10% sul tuo primo ordine!</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        className="form-control mb-3"
                        placeholder="La tua email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className="btn btn-dark w-100">Iscrivimi</button>
                </form>
            </div>
        </div>
    );
}

export default NewsletterModal;