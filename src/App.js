//import logo from './logo.svg';
import './App.css';
import PayPlans from './components/payment-plans';
import Header from './components/header';
import Testimonial from './components/testimonial';
import ProdDescription from './components/product_desc';
import Team from './components/our-team';
import Contact from './components/contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Header/>
      <ProdDescription/>
      <Testimonial />
      <PayPlans/>
      <Team/>
      <Contact/>
    </>
      

    
  );
}

export default App;
