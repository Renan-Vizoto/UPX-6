import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './pages/Menu';
import UmidadeSolo from './pages/UmidadeSolo';
import UmidadeAr from './pages/UmidadeAr';
import NivelReservatorio from './pages/NivelReservatorio';
import Temperatura from './pages/Temperatura';

import { RouterProvider, createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />
  },
  {
    path: "/umidade-solo",
    element: <UmidadeSolo />
  },
  {
    path: "/umidade-ar",
    element: <UmidadeAr />
  },
  {
    path: "/nivel-reservatorio",
    element: <NivelReservatorio />
  },
  {
    path: "/temperatura-estufa",
    element: <Temperatura />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
