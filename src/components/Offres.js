import React from 'react';
import offres2 from '../images/offre2.png'; 
import offres3 from '../images/offre3.png'; 
import Head from './BarreNavigation';
import FOOTER from './footer';

const Offres = () => {
    return (
        <div className='container-fluid p-0' style={{ backgroundColor: '#f8f9fa' }}>
            <Head />
            <br></br>
            <div className="container my-5 mt-5">
            <h2 className="text-center mb-4 text-warning">Nos Offres Spéciales</h2>
                <p className="text-center mb-5">
                    Découvrez nos offres exceptionnelles à la station Shell. Profitez de réductions et de services exclusifs pour nos clients.
                </p>

                <div className="row justify-content-center">
                    {/* Offre 1 */}
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="card shadow-lg border-warning">
                            <img src={offres3} className="card-img-top" alt="Offre 1" />
                            <div className="card-body text-center">
                                <h5 className="card-title text-warning">Offre Spéciale 1</h5>
                                <p className="card-text">
                                    Profitez d'une réduction de <strong>30%</strong> sur tous nos services.
                                </p>
                                <a href="#" className="btn btn-warning">Voir l'offre</a>
                            </div>
                        </div>
                    </div>

                    {/* Offre 2 */}
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="card shadow-lg border-warning">
                            <img src={offres2} className="card-img-top" alt="Offre 2" />
                            <div className="card-body text-center">
                                <h5 className="card-title text-warning">Offre Spéciale 2</h5>
                                <p className="card-text">
                                    Obtenez un <strong> gratuit</strong> pour toute vidange effectuée à la station.
                                </p>
                                <a href="#" className="btn btn-warning">Voir l'offre</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <FOOTER />
        </div>
    );
};

export default Offres;
