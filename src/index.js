import React from 'react';
import ReactDOM from 'react-dom/client';

//최상위 컴포넌트에 딱 1회
import { BrowserRouter } from 'react-router-dom';

import Hd from './layout/Hd';
import Study from './test/Study'
import Commontitle from './test/Maintitle'

import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/layout.scss'

import db from './db/title.json' 

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
  <Study></Study>
  {
    db.map((v, i)=>{
      return <Commontitle cls={v.cls} t={v.t} p={v.p}></Commontitle>
    })
  }
  </BrowserRouter>
);



