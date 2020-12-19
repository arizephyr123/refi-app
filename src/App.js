import React from 'react';
import './App.css';
import Header from './components/Header';
import Calculator from './components/Calculator';
import Results from './components/Results';

function App() {
  return (
    <div className='App'>
      <Header />
      <Calculator />
      <Results />
    </div>
  );
}

export default App;
