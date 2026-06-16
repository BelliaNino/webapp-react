import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import { useContext } from 'react';
import { useState } from 'react';

import store from '../img/locale.png'
import storeout from '../img/localefuori.png'

function AboutUs() {
    return (
        <>
            <div className='hero-wwa'>
                <div className="container my-5">

                    <h1 className="text-center text-dark mb-5">Chi Siamo</h1>

                    {/* Storia della gelateria */}
                    <div className="card bg-dark text-light border-warning mb-5 p-4">
                        <div className="card-body">
                            <h2 className="card-title text-warning mb-3">La Nostra Storia</h2>
                            <p className="card-text text-white fst-italic small mb-3">
                                Nessuno ricorda davvero come sia nata iScream. E forse è meglio così.
                            </p>
                            <p className="card-text text-white lh-base mb-3">
                                La leggenda vuole che il fondatore stesse sperimentando il gusto perfetto per una maratona horror, quando <strong>un fulmine colpì il laboratorio</strong>. Le luci si spensero. Dal congelatore arrivò un urlo: <strong>"I SCREAM!"</strong>
                            </p>
                            <p className="card-text text-white lh-base mb-3">
                                Quando la corrente tornò, sul bancone c'era una vaschetta mai vista prima. Era deliziosa. <strong>Sembrava fissarci.</strong> Decidemmo di ignorare il secondo dettaglio.
                            </p>
                            <p className="card-text text-white lh-base mb-3">
                                Da quel giorno, iScream è la gelateria dove i <strong>brividi sono inclusi nel prezzo</strong>: troverai sorbetti vendicativi, stracciatelle maledette e coni così buoni da far urlare di gioia.
                            </p>
                            <p className="card-text text-white fst-italic small mt-3">
                                Finora <strong>nessun cliente è scomparso</strong>. Almeno, nessuno che abbia lasciato una recensione. ★★★★★
                            </p>
                        </div>
                    </div>

                    {/* Foto del locale */}
                    <div className="row mb-5 g-4">
                        <div className="col-md-6">
                            <div className="card bg-dark border-warning p-4">
                                <img
                                    src={store}
                                    className="card-img-top rounded-1"
                                    alt="Interno del locale"
                                    style={{ objectFit: 'cover', height: '350px', backgroundColor: '#333' }}
                                />
                                <div className="card-body">
                                    <p className="card-text text-center text-secondary mb-0">

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card bg-dark border-warning p-4">
                                <img
                                    src={storeout}
                                    className="card-img-top rounded-1"
                                    alt="Esterno del locale"
                                    style={{ objectFit: 'cover', height: '350px', backgroundColor: '#333' }}
                                />
                                <div className="card-body">
                                    <p className="card-text text-center text-secondary mb-0">

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contatti e indirizzo */}
                    <div className="card bg-dark text-light border-warning mb-5 p-4">
                        <div className="card-body">
                            <h2 className="card-title text-warning mb-4">Contatti</h2>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="bi bi-geo-alt-fill text-white fs-4"></i>
                                        <div>
                                            <h6 className="mb-0 text-white tw-bold">Indirizzo</h6>
                                            <p className="mb-0 text-white">
                                                29 Neibolt Street, Derry, Maine
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="bi bi-telephone-fill text-white fs-4"></i>
                                        <div>
                                            <h6 className="mb-0 text-white tw-bold">Telefono</h6>
                                            <p className="mb-0 text-white">
                                                055 98 765 43
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="bi bi-envelope-fill text-white fs-4"></i>
                                        <div>
                                            <h6 className="mb-0 text-white tw-bold">Email</h6>
                                            <p className="mb-0 text-white">
                                                icecream@iscream.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="border-white" />
                            <div className="d-flex align-items-center gap-2">
                                <i className="bi bi-clock-fill text-white fs-4"></i>
                                <div>
                                    <h6 className="mb-0 text-white tw-bold">Orari di apertura</h6>
                                    <p className="mb-0 text-white">
                                        Tutti i giorni: 12:00 - 23:00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mappa */}
                    <div className="card bg-dark border-warning p-4">
                        <div className="card-body">
                            <h2 className="card-title text-warning mb-3">Vieni a trovarci</h2>
                            <div className="ratio ratio-16x9">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=PLACEHOLDER"
                                    style={{ border: 0, borderRadius: '0.375rem' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Mappa iScream"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};

export default AboutUs;