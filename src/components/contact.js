import React, { useState } from 'react';
import Head from './BarreNavigation';
import FOOTER from './footer';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';

const Contact = () => {
    const [claimData, setClaimData] = useState({
        name: '',
        email: '',
        claimSubject: '',
        claimMessage: ''
    });

    const [formStatus, setFormStatus] = useState('');

    const handleClaimChange = (e) => {
        const { name, value } = e.target;
        setClaimData({
            ...claimData,
            [name]: value
        });
    };

    const handleClaimSubmit = (e) => {
        e.preventDefault();

        setFormStatus('Réclamation envoyée avec succès !');
        setClaimData({
            name: '',
            email: '',
            claimSubject: '',
            claimMessage: ''
        });
    };

    return (
        <div>
            <header>
                <Head />
            </header>

            <div className="container my-5">
                {/* Section Contact */}
                <div className="text-center mb-5">
                    <br></br>
                    
                <h2 className="display-4 text-warning">Contactez-nous</h2>
                <p style={{ fontWeight: 'bold' }}>
    Nous sommes là pour vous aider. Si vous avez une réclamation, veuillez nous la faire parvenir ici.
</p>
                </div>

                {/* Informations de Contact */}
                <div className="row justify-content-center mb-5">
                    <div className="col-md-6 col-lg-4">
                        <div className="card shadow-lg border-light">
                            <div className="card-body text-center">
                                <h4 className="card-title text-warning">Informations de contact</h4>
                                <p><FaPhoneAlt className="text-danger" /> <strong>Téléphone :</strong> +216 92519806</p>
                                <p><FaPhoneAlt className="text-danger" /> <strong>Téléphone :</strong> +216 92519805</p>
                                <p><FaPhoneAlt className="text-danger" /> <strong>Téléphone :</strong> +216 92519814</p>

                                <p><FaEnvelope className="text-danger" /> <strong>Email :</strong> contact@SHELLSESSI.com</p>
                                <p>
                                    <strong>Suivez-nous :</strong>
                                    <br />
                                    <a href="https://instagram.com/votresite" target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger btn-sm mx-1">
                                        <FaInstagram /> Instagram
                                    </a>
                                    <a href="https://facebook.com/votresite" target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger btn-sm mx-1">
                                        <FaFacebook /> Facebook
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Formulaire de Réclamation */}
                <div className="card shadow-lg border-light mb-5">
                    <div className="card-body">
                        <h4 className="card-title text-center text-warning">Formulaire de Réclamation</h4>
                        <form onSubmit={handleClaimSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Nom</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    value={claimData.name}
                                    onChange={handleClaimChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    value={claimData.email}
                                    onChange={handleClaimChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="claimSubject">Sujet de la réclamation</label>
                                <input
                                    type="text"
                                    id="claimSubject"
                                    name="claimSubject"
                                    className="form-control"
                                    value={claimData.claimSubject}
                                    onChange={handleClaimChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="claimMessage">Message de réclamation</label>
                                <textarea
                                    id="claimMessage"
                                    name="claimMessage"
                                    className="form-control"
                                    rows="4"
                                    value={claimData.claimMessage}
                                    onChange={handleClaimChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-danger w-100 mt-3">Envoyer la réclamation</button>
                        </form>

                        {/* Affichage du message de succès */}
                        {formStatus && <p className="mt-3 text-center text-success">{formStatus}</p>}
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Contact;
