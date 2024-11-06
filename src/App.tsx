import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { EngagementPortal } from './components/EngagementPortal';
import { VendorPortal } from './components/VendorPortal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/engagement/:id" element={<EngagementPortal />} />
        <Route path="/vendor/:id" element={<VendorPortal />} />
      </Routes>
    </Router>
  );
}

export default App;