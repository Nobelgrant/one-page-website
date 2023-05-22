import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Services from './components/Services';
import Subscibe from './components/Subscibe';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='f-heading'>
            <h1>Feature</h1>
            <p> Here are feature of the software</p>
        </div>
      <Features />
      <Services />
      <Subscibe />
    </div>
  );
}

export default App;
