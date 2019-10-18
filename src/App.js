import React from 'react';
import Nav from './components/Nav';
import routes from './Routes';
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      {routes}
    </div>
  );
}

export default App;