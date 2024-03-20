//import logo from './logo.svg';
import './App.css';
import React from 'react';
import './mypage.js';


function App() {
  return (
    <div>
      <h1 className="head">
        All Products
      </h1>
      <div >
      <h1 className='sech'>Mobile</h1>
        <ul className='row'>
          <div className="padd box ">
            <p >1.Samsung</p>
            <p>RS 6500</p>
            <p>Galaxy s21</p>
          </div>
          <div className="padd box">
            <p>2.Vivo</p>
            <p>RS 30000</p>
            <p>y55 pro</p>
          </div>
          <div className="padd box">
            <p>3.Realme</p>
            <p>RS 20000</p>
            <p>Narzo n53</p>
          </div>
          </ul>
      </div>
      <div >
      <h1 className='sech'>Laptop</h1>
        <ul className='row'>
          <div className="padd box ">
            <p>1.Samsung</p>
            <p>RS 150000</p>
            <p>Galaxy notebook 360</p>
          </div>
          <div className="padd box">
            <p>2.Dell</p>
            <p>RS 80000</p>
            <p>Dell 360</p>
          </div>
          <div className="padd box">
            <p>3.lenova</p>
            <p>RS 65000</p>
            <p>yoga 360 degree</p>
          </div>
          </ul>
      </div>
      <div >
      <h1 className='sech'>Watch</h1>
        <ul className='row'>
          <div className="padd box ">
            <p>1.Samsung</p>
            <p>RS 15000</p>
            <p>Smartwatch</p>
          </div>
          <div className="padd box">
            <p>2.Lemex</p>
            <p>RS 2000</p>
            <p>Normalwatch</p>
          </div>
          <div className="padd box">
            <p>3.Honor</p>
            <p>RS 6500</p>
            <p>Smartwatch</p>
          </div>
          </ul>
        </div>
    </div>
  
  );
}

export default App;
