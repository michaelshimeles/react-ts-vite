import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx';
import Settings from './settings.tsx';
import ErrorPage from './error-page.tsx';
import './index.css';
import { SidebarProvider } from './context/SidebarContext.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SidebarProvider>
      <RouterProvider router={router} />
    </SidebarProvider>
  </React.StrictMode>,
)
