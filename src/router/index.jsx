import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/login';
import Home from '../pages/home';
import NotFound from '../pages/not-found';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Login />}/>
        <Route exact path="/home" element={ <Home />}/>
        <Route path="*" element={ <NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

