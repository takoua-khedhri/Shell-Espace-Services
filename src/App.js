import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Livraison from './components/livraison';
import Acceuil  from './components/Acceuil';
import Apropos from './components/Apropos';
import Offres from './components/Offres';
import Geolocalisation from './components/Geolocalisation';
import Contact from './components/contact';  // Importation de la page "Acceuil"
import BarreNavigation from './components/BarreNavigation';  // Importation de la page "Acceuil"
import Lavage from './components/lavage';
import Huile from './components/Huile';
import Vidange from './components/vidange';
import Footer from './components/footer';
import CarteShell from './components/Carteshell';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Acceuil" element={<Acceuil />} />
        <Route path="/livraison" element={<Livraison />}/>
        <Route path="/vidange" element={<Vidange />}/>
        <Route path="/offres" element={<Offres />} />
        <Route path="/Apropos" element={<Apropos />}/>
        <Route path="/Geolocalisation" element={<Geolocalisation/>} />
        <Route path="/BarreNavigation" element={<BarreNavigation/>} />
        <Route path="/lavage" element={<Lavage/>} />
        <Route path="/Carteshell" element={<CarteShell/>} />
        <Route path="/Huile" element={<Huile/>} />
        <Route path="/footer" element={<Footer/>} />

        




      </Routes>
    </Router>
  );
};

export default App;
