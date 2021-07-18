import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Section from './components/Section';
import Card from './components/Card';
import Slider from './components/Slider';
import Contact from './components/Contact';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Section />
    <Card />
    <Slider />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
