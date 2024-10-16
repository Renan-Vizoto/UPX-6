import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './pages/Menu';

import { RouterProvider, createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
