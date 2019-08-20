import React from 'react';

import './style.scss';

import Navbar from './components/Navbar/Navbar';
import InfoPanel from './components/InfoPanel/InfoPanel';
import Controls from './components/Controls/Controls';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app--main">
        <InfoPanel />
        <Controls />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
