import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './components/Home/Home';
import Chores from './components/Chores/Chores';
import Error from './components/Error/Error';
import Instructions from './components/Instructions/Instructions';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructions",
        element: <Instructions />,
      },
      {
        path: "/chores",
        element: <Chores />,
      }
    ]
  },
]);

root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);
