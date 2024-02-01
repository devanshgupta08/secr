import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Ticker from './Components/Ticker';

export default function App() {
  return (
    <>
    <div className="d-none d-lg-block">
    <Header/>
    </div>
    <Navbar/>
    <Slider/>
    <Ticker/>
    </>
  )
}
