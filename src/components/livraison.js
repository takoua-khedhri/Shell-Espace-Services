import React, { useEffect, useState } from 'react';
import livraisonImage1 from '../images/img1.png'; // Ajoutez vos images ici
import livraisonImage2 from '../images/img2.png';
import livraisonImage3 from '../images/img3.png';
import livraisonImage4 from '../images/img4.png';
import transport_gasoil1 from '../images/transport_gasoil.png';
import transport_gasoil2 from '../images/transport_gasoil2.png';
import '../css/Page_css.css';
import NavigateToStation from './Geolocalisation';
import Head from './BarreNavigation';
import FOOTER from './footer';


const Livraison = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [livraisonImage1,transport_gasoil1, transport_gasoil2, livraisonImage2, livraisonImage3, livraisonImage4];

    useEffect(() => {
        const interval = setInterval(()=> {

            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

        },1500);
  return () => clearInterval(interval);
    },[images.length]
);

    return (
        <div className="container my-5" id="body">
            <header>
<Head/>
            </header>
            <br></br>

            {/* Section Carousel */}
            <div className='d-flex justify-content-center align-items-center'>

            <div className="position-relative carousel-container">
                <img 
                  src={images[currentImageIndex]}
                  alt={`Livraison ${currentImageIndex +1}`}
                  className='img-fluid rounded shadow mx-auto'
                  style={{  width: '100%', 
                    maxWidth: '1200px', 
                    height: '700px', 
                    objectFit: 'cover',transition:'opacity 1s ease-in-out'}}
                  />
                  <div className="carousel-overlay text-white">

                    </div>
                    
           <div className='d-flex justify-content-center align-items-center'>
                    <div className='text-center'>
                       <h3 className="text-primary fw-bold">Livraison de carburant en un clic.</h3>
                       <br></br>
                        <a href="tel:+216 92519806" className="btn btn-primary btn-lg">Demandez un Devis</a>
                  </div>
                   </div>
                 </div>
                    </div>
                   
                
               

            {/* Section Bannière */}
            <div className="text-center">
                <p className="lead text-muted">
                    Nous couvrons 24 régions pour répondre à vos besoins en carburant, 24h/24 et 7j/7.
                </p>
            </div>


            {/* Section Avantages */}
            <section className="mt-5">
                <h2 className="text-primary fw-bold text-center mb-4">Pourquoi Nous Choisir ?</h2>
                <div className="row g-4">
                    {[
                        { title: "Livraison Rapide", icon: "fas fa-truck", text: "Votre carburant livré en un temps record." },
                        { title: "Qualité Garantie", icon: "fas fa-gas-pump", text: "Carburants premium pour une performance optimale." },
                        { title: "Service 24/7", icon: "fas fa-clock", text: "Toujours disponible pour vos besoins." },
                        { title: "Couverture Nationale", icon: "fas fa-map-marker-alt", text: "Nous livrons dans 24 régions." },
                    ].map((item, index) => (
                        <div className="col-md-3 text-center" key={index}>
                            <i className={`${item.icon} fa-3x text-primary mb-3`}></i>
                            <h3 className="h5 fw-bold">{item.title}</h3>
                            <p className="text-muted">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>
            <NavigateToStation/>
            <br>
            </br>
            <br>
            </br>

          <footer>
        <FOOTER/>
</footer>

        </div>
        
        
    );
   
};


export default Livraison;
