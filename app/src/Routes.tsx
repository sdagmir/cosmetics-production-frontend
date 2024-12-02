import {RouteObject, useRoutes} from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { ChemicalCatalogPage } from "./pages/ChemicalCatalogPage";
import ChemicalElementPage from "./pages/ChemicalElementPage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { UserAccountPage } from "./pages/UserAccountPage";


export const AppRoutes = () => {
    const routes: RouteObject[] = [
        {
            path: "",
            element: <MainPage />,
        },
        {
            path: "chemical-elements",
            element: <ChemicalCatalogPage />,
        },
        {
            path: "chemical-elements/:id",
            element: <ChemicalElementPage />,
        },
        {
            path: "register",
            element: <RegisterPage />,
        },
        {
            path: "login",
            element: <LoginPage />,
        },
        {
            path: "user-account",
            element: <UserAccountPage />,
        },
    ];
    const routeResult = useRoutes(routes);
    return <>{routeResult}</>;
};