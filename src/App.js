import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './containers/LandingPage/LandingPage';
import NotFound from './containers/NotFound/NotFound';
import AppContextProvider from './context/cartContext';
import NewOrder from './containers/NewOrder/NewOrder';
import OrderHistory from './containers/OrderHistory/OrderHistory';
import AdminPage from './containers/AdminPage/AdminPage';

function App() {
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/historial" element={<OrderHistory/>} />
          <Route path="/nuevo-pedido" element={<NewOrder/>} />
          {(user && user === process.env.REACT_APP_ADMIN_USER) && <Route path="/administrador" element={<AdminPage/> } />}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;