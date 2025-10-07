import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Home from '../Home/Home';
import App from '../../App';
import Apps from '../Apps/Apps';
import Installation from '../Installation/Installation';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children : [
        {
            index:true,
            path:'/',
            Component:Home
        },
        {
            path:'/apps',
            Component: Apps
        },
        {
            path:'/installation',
            Component:Installation
        }
    ]
  },
]);