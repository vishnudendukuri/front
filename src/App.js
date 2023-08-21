// import React,{useState} from 'react'
// import { useDispatch, useSelector, useState } from 'react-redux'
// import { increment,decrement } from './actions'



// export default function App() {
//   const count=useSelector(state=>state.counter)
//   const dispatch=useDispatch
//   return (  
//     <div>
//       <h1>Count is:{count}</h1>
//       <button onClick={dispatch}>+</button>
//       <button onClick={()=>setCount(count-1)}>-</button>
//       </div>
//   )
// }

import React, { Component } from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Navigation from './Navigation'
import './App.css'

class App extends Component {
 render() {
   return (
     <div>
       <BrowserRouter>\
       <Navigation/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/Contact" element={<Contact/>}/>
       </Routes>
       </BrowserRouter>
     </div>
   );
 }
}
export default App;
