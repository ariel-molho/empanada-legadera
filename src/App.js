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
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/historial" element={<OrderHistory/>} />
          <Route path="/nuevo-pedido" element={<NewOrder/>} />
          <Route path="/administrador" element={<AdminPage/> } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;

/*
https://www.youtube.com/watch?v=Y9-UkL6ent4&ab_channel=FaztCode
https://github.com/FaztWeb/react-crud-firestore
https://www.youtube.com/watch?v=9bXhf_TELP4&ab_channel=PedroTech
https://github.com/machadop1407/react-firebase-authentication

https://www.npmjs.com/package/dotenv ?
test@gmail.com
testpass1
arielmolho@gmail.com
Monster1
*/