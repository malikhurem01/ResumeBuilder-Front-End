import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './Components/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register from './Components/Register';
import PDFEditor from './Components/PDFEditor';
import Landing from './Components/Landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Register />
  },
  {
    path: '/editor',
    element: <PDFEditor />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
