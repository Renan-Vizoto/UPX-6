import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './pages/Main';
import UmidadeSolo from './pages/UmidadeSolo';
import UmidadeAr from './pages/UmidadeAr';
import Temperatura from './pages/Temperatura'
import NivelAgua from './pages/NivelAgua';

import { SensorDataProvider } from './contexts/SensorDataContext';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />
  },
  {
    path: "umidade-solo",
    element: <UmidadeSolo />
  },
  {
    path: "umidade-ar",
    element: <UmidadeAr />
  },
  {
    path: "temperatura",
    element: <Temperatura />
  },
  {
    path: "nivel-agua",
    element: <NivelAgua />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SensorDataProvider>
      <RouterProvider router={router} />
    </SensorDataProvider>
  </React.StrictMode>
);
