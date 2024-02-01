import {Outlet, createRoute, createRootRouteWithContext} from '@tanstack/react-router'
import NavBar from "./components/navbar.jsx";
import HomePage from "./components/home/home"
import InventoryPage from "./components/inventory/inventory"
import LoginPage from "./components/login/login"
import ItemManagementPage from "./components/itemmanagement/itemmanagement"
import SalesPage from "./components/sales/sales"
import {ThemeProvider} from "@material-tailwind/react";
import QueryProvider from "./QueryProvider";
import { Toaster } from "react-hot-toast"
const rootRoute = createRootRouteWithContext()({
    component: () =>
        <QueryProvider>
            <ThemeProvider>
                <NavBar/>
                <Outlet/>
                <Toaster/>
            </ThemeProvider>
        </QueryProvider>

})

const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: HomePage,
})
const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/login",
    component: LoginPage,
});
const inventoryRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/inventory",
    component: InventoryPage
})

const itemManagementRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/item-management",
    component: ItemManagementPage
})

const salesRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/sales",
    component: SalesPage
})

export {
    rootRoute,
    loginRoute,
    homeRoute,
    inventoryRoute,
    salesRoute,
    itemManagementRoute
}