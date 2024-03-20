//import logo from './logo.svg';
import './App.css';
import React from 'react';
import './mypage.js';
 let user =['user1','user2','user3','user4','user5'];

const greet = function(){
  return user.name+'Visit Again';
}
console.log(greet(...args));
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
            <button >1.Samsung</button>
            <p>RS 6500</p>
            <p>Galaxy s21</p>
          </div>
          <div className="padd box">
            <button>2.Vivo</button>
            <p>RS 30000</p>
            <p>y55 pro</p>
          </div>
          <div className="padd box">
            <button>3.Realme</button>
            <p>RS 20000</p>
            <p>Narzo n53</p>
          </div>
          </ul>
      </div>
      <div >
      <h1 className='sech'>Laptop</h1>
        <ul className='row'>
          <div className="padd box ">
            <button>1.Samsung</button>
            <p>RS 150000</p>
            <p>Galaxy notebook 360</p>
          </div>
          <div className="padd box">
            <button>2.Dell</button>
            <p>RS 80000</p>
            <p>Dell 360</p>
          </div>
          <div className="padd box">
            <button>3.lenova</button>
            <p>RS 65000</p>
            <p>yoga 360 degree</p>
          </div>
          </ul>
      </div>
      <div >
      <h1 className='sech'>Watch</h1>
        <ul className='row'>
          <div className="padd box ">
            <button>1.Samsung</button>
            <p>RS 15000</p>
            <p>Smartwatch</p>
          </div>
          <div className="padd box">
            <button>2.Lemex</button>
            <p>RS 2000</p>
            <p>Normalwatch</p>
          </div>
          <div className="padd box">
            <button>3.Honor</button>
            <p>RS 6500</p>
            <p>Smartwatch</p>
          </div>
          </ul>
        </div>
    </div>
  
  );
}

export default App;
