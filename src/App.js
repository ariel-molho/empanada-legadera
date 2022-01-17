import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './containers/LandingPage/LandingPage';
import Register from './containers/Register/Register';
import NotFound from './containers/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route exact path="/registro" element={<Register/>} />
          {/* <Route path="/historial" element={<p>OrderHistory</p>} />
          <Route path="/nuevo-pedido" element={<p>NewOrder</p>} />
          <Route path="/editar-pedido/:id" element={<p>EditOrder</p>} /> */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
https://www.youtube.com/watch?v=Y9-UkL6ent4&ab_channel=FaztCode
https://www.youtube.com/watch?v=1rLBjRF0ep0&ab_channel=FaztCode
*/