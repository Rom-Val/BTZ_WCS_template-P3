import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AtelierCrea from './pages/AtelierCrea';
import AtelierDegus from './pages/AtelierDegus';
import NotreHistoire from './pages/NotreHistoire';
import InscriptionForm from './pages/InscriptionForm';
import Profil from './pages/Profil';
import './App.css';
import FicheDeRenseignement from './pages/FicheDeRenseignement';
import AppAdmin from './pages/Dashboard';
import FicheDegustation from './pages/FicheDegustation';
import Creation from './pages/Creation';
import Toggletest from './pages/Toggletest';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/admin/*' element={<AppAdmin />} />

        <Route path='/user/:userId/renseignement' element={<FicheDeRenseignement />} />
        
        <Route path="/" element={<Home />} />

        <Route path="/atelier-creation" element={<AtelierCrea />} />
        <Route path="/atelier-degustation" element={<AtelierDegus />} />
        <Route path='/user/:userId/degustation/:tasteId' element={<FicheDegustation />} />
        {/* <Route path='/user/:userId/creation/:workshopId' element={<Creation />} /> */}
        <Route path='/creation' element={<Creation />} />
        <Route path="/notre-histoire" element={<NotreHistoire />} />
        <Route path="/inscription" element={<InscriptionForm />} />
        <Route path='/profil' element={<Profil />} />
      </Routes>
    </Router>
  );
}

export default App;
