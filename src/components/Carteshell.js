import React from 'react';
import { Link } from 'react-router-dom';
import carteShellImage from '../images/shell_card.jpg'; // Assurez-vous d'avoir cette image
import Head from './BarreNavigation';
import FOOTER from './footer';
import { FaGasPump, FaGift, FaStar, FaMobileAlt, FaCheckCircle, FaUserPlus, FaIdCard, FaQrcode, FaComments, FaQuestionCircle } from 'react-icons/fa';
const CarteShell = () => {
    return (
        <div className='container-fluid p-0' style={{ backgroundColor: '#f8f9fa'}}>
            <Head/>

            <section className='bg-shell-red text-white text-center py-5' style={{ backgroundColor: '#FF0000'}}>
                <div className='container'>
                  <br></br>
                    <h1 className='display-4 font-weight-bold'>Decouvrez la carte shell</h1>
                    <p className='lead'>
                    La carte Shell est bien plus qu'une simple carte de fidélité. C'est votre passeport pour des économies substantielles, des récompenses exclusives et des avantages personnalisés chaque fois que vous faites le plein ou utilisez nos services.
                    </p>
                    <img src={carteShellImage} alt="Carte Shell" className='img-fluid mt-4' style={{ maxWidth: '300px', border : '5px solid #FFD700', borderRadius:'15px' }}/>
                </div>
            </section>

            <section className='container my-5'>
                <h2 className='text-center mb-4 font-weight-bold' style={{color: '#FF0000'}}>Avantages de la carte shell</h2>
                  <div className='row'>
                    {[
                        { icon: <FaGasPump size={50} color="#FFD700" />, title: "Économies sur le carburant", text: "Bénéficiez de réductions immédiates sur chaque litre de carburant acheté." },
                        { icon: <FaGift size={50} color="#FFD700" />, title: "Points de fidélité", text: "Accumulez des points à chaque achat et échangez-les contre des récompenses excitantes." },
                        { icon: <FaStar size={50} color="#FFD700" />, title: "Offres exclusives", text: "Accédez à des offres spéciales et des promotions réservées aux détenteurs de la carte Shell." },
                        { icon: <FaMobileAlt size={50} color="#FFD700" />, title: "Suivi des dépenses", text: "Consultez facilement vos dépenses de carburant et suivez vos économies grâce à notre application mobile." },
                    ].map((item , index)=>
                    (
                        <div className='col-md-3 mb-4' key={index}>
                            <div className='card h-100 shadow-sm border-0 text-center p-4' style={{ backgroundColor: '#FFF',borderRadius: '15px'}}>
                                <div className='card-body'>
                                    <div className='mb-3'>{item.icon}</div>
                                    <h5 className='card-title font-weight-bold' style={{color : '#FF0000'}}>{item.title}</h5>
                                    <p className='card-text'>{item.text}</p>
                                </div>
                            </div>


                  </div>
                    ))}
                    </div>
            </section>

            <section className='bg-shell-shell-yellow py-5'style={{ background : '#FFD700'}}>
                <div className='container'>
                    <h2 className='text-center mb-4 font-weight-bold' style={{ color :'#FF0000'}}>Comment obtenir la carte shell</h2>
                        <div className='row'>
                            {[
                                { icon: <FaUserPlus size={50} color="#FF0000" />, title: "Inscription en ligne", text: "Remplissez notre formulaire en ligne pour demander votre carte Shell." },
                                { icon: <FaIdCard size={50} color="#FF0000" />, title: "En station", text: "Visitez notre station Sessi Station pour obtenir votre carte sur place." },
                                { icon: <FaCheckCircle size={50} color="#FF0000" />, title: "Documents nécessaires", text: "Une pièce d'identité valide et une preuve d'adresse sont nécessaires pour l'inscription." },
                               
                            ].map((item , index)=> (
                                <div className='col-md-4' key={index}>
                                   <div className='card h-100 shadow-sm border-0 text-center p-4' style={{
                                    backgroundColor : '#FFF' , borderRadius : '15px' }}>

                                  <div className='card-body'>
                                    <div className='mb-3'>{item.icon}</div>
                                    <h5 className='card-title font-weight-bold' style={{color: '#FF0000'}}>{item.title}</h5>
                                    </div> 
                                 </div>
                            
                               </div>
                              
                            ))}
                             </div>
                   
                          </div>
                          </section>
                          <section className="container my-5">
        <h2 className="text-center mb-4 font-weight-bold" style={{ color: '#FF0000' }}>Comment Utiliser la Carte Shell</h2>
        <div className="row">
          {[
            { icon: <FaGasPump size={50} color="#FFD700" />, title: "Faire le plein", text: "Présentez votre carte Shell à la caisse pour bénéficier des réductions." },
            { icon: <FaQrcode size={50} color="#FFD700" />, title: "Accumuler des points", text: "Utilisez votre carte à chaque achat pour accumuler des points." },
            { icon: <FaGift size={50} color="#FFD700" />, title: "Échanger des points", text: "Connectez-vous à votre compte en ligne pour échanger vos points contre des récompenses." },
          ].map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm border-0 text-center p-4" style={{ backgroundColor: '#FFF', borderRadius: '15px' }}>
                <div className="card-body">
                  <div className="mb-3">{item.icon}</div>
                  <h5 className="card-title font-weight-bold" style={{ color: '#FF0000' }}>{item.title}</h5>
                  <p className="card-text">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container my-5">
        <h2 className="text-center mb-4 font-weight-bold" style={{ color: '#FF0000' }}>FAQ</h2>
        <div className="row">
          {[
            { question: "Combien de temps faut-il pour recevoir ma carte Shell?", answer: "Vous recevrez votre carte dans les 7 à 10 jours ouvrables après votre inscription." },
            { question: "Puis-je utiliser ma carte Shell dans d'autres stations?", answer: "Oui, la carte Shell est valable dans toutes les stations Shell à travers le monde." },
          ].map((item, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card h-100 shadow-sm border-0 p-4" style={{ backgroundColor: '#FFF', borderRadius: '15px' }}>
                <div className="card-body">
                  <FaQuestionCircle size={30} color="#FFD700" className="mb-3" />
                  <h5 className="card-title font-weight-bold" style={{ color: '#FF0000' }}>{item.question}</h5>
                  <p className="card-text">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Call to Action */}
      <section className="bg-shell-yellow py-5 text-center" style={{ backgroundColor: '#FFD700' }}>
        <div className="container">
          <h2 className="mb-4 font-weight-bold" style={{ color: '#FF0000' }}>Prêt à rejoindre la famille Shell?</h2>
          <p className="lead mb-4" style={{ color: '#FF0000' }}>Obtenez votre carte dès aujourd'hui et commencez à économiser!</p>
          <Link to="/obtenir-carte" className="btn btn-shell-red btn-lg font-weight-bold" style={{ backgroundColor: '#FF0000', color: '#FFF', border: 'none', borderRadius: '25px', padding: '10px 30px' }}>
            Obtenez votre carte maintenant
          </Link>
        </div>
      </section>
<br></br>
<br></br>
      {/* Footer */}
      <FOOTER />
    </div>
  );
};

export default CarteShell;
