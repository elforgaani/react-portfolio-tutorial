import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import NotFound from './components/NotFound/NotFound';

function App(): JSX.Element {
  const routes = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'portfolio', element: <Portfolio /> },
        { path: 'contacts', element: <Contacts /> },
        { path: '*', element: <NotFound /> }
      ]
    }
  ])

  return (
    <RouterProvider router={routes} />
  );
}

export default App;
