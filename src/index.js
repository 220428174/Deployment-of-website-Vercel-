import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MantineProvider } from '@mantine/core';
import Login from './login';
import Register from './regi';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
    <BrowserRouter>

    <Routes>
              <Route path="/" element={<App />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
             
    </Routes>
      
    </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);


