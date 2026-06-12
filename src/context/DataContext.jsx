import { useState, useEffect, createContext } from "react";

// Context
const DataContext = createContext(null);

// Definisco l'URL della mia API.
const API_URL = 'http://localhost:3000/products';
// URL per ottenere i 5 prodotti featured (più recenti)
const FEATURED_URL = 'http://localhost:3000/products/featured';


// componente Provider per fornire i dati a tutti i figli
function DataProvider({ children }) {

    // STEP 4: Stati che servono per gestire i dati.
    const [items, setItems] = useState([]);     // qui finiranno i dati per le card
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // Stato per i prodotti featured che verranno mostrati nel carosello
    const [featuredItems, setFeaturedItems] = useState([]);

    // useEffect per la fetch 
    useEffect(() => {

        const fetchItems = async () => {
            setLoading(true);
            setError(null);

            try {
                const res = await fetch(API_URL);
                if (!res.ok) throw new Error('Errore nel fetch');

                const data = await res.json();
                setItems(data.results);

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();

    }, []);

    // useEffect per caricare i prodotti featured al montaggio
    useEffect(() => {
        getFeaturedProducts();
    }, []);

    // Funzioni CRUD (Create, Update, Delete).

    // CREATE
    const createItem = async (payload) => {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });
        const newItem = await res.json();

        setItems(prev => [...prev, newItem]);

        return newItem;
    };

    // UPDATE
    const updateItem = async (id, payload) => {
        const res = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });
        const updated = await res.json();

        setItems(prev => prev.map(i => i.id === id ? updated : i));

        return updated;
    };

    // DELETE
    const deleteItem = async (id) => {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });

        setItems(prev => prev.filter(i => i.id !== id));
    };

    // Funzione per ottenere i 5 prodotti featured
    const getFeaturedProducts = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(FEATURED_URL);
            if (!res.ok) throw new Error('Errore nel fetch dei featured');
            const data = await res.json();
            setFeaturedItems(data.results);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const value = {
        items,
        loading,
        error,
        createItem,
        updateItem,
        deleteItem,
        getFeaturedProducts,
        featuredItems,
        
    };



    return (
        <DataContext value={value}>
            {children}
        </DataContext>
    );
}

export { DataContext, DataProvider };