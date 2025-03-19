import React from 'react';
import ReactDOM from 'react-dom/client';


import { BrowserRouter } from 'react-router-dom';

import Hd from './layout/Hd';

import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/layout.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Hd></Hd>
  <div>기본폰트</div>
  <div className='text'>텍스트</div>
  <div className='title bg-dark text-white'>타이틀</div>
  <div className='light-en'>ABCabc</div>
  <div className='medium-en'>ABCabc</div>
  <div className='strong-en'>ABCabc</div>

  </BrowserRouter>
);



