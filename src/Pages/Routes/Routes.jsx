import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Home from '../Home/Home';
import App from '../../App';
import Apps from '../Apps/Apps';
import Installation from '../Installation/Installation';
import Error from '../Error/Error';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: '/',
        loader: () => fetch('/apps.json'),
        Component: Home
      },
      {
        path: '/apps',
        loader: () => fetch('/apps.json'),
        Component: Apps
      },
      {
        path: '/installation',
        Component: Installation
      }
    ]
  },
]);