import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Index from './components/Index';

function App() {
  return (
    <Router>

      <div className='App'>

        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>

      </div>

    </Router>
  );
}

export default App;
