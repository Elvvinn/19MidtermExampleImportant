import {
    createBrowserRouter,

} from "react-router-dom";
import DetailPage from "../Pages/DetailProduct/detail";
import HomeProductPage from "../Pages/HomeProduct/home";
import LoginPage from "../Pages/Login/login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeProductPage />,
    },
    {
        path: "/detail/:id",
        element: <DetailPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
]);

export default router;