import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/home';
import About from './pages/about';
import Menu from './pages/menu';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exect component={Home} />
        <Route path="/about" component={About} />
        <Route path="/menu" component={Menu} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
