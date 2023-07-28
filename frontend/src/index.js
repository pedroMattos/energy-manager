import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { AppWrapper } from './views/styles';
import Sidebar from './views/Sidebar';
import Dashboard from './views/Dashboard';
import InvoiceHistory from './views/InvoiceHistory';
import HubPage from './views/Hub';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.StrictMode>
        <AppWrapper>
          <HubPage />
        </AppWrapper>
      </React.StrictMode>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <React.StrictMode>
        <AppWrapper>
          <Sidebar />
          <Dashboard />
        </AppWrapper>
      </React.StrictMode>
    ),
  },
  {
    path: "/history",
    element: (
      <React.StrictMode>
        <AppWrapper>
          <Sidebar />
          <InvoiceHistory />
        </AppWrapper>
      </React.StrictMode>
    )
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

reportWebVitals();
