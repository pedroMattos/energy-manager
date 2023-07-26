import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './config/store'
import { Provider } from 'react-redux'
import './index.css';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
    </React.StrictMode>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

reportWebVitals();
