import React from 'react';
import './App.css';
import { HashRouter, Link } from 'react-router-dom'
import Header from './Components/Header/Header'
import routes from './routes'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Link to="/" />
        <Link to="/wizard" />
        {routes}
      </div>
    </HashRouter>

  );
}

export default App;