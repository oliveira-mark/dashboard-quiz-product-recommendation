import React from 'react';
import { Routes, Route } from 'react-router-dom';

import StyleGuide from './pages/StyleGuide';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/style-guide" element={<StyleGuide />} />
      </Routes>
    </main>
  );
}
export default App;
