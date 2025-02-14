import React from 'react';
import '../css/Page_css.css'; // Si tu as un fichier CSS spécifique pour ce composant

const FOOTER = () => {
    return(

<footer style={{backgroundColor: '#333', color: 'white', padding: '1px 5px'}}>
<div className='container'>
    <div className='row justify-content-center'>
        <div className='col-md-6 text-center mb-4'>
   <h4>Contactez-nous</h4>
   <div className="my-3">
    <p>
        <i className='fas fa-phone-alt me-2'></i> Téléphone : +216 92 519 806
        </p>
      <p>
        <i className='fas fa-envelope me-2'></i> <span>Email: contact@livraison.com</span>
      </p>            

        <p>
            <i className='fas fa-map-marker-alt me-2'></i> Adresse : Sidi Hssine, Tunis
           </p>
   </div>
   </div>

   <div className='text-center mt-4'>
  <p>&copy; {new Date().getFullYear()} Livraison de Carburant . Tous droits réservés.</p>
  </div>
</div>
</div>
</footer>
    );
} 
export default FOOTER;