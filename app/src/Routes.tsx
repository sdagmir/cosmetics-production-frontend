import {RouteObject, useRoutes} from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { ChemicalCatalogPage } from "./pages/ChemicalCatalogPage";
import ChemicalElementPage from "./pages/ChemicalElementPage";


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
    ];
    const routeResult = useRoutes(routes);
    return <>{routeResult}</>;
};