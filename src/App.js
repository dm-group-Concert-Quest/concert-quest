import React from 'react';
import Nav from './components/Nav';
import routes from './Routes';
import './App.css';
import "./styles/Main.scss";

function App() {
  return (
    <div id='app'>
      <Nav />
      {routes}
    </div>
  );
}

export default App;