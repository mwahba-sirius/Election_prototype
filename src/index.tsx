import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { create } from 'domain';
import { Header } from './components/header';
import { ImageSlider } from './components/imageslider';
import { Service } from './components/Service';
import { RequestStep } from './components/requestStep';
import { MonitorRequest } from './components/monitorRequest';
import { ServicesList } from './components/servicesList';
const router = createBrowserRouter([{
  path: "/",
  element: <><Header /> <Outlet /></>,
  children: [{
    path: "",
    element: <ImageSlider />
  },
  {
    path: "/service",
    element: <Service />,
    children: [
      {
        path: "",
        element: <ServicesList />
      },
      {
        path: "new",
        element: <RequestStep />
      },
      {
        path: "monitor",
        element: <MonitorRequest />
      }
    ]
  }
  ]
},
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
