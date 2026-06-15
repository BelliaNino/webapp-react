import { useState } from 'react';
import chatbot from '../img/agent.png'

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                className="chatbtn position-fixed border-0 bg-transparent p-0"
                onClick={() => setIsOpen(!isOpen)}
            >
                <img className='imgchat mt-2' src={chatbot} alt="Apri chat" />
            </button>

            {isOpen && (
                <div
                    className="chat-window position-fixed bg-white rounded shadow d-flex flex-column"
                >
                    <div className="topbtchat bg-primary text-dark p-3 fw-bold d-flex justify-content-between align-items-center">
                        <h3 className="mb-0">
                            Servizio Clienti
                        </h3>
                        <button className='btn text-dark p-0' onClick={() => setIsOpen(!isOpen)}>
                            <i className="bi bi-x-circle-fill" style={{ fontSize: '1.8rem' }}></i>
                        </button>
                    </div>

                    <div className="flex-grow-1 p-3 overflow-auto chat-support">
                        {/* contenuto chat */}
                    </div>
                    <div className="topbtchat d-flex align-items-center gap-2 p-2 border-top bg-light">
                        <input
                            type="text"
                            className="form-control rounded-pill"
                            placeholder="Scrivi un messaggio..."
                        />
                        <button className="btn btn-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                            <i className="bi bi-send-fill"></i>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}