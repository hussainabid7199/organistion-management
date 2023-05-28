import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './components/partials/Index';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';


function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Index/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
