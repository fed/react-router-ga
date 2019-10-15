import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default function App(props) {
  return (
    <div className="App">
      <header className="App__header">
        <Link to="/" className="App__title">Doggos are cool</Link>
      </header>

      <ul className="App__menu">
        <li className="App__menu-item">
          <Link to="/german-shepherd" className="App__menu-link">
            German Shepherd
          </Link>
        </li>
        <li className="App__menu-item">
          <Link to="/golden-retriever" className="App__menu-link">
            Golden Retriever
          </Link>
        </li>
        <li className="App__menu-item">
          <Link to="/shar-pei" className="App__menu-link">
            Chinese Shar-Pei
          </Link>
        </li>
      </ul>

      {props.children}
    </div>
  );
}
