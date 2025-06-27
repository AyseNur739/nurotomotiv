import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(// idsi root olan divi sen yakala yakalayınca da sen onun içerisine index.html><div id="root">App komperenti buraya render edildi</div>
  <BrowserRouter>
    <App />
  </BrowserRouter>
);//buradaki app componenti App.jsx de export edildi (kullanabilmemeiz için gerekl)
