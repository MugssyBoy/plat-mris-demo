import React from 'react';
import Header from './Header';
import { BrowserRouter as Router } from "react-router-dom";
import Main from './Main';
import Footer from '../component/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
