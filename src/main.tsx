import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";

import LoginPage from "./components/login/login"
import HomePage from "./components/home/home"
//@ts-ignore
import InventoryPage from "./components/inventory/inventory"
import {Router, RouterProvider,redirect } from "@tanstack/react-router";
import {AuthService} from "./application/auth/AuthService.ts";
import NavBar from "./components/navbar.jsx";
import {rootRoute, homeRoute, inventoryRoute, loginRoute, itemManagementRoute, salesRoute} from "./router.tsx";

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
const routeTree = rootRoute.addChildren([
    loginRoute,
    homeRoute,
    inventoryRoute,
    itemManagementRoute,
    salesRoute,
])

const router = new Router({
    routeTree,
    defaultPreload: "intent",
})

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
