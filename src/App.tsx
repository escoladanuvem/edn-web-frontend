import React from 'react';
import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

import './styles/global.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes />
      <Footer />
    </React.Fragment>
  );
}

export default App;
