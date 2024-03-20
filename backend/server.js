import React, { useState,useEffect } from 'react';
import './app.js';
function gettingapi() {
  const [ad, ad1] = useState([]);

  const funct = new Promise() => {

    const apis = [
      {a:'https://example.com/api1'},
      {b:'https://example.com/api2'},
      {c:'https://example.com/api3'},
      {d:'https://example.com/api4'},
      {c:'https://example.com/api5'},
    ];
    Promise.all(apis.map(a => fetch(a)))
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(data => ad1(data))
      .catch(error => console.error('Error:', error));
  }[];

  return (
    <div>
      <ol>
        {ad.map((api, index) => (
          <li key={index}>{api.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default gettingapi;
