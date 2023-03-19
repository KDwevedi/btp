//import logo from './logo.svg';
import './App.css';
import PayPlans from './components/payment-plans';
import Header from './components/header';
import Testimonial from './components/testimonial';
import ProdDescription from './components/product_desc';
import Team from './components/our-team';
import Contact from './components/contact';
import DemoPage from './components/demo';
import {Routes, Route } from 'react-router-dom';

function Home () {
  return (

    <>
    <Header/>
    <ProdDescription/>
    <Testimonial />
    <PayPlans/>
    <Team/>
    <Contact/>
  </>

  )
}

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}>
      </Route>
      <Route path='/demo' element={<DemoPage/>}>
      </Route>
    </Routes>


  );
}

export default App;
