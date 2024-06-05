import React from 'react';
import './App.css';
import NewBornBaby from './components/newbornbaby/NewBornBaby';
import Hybday from './components/hbday/Hybday';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hybday />
      </header>
      <NewBornBaby />
      <Footer />
    </div>
  );
}

export default App;
