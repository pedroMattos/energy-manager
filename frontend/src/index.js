import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { AppWrapper } from './views/styles';
import Sidebar from './views/Sidebar';
import Dashboard from './views/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
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
    element: (<p>Teste</p>)
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

reportWebVitals();
