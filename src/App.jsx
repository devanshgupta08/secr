import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Ticker from './Components/Ticker';
import QuickLinks from './Components/QuickLinks';

export default function App() {
  return (
    <>
    <div className="d-none d-lg-block">
    <Header/>
    </div>
    <Navbar/>
    <Slider/>
    <Ticker/>
    <div className='d-flex align-items-center justify-content-center'><QuickLinks/></div>
    </>
  )
}
