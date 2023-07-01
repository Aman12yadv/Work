
import './App.css';
import Nav from './component/Nav';
import { useState } from 'react';
import Home from './component/Home';
import Card from './component/Card';
import Card2 from './component/Card2';
import About from './component/About';
import Footer from './component/Footer';

function App() {


  return (
  <>
    
    <Nav/>
    <Home/>
    <Card/>
    <Card2/>
    <About/>
    <Footer/>
  </>
  );
}

export default App;
