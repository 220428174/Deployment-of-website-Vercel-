import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MantineProvider } from '@mantine/core';

import Login from './login';
import Register from './regi';
import LogoutPage from './LogoutPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
    <BrowserRouter>

    <Routes>
              <Route path="/" element={<App />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
                
              <Route path="/logout" element={<LogoutPage />} />
    </Routes>
      
    </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);




