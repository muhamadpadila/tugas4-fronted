import React from 'react';
import './App.css';
import Hello from './components/Hello';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Hello nama={"reasya"} />
      <Hello nama={"rafatar"} />
      <Hello nama={"reaksi"} />
      <Hello nama={"reezyan"} />
      <Hello nama={"refa"}/>
      <Footer />
    </div>
  );
}

export default App;
