import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './pages/Landing';
import Online from './pages/Online';
import Error from './pages/Error';
import Teste from './pages/Teste';
import PageLayout from './layouts/PageLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './main.scss'

ReactDOM.render(
  <React.StrictMode>
    <main>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Landing />} />
            <Route path="game" element={<Online />} />
            <Route path="error" element={<Error />} />
            <Route path="Teste" element={<Teste />} />
          </Route>
        </Routes> 
      </BrowserRouter>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);
