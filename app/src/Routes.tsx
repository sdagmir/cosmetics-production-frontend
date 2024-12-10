import {RouteObject, useRoutes} from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { ChemicalCatalogPage } from "./pages/ChemicalCatalogPage";
import ChemicalElementPage from "./pages/ChemicalElementPage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { UserAccountPage } from "./pages/UserAccountPage";
import { FormulationPage } from "./pages/FormulationPage";
import { FormulationsListPage } from "./pages/FormulationsListPage";


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
        {
            path: "formulations/:formulationId",
            element: <FormulationPage />,
        },
        {
            path: "formulations-list",
            element: <FormulationsListPage />,
        },
    ];
    const routeResult = useRoutes(routes);
    return <>{routeResult}</>;
};