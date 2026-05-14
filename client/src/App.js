import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Listing from './pages/Listing';
import Artisan from './pages/Artisan';
import Legals from './pages/Legals';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      {/* Composant */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categorie/listing" element={<Listing />} />
        <Route path="/artisans/:id" element={<Artisan />} />
        <Route path="/legals" element={<Legals />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Footer */}
    </div>
  );
}

export default App;
