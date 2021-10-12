import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Sdata from './Sdata';
// import Netflix from './Netflix';
// import Amazon from './Amazon';

// import Project1 from './Project1'
// import Project2 from './Project2'
// root

ReactDOM.render(
                    <BrowserRouter>
               <App  />
  
                </BrowserRouter>

,document.getElementById('root'));

// if else condition
// const FavS=()=>{
// if (series==="netflix") {
//         return <Netflix/>
// }
// else{
//         return <Amazon/>
// }
// }

