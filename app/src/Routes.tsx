import {RouteObject, useRoutes} from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { ChemicalCatalogPage } from "./pages/ChemicalCatalogPage";


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
        /*{
            path: "provider-duties/:id",
            element: <ProviderServicePage />,
        },*/
    ];
    const routeResult = useRoutes(routes);
    return <>{routeResult}</>;
};