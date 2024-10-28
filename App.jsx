import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to My Simple Vite React App</h1>
      <div className="mt-4">
        <Link className="btn btn-primary m-2" to="/about">About</Link>
        <Link className="btn btn-secondary m-2" to="/time">Current Time</Link>
        <Link className="btn btn-success m-2" to="/flexer">Flexer</Link>
      </div>
    </div>
  );
};

export default App;
