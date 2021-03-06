import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

import './styles/global.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
