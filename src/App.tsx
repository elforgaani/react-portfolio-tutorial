import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';

function App() {
  const routes = createBrowserRouter([
    {
      index  element: <Layout />, children: [
        // { path: 'home', element: <Home /> }
      ]
    }
  ])

  return (
    <RouterProvider router={routes} />
  );
}

export default App;
