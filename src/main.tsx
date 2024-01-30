import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";

import LoginPage from "./components/login/login"
import HomePage from "./components/home/home"
import {createHashRouter, RouterProvider,redirect } from "react-router-dom";
import {AuthService} from "./application/auth/AuthService.ts";

const checkAuthState = (route) => {
    const isAuthenticated = AuthService.checkAuth();
    if (!isAuthenticated) {
        return redirect(route);
    }
    return null;
}

const checkLoginState = (route) => {
    const isAuthenticated = AuthService.checkAuth();
    if (isAuthenticated) {
        return redirect(route);
    }
    return null;
}

const router = createHashRouter([
    {
        path: "/login",
        element: <LoginPage />,
        loader: () => checkLoginState("/home"),

    },
    {
        path: "/home",
        element: <App />,
        loader: () => checkAuthState("/login"),
    },
    {
        path: "*",
        element: <div>Not Found</div>,
    }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ThemeProvider>

      <RouterProvider router={router} />
        </ThemeProvider>
      </React.StrictMode>,
)
